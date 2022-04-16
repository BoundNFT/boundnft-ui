import { useTranslation } from 'react-i18next'
import { Button } from 'theme-ui'
import { shortenAddress } from 'utils/shorten-address'
import useWallet from './hooks/useWallet'

const Web3Status: React.FC = () => {
  const { t } = useTranslation('common')
  const { account, connectWallet } = useWallet()

  console.log('account', account)
  return (
    <Button variant='buttons.web3' sx={{ width: 126, textAlign: 'center', px: 10 }} onClick={connectWallet}>
      {account ? shortenAddress(account, 4) : t('button.connect').toUpperCase()}
    </Button>
  )
}

export default Web3Status
