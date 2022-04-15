import { useTranslation } from 'react-i18next'
import { Button, Text } from 'theme-ui'
import { shortenAddress } from 'utils/shorten-address'
import useWallet from './hooks/useWallet'



const Web3Status: React.FC = () => {
  const { t } = useTranslation('common')
  const { account,  connectWallet } = useWallet()

  console.log('account', account)
  return (
    <Button 
      variant='buttons.web3' 
      
      sx={{ px: 15, width: 126, alignitems: 'center'}}
      onClick={connectWallet}
    >
      <Text sx={{ textAlign: 'center'}}>{account ? shortenAddress(account) : t('button.connect').toUpperCase()}</Text>
    </Button>



  )
}

export default Web3Status