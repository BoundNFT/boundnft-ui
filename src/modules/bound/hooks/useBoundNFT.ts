import { useSingleCallResult } from "modules/wallet/hooks/useSingleCallResult"
import useWallet from "modules/wallet/hooks/useWallet"
import { useCallback, useState } from "react"
import { BNFT_REGISTRY } from "../constants"
import { handleError } from "../utils/handleError"
import { useCreateBNFT } from "./useBNFTRegistry"
import { useBNFTRegistryContract } from "./useContract"

export enum Screen {
  available = 'available',
  available_confirm = 'available_confirm',
  available_processing = 'available_processing',
  success = 'success',
  error = 'error'
}

type UseBoundNFTResult = {
  screenState: Screen
  setScreenState: any
  data: {
    errorMsg: string
    txHash: string
  }
  handleCreateBNFT: ({ nftAsset_address }: { nftAsset_address: string }) => void
  
}

const useBoundNFT = (): UseBoundNFTResult => {
  const { addTransaction } = useWallet()
  const [screenState, setScreenState] = useState<Screen>(Screen.available)
  const [data, setData] = useState({
    errorMsg: '',
    txHash: ''
  })

  const BNFTContract = useBNFTRegistryContract(BNFT_REGISTRY)
  const { result: getBNFTAssetList } = useSingleCallResult(BNFTContract, 'getBNFTAssetList', [], { blocksPerFetch: 2, callback: () => { console.log('test') } })

  console.log('getBNFTAssetList', getBNFTAssetList)



  
  const { onCreateBNFT } = useCreateBNFT()
  const handleCreateBNFT = useCallback(
    async ({ nftAsset_address }: { nftAsset_address: string }) => {
      try {
        setScreenState(Screen.available_confirm)
        const tx = await onCreateBNFT(nftAsset_address)
        setData({
          txHash: '',
          errorMsg: ''
        })
        // user rejected tx or didn't go thru
        if (!tx || tx.message) {
          setScreenState(Screen.error)
          setData({
            txHash: '',
            errorMsg: tx?.error?.message ? handleError({ errorMessage: tx?.error?.message }) : tx?.message
          })
        } else {
          setData({
            txHash: tx.hash,
            errorMsg: ''
          })
          setScreenState(Screen.available_processing)
          addTransaction(tx, () => {
            setScreenState(Screen.success)
          })
        }
      } catch (e: any) {
        console.log(e)
        setData({
          txHash: '',
          errorMsg: e.msg
        })
        setScreenState(Screen.error)
      }
    },
    [addTransaction, onCreateBNFT]
  )

  return {
    screenState,
    setScreenState,
    data,
    handleCreateBNFT
  }
}

export default useBoundNFT
