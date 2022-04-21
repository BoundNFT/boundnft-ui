/**
 * @dev Create BNFT contract from NFT
 * @param contract The registry contract
 * @param nftAsset_address NFT asset address
 **/
export const createBNFT = async (contract: any, nftAsset_address: string) => {
  console.log('util token createBNFT data', contract, nftAsset_address)

  return contract
    .createBNFT(nftAsset_address, {})
    .then((response: any) => {
      return response
    })
    .catch((error: Error) => {
      console.debug('Failed to createBNFT', error)
      throw error
    })
}
