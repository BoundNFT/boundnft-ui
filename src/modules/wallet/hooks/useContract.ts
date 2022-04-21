import { useMemo } from 'react'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants'
import { getContract } from '../utils/contract'
import useWallet from './useWallet'
// returns null on errors
export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true) {
  const { library, account } = useWallet()
  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useMulticallContract() {
  const { network: { chainId } } = useWallet()
  return useContract(chainId && MULTICALL_NETWORKS[chainId] ? MULTICALL_NETWORKS[chainId] : undefined, MULTICALL_ABI, false)
}
