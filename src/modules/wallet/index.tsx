import CopyHelper from 'components/common/copy-helper'
import { slideVerticalAnimation } from 'components/common/mobile-menu/details/motion-containers'
import { MotionFlex } from 'components/common/motion-components'
import { WINDOW_POSITION_TRIGGER } from 'constants/index'
import useResponsive from 'hooks/common/useResponsive'
import useTheme from 'hooks/common/useTheme'
import useWindowPosition from 'modules/hooks/use-window-position'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Flex, Text } from 'theme-ui'
import SpacerDash from 'theme/ui/common/spacer-dash'
import { IconWallet } from 'theme/ui/icons'
import { shortenAddress } from 'utils/shorten-address'
import useWallet from './hooks/useWallet'
import Blockies from 'react-blockies'

const Web3Status: React.FC = () => {
  const { t } = useTranslation('common')
  const { account, connectWallet } = useWallet()
  const [isOpen, setIsOpen] = useState(false)
  const { colors } = useTheme()
  const windowPosition = useWindowPosition()
  const { isMobile } = useResponsive()

  useEffect(() => {
    if (windowPosition > WINDOW_POSITION_TRIGGER) {
      setIsOpen(false)
    }
  }, [windowPosition])

  return (
    <>
      {!isMobile ? (
        <Button
          variant='buttons.web3'
          sx={{ width: 126, textAlign: 'center', px: 10 }}
          onClick={() => (!account ? connectWallet() : account ? setIsOpen(!isOpen) : undefined)}
        >
          {account ? shortenAddress(account, 4) : t('button.connect').toUpperCase()}
        </Button>
      ) : (
        <Button
          variant='buttons.web3'
          sx={{ width: 36, textAlign: 'center', px: 0 }}
          onClick={() => (!account ? connectWallet() : account ? setIsOpen(!isOpen) : undefined)}
        >
          <IconWallet size={18} color={account ? colors.blue[100] : '#EF5350'} />
        </Button>
      )}
      <MotionFlex
        sx={{
          alignSelf: 'right',
          position: 'fixed',
          backgroundColor: 'grey.100',
          width: [300, 300, 350],
          mt: [50, 70, 100],
          ml: [-265, -265, -225],
          boxShadow: '0 0 1rem 0.5rem rgba(0, 0, 0, 0.6)',
          zIndex: 300,
          overflowY: 'hidden',
          overflowX: 'hidden'
        }}
        variants={slideVerticalAnimation}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <MotionFlex sx={{ flexDirection: 'column', padding: 20, width: '100%' }}>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Flex sx={{ borderRadius: 52, width: 80, height: 80, overflow: 'hidden' }}>
              <Blockies seed={account} size={80} scale={6} />
            </Flex>
            <Flex mt={25}>
              <CopyHelper toCopy={account}>
                <Text color='blue.100'>{shortenAddress(account, 14)}</Text>
              </CopyHelper>
            </Flex>
          </Flex>
        </MotionFlex>

        <Flex sx={{ flexDirection: 'column', color: 'blue.100' }}>
          <SpacerDash bgColor={'blue.100'} width='100%' height={1} />

          <Flex sx={{ width: '100%', justifyContent: 'space-between', px: 40, my: 10 }}>
            <Text>Wallet</Text>
            <Text>Metamask</Text>
          </Flex>
          <SpacerDash bgColor={'blue.100'} width='100%' height={1} />

          <Flex sx={{ width: '100%', justifyContent: 'space-between', px: 40, my: 10 }}>
            <Text>Connected network</Text>
            <Text>Ethereum</Text>
          </Flex>

          <SpacerDash bgColor={'blue.100'} width='100%' height={1} />

          <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Button variant='buttons.disconnect' sx={{ width: 126, textAlign: 'center', px: 10 }}>
              Disconnect
            </Button>
          </Flex>
        </Flex>
      </MotionFlex>
    </>
  )
}

export default Web3Status
