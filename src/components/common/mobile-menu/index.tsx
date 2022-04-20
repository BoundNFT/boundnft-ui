import { WINDOW_POSITION_TRIGGER } from 'constants/index'
import { IRoutes } from 'constants/types'
import useWindowPosition from 'modules/hooks/use-window-position'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Flex, NavLink, Text } from 'theme-ui'
import { MotionBox, MotionFlex } from '../motion-components'
import { DefaultMenuButton } from './details/default-menu-button'
import { slideVerticalAnimation } from './details/motion-containers'

interface IDropdownMenu {
  menu: IRoutes[]
  menuStyle?: object | any
  menuButton?: React.ReactElement
}

const MobileMenu: React.FC<IDropdownMenu> = ({ menu, menuStyle, menuButton }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuHeight = useMemo(() => (menu.length + 1) * 32, [menu.length])
  const windowPosition = useWindowPosition()

  useEffect(() => {
    if (windowPosition > WINDOW_POSITION_TRIGGER) {
      setIsOpen(false)
    }
  }, [windowPosition])

  return (
    <MotionBox>
      {menuButton ? menuButton : <DefaultMenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />}
      <MotionFlex
        sx={{
          position: 'absolute',
          backgroundColor: 'accent',
          width: '100%',
          mt: 20,
          left: 0,
          boxShadow: '0 0 1rem 0.5rem rgba(0, 0, 0, 0.6)',
          zIndex: 300,
          overflowY: 'hidden',
          overflowX: 'hidden',
          ...menuStyle
        }}
        style={{ height: menuHeight }}
        variants={slideVerticalAnimation}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <MotionFlex sx={{ flexDirection: 'column', padding: 20 }}>
          <Text sx={{ color: 'black', mb: 20 }}>Navigation</Text>
          <Flex sx={{ flexDirection: 'column' }}>
            {menu.map(link => (
              <Flex key={link.name} sx={{ m: 10, ml: 0, fontSize: 12, color: 'black' }} onClick={() => setIsOpen(!isOpen)}>
                {link.external ? (
                  <NavLink href={link.route} target='_blank' rel='noreferrer noopener'>
                    {link.name}
                  </NavLink>
                ) : (
                  <Link href={link.route} passHref>
                    <NavLink>{link.name}</NavLink>
                  </Link>
                )}
              </Flex>
            ))}
          </Flex>
        </MotionFlex>
      </MotionFlex>
    </MotionBox>
  )
}

export default MobileMenu
