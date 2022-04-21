import { Screen } from "modules/bound/hooks/useBoundNFT"

export type CreateBoundNFTContext = {
  screenState?: Screen
  setScreenState?: any
  isBack?: boolean
  setIsBack: Function
  metaData?: any
  setMetaData?: React.Dispatch<React.SetStateAction<any>>
  handleStep1?: any
  handleCreateBNFT?: any
}
