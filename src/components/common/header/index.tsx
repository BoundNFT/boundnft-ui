import { Flex } from 'theme-ui'
import Navigation from './navigation'
import Logo from './logo'
import Web3Status from '../../../modules/wallet'
import { rgba } from 'polished'
import useWindowPosition from 'modules/hooks/use-window-position'
import { MotionFlex } from '../motion-components'
import { useEffect, useRef, useState } from 'react'
import { WINDOW_POSITION_TRIGGER, HEADER_HEIGHT } from 'constants/index'

const Header: React.FC = () => {
  const windowPosition = useWindowPosition()
  const [show, setShow] = useState(true)
  const navbarRef = useRef<number>(0)

  useEffect(() => {
    if (windowPosition < WINDOW_POSITION_TRIGGER) return
    if (navbarRef.current < windowPosition) {
      setShow(false)
    } else {
      setShow(true)
    }
    navbarRef.current = windowPosition
  }, [windowPosition])

  return (
    <MotionFlex
      initial={{
        backdropFilter: 'blur(0px)',
        opacity: 1,
        y: 0
      }}
      animate={{
        backdropFilter: windowPosition > 78 ? 'blur(5px)' : 'blur(0px)',
        opacity: show ? 1 : 0,
        y: show ? 0 : -HEADER_HEIGHT
      }}
      transition={{
        duration: 0.3
      }}
      sx={{
        position: 'fixed',
        backgroundColor: rgba(6, 10, 16, 0.3),
        width: '100%',
        height: [HEADER_HEIGHT],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        px: [20, 20, 40, null],
        zIndex: 200
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1280
        }}
      >
        <Logo />

        <Flex sx={{ justifyContent: 'flex-end' }}>
          <Navigation />
          <Flex sx={{ ml: [0, 0, 0, 50] }}>
            <Web3Status />
          </Flex>
        </Flex>
      </Flex>
    </MotionFlex>
  )
}

export default Header

export { Navigation }
