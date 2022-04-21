import { get } from "lodash"
import { useSingleCallResult } from "modules/wallet/hooks/useSingleCallResult"
import useWallet from "modules/wallet/hooks/useWallet"
import { useCallback, useMemo, useState } from "react"
import { handleError } from "../utils/handleError"
import { useCreateBNFT } from "./useBNFTRegistry"
import { useERC721Contract } from "./useContract"

export enum Screen {
  fetchMetadata = 'fetchMetadata',
  checkDetails = 'checkDetails',
  boundNFTConfirm = 'boundNFTConfirm',
  boundNFTProcessing = 'boundNFTProcessing',
  boundNFTCreationSuccess = 'boundNFTCreationSuccess',
  boundNFTCreationError = 'boundNFTCreationError',
}

type UseBoundNFTResult = {
  screenState: Screen
  setScreenState: any
  data: {
    errorMsg: string
    txHash: string
  }
  handleCreateBNFT: ({ nftAsset_address }: { nftAsset_address: string }) => void
  handleStep1: any
  metaData: {
    contractAddress: string
    contractName: string
    contractSupply: string
  }
}

const useBoundNFT = (): UseBoundNFTResult => {
  const { addTransaction } = useWallet()
  const [screenState, setScreenState] = useState<Screen>(Screen.fetchMetadata)
  const [data, setData] = useState({
    errorMsg: '',
    txHash: ''
  })
  const [ERC721Address, setERC721Address] = useState('')

  const ERC721Contract = useERC721Contract(ERC721Address)
  const { result: ERC721totalSupply } = useSingleCallResult(ERC721Contract, 'totalSupply', [], { blocksPerFetch: 10 })
  const { result: ERC721Name } = useSingleCallResult(ERC721Contract, 'name', [], { blocksPerFetch: 10 })

  const metaData = useMemo(() => {
    return {
      contractAddress: ERC721Address,
      contractName: get(ERC721Name, 0),
      contractSupply: get(ERC721totalSupply, 0)?.toString()
    }
  }, [ERC721Address, ERC721Name, ERC721totalSupply])

  const handleStep1 = useCallback(({ address }:{address: string}) => {
    setScreenState(Screen.checkDetails)
    setERC721Address(address)
  }, [])

  
  const { onCreateBNFT } = useCreateBNFT()
  const handleCreateBNFT = useCallback(
    async () => {
      try {
        setScreenState(Screen.boundNFTConfirm)
        const tx = await onCreateBNFT(ERC721Address)
        setData({
          txHash: '',
          errorMsg: ''
        })
        // user rejected tx or didn't go thru
        if (!tx || tx.message) {
          setScreenState(Screen.checkDetails)
          setData({
            txHash: '',
            errorMsg: tx?.error?.message ? handleError({ errorMessage: tx?.error?.message }) : tx?.message
          })
        } else {
          setData({
            txHash: tx.hash,
            errorMsg: ''
          })
          setScreenState(Screen.boundNFTProcessing)
          addTransaction(tx, () => {
            setScreenState(Screen.boundNFTCreationSuccess)
          })
        }
      } catch (e: any) {
        console.log(e)
        setData({
          txHash: '',
          errorMsg: e.msg
        })
        setScreenState(Screen.boundNFTCreationError)
      }
    },
    [ERC721Address, addTransaction, onCreateBNFT]
  )

  return {
    screenState,
    setScreenState,
    data,
    handleCreateBNFT,
    handleStep1,
    metaData
  }
}

export default useBoundNFT
