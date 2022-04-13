import { useTranslation } from "react-i18next"
import { Button } from "theme-ui"
import useWallet from "./hooks/useWallet"



const Web3Status: React.FC = () => {
  const { t } = useTranslation('common')
  const { account,  connectWallet } = useWallet()

  console.log('account', account)
  return (
    <Button 
      variant='buttons.web3' 
      sx={{ maxWidth: 126}}
      onClick={connectWallet}
    >
      {account ? account : t('button.connect').toUpperCase()}
    </Button>



  )
}

export default Web3Status