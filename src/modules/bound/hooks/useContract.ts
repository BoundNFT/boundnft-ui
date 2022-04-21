import { Contract } from '@ethersproject/contracts'
import { useContract } from 'modules/wallet/hooks/useContract'
import useWallet from 'modules/wallet/hooks/useWallet'
import { BNFT_REGISTRY_ABI, IERC721_ABI } from '../constants'

export function useBNFTRegistryContract(address: string, withSignerIfPossible?: boolean): Contract | null {
  const { network: chainId } = useWallet()
  return useContract(chainId && address, BNFT_REGISTRY_ABI, withSignerIfPossible)
}

export function useERC721Contract(address: string, withSignerIfPossible?: boolean): Contract | null {
  const { network: chainId } = useWallet()
  return useContract(chainId && address, IERC721_ABI, withSignerIfPossible)
}
