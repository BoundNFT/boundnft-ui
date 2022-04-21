import React, { useCallback, useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useState } from 'react'
import { NETWORK, providerOptions } from '../constants'
import { Web3Provider, Network } from '@ethersproject/providers'
import moment from 'moment'
import { useDebounce } from 'use-debounce'

/**
 * Interfaces & types
 */
export interface IState {
  account: string
  connectWallet: () => void
  library: Web3Provider | undefined
  network: Network
  addTransaction?: any
  waitTxConfirm: boolean
  latestBlockNumber: number
}

/** @constant {Network} */
const initialNetwork: Network = {
  chainId: 0,
  name: ''
}

/** @constant {IState} */
const initialState: IState = {
  account: '',
  connectWallet: () => {},
  library: undefined,
  network: initialNetwork,
  waitTxConfirm: false,
  latestBlockNumber: 0
}

/**
 * Wallet context init
 * @param initialState
 */
export const WalletContext = React.createContext<IState>(initialState)
export const shouldCheck = (lastBlockNumber: number, tx: any) => {
  if (tx.receipt) return false
  if (tx.confirmed) return false
  if (!tx.lastCheckedBlockNumber) return true
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber
  if (blocksSinceCheck < 1) return false
  const minutesPending = (moment().unix() - tx.addedTime) / 60
  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9
  } else if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2
  } else {
    // otherwise every block
    return true
  }
}

/**
 * WalletContextProvider
 * @param {ReactElement} children
 * @return {ReactElement}
 */
const WalletContextProvider: React.FC = ({ children }): React.ReactElement => {
  const [provider, setProvider] = useState<any>()
  const [library, setLibrary] = useState<Web3Provider>()
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>()
  const [account, setAccount] = useState('')
  const [error, setError] = useState<any>('')
  const [network, setNetwork] = useState<Network>(initialNetwork)
  const [transactions, setTransactions] = useState<any>([])
  const [waitTxConfirm, setWaitTxConfirm] = useState<boolean>(false)
  const [lastBlockNumber, setLastBlockNumber] = useState<number>(0)
  const [debouncedLastBlockNumber] = useDebounce(lastBlockNumber, 300);
  
  const addTransaction = useCallback(
    (tx, callback = () => {}) => {
      const hash = tx.hash
      const txs = transactions
      txs[hash] = {
        hash,
        from: account,
        addedTime: moment().unix(),
        confirmed: false,
        callback
      }
      setTransactions(txs)
      setWaitTxConfirm(true)
    },
    [transactions, account]
  )

  
  useEffect(() => {
    if (!network.chainId || !library || !debouncedLastBlockNumber) return

    Object.keys(transactions)
      .filter(hash => shouldCheck(debouncedLastBlockNumber, transactions[hash]))
      .forEach(hash => {
        library
          .getTransactionReceipt(hash)
          .then(receipt => {
            if (receipt) {
              const txs = transactions
              txs[hash].confirmed = true
              txs[hash].receipt = {
                blockHash: receipt.blockHash,
                blockNumber: receipt.blockNumber,
                contractAddress: receipt.contractAddress,
                from: receipt.from,
                status: receipt.status,
                to: receipt.to,
                transactionHash: receipt.transactionHash,
                transactionIndex: receipt.transactionIndex
              }
              setTransactions(txs)
              setWaitTxConfirm(false)
              txs[hash].callback({ tx: receipt.transactionHash, status: 'success' })
            } else {
              const txs = transactions
              txs[hash].lastCheckedBlockNumber = debouncedLastBlockNumber
              setTransactions(txs)
            }
          })
          .catch(error => {
            console.error(`failed to check transaction hash: ${hash}`, error)
          })
      })
  }, [library, transactions, debouncedLastBlockNumber, network.chainId])

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ethereum' in window) {
      setWeb3Modal(
        new Web3Modal({
          network: NETWORK,
          cacheProvider: true,
          providerOptions
        })
      )
    }
  }, [])

  const refreshState = useCallback(() => {
    setAccount('')
  }, [])

  const disconnect = useCallback(async () => {
    console.log('disconnect')
    await web3Modal?.clearCachedProvider()
    refreshState()
  }, [refreshState, web3Modal])

  const blockNumberCallback = useCallback((blockNumber) => {
    setLastBlockNumber(blockNumber)
  }, [])

  useEffect(() => {
    if (!provider) return
    if (provider?.on) {
      const handleAccountsChanged = (accounts: any) => {
        console.log('accountsChanged', accounts)
        if (accounts[0]) setAccount(accounts[0])
        else {
          setAccount('')
          web3Modal?.clearCachedProvider()
        }
      }

      const handleChainChanged = (_hexChainId: number) => {
        console.log('handleChainChanged', _hexChainId)
      }

      const handleDisconnect = () => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [disconnect, error, provider, web3Modal])

  useEffect(() => {
    if (!library || !network.chainId) return undefined
    try {
      library
        .getBlockNumber()
        .then(blockNumberCallback)
        .catch(error => console.error(`Failed to get block number for chainId: ${network.chainId}`, error))
      library.on('block', blockNumberCallback)
    } catch (e) {
      console.log('e', e)
    }
    return () => {
      library.removeListener('block', blockNumberCallback)
    }

  }, [blockNumberCallback, library, network.chainId])

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal?.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setNetwork(network)
      setProvider(provider)
      setLibrary(library)
      if (accounts) setAccount(accounts[0])
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }, [web3Modal])
  
  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet()
    }
  }, [connectWallet, web3Modal])

  return (
    <WalletContext.Provider
      value={{
        account,
        connectWallet,
        library,
        network,
        addTransaction,
        waitTxConfirm,
        latestBlockNumber: debouncedLastBlockNumber
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default WalletContextProvider
