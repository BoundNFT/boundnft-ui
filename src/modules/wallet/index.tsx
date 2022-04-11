import { useTranslation } from "react-i18next"
import { Button } from "theme-ui"



const Web3Status: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Button variant='buttons.web3' sx={{ maxWidth: 126}}>
      {t('button.connect').toUpperCase()}
    </Button>



  )
}

export default Web3Status