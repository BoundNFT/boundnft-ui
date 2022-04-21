import { useCallback } from "react"
import { BNFT_REGISTRY } from "../constants"
import { createBNFT } from "../utils/BNFTRegistry"
import { useBNFTRegistryContract } from "./useContract"


export const useCreateBNFT = () => {
  const BNFTContract = useBNFTRegistryContract(BNFT_REGISTRY)

  const handleAction = useCallback(
    async (nftAsset_address: string) => {
      try {
        const tx = await createBNFT(BNFTContract, nftAsset_address)
        return tx
      } catch (e) {
        return e
      }
    },
    [BNFTContract]
  )

  return { onCreateBNFT: handleAction }
}
