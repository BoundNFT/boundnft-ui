import BNFT_REGISTRY_ABI from './abis/BNFTRegistry.json'
import IERC721_ABI from './abis/IERC721.json'

export const BNFT_REGISTRY = process.env.NEXT_PUBLIC_BNFT_REGISTRY || '0xB873F088EB721261bc88BbC739B5C794e02e414b'

export {
  BNFT_REGISTRY_ABI,
  IERC721_ABI
}
