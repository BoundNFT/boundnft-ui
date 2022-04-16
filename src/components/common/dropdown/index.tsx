import { useState } from 'react'
import { Flex, Text } from 'theme-ui'
import { MotionBox, MotionFlex } from '../motion-components'
import { DefaultMenuButton } from './details/default-menu-button'
import { slideVerticalAnimation } from './details/motion-containers'

interface IDropdownMenu {
  menu: string[]
  menuStyle?: object | any
  menuButton?: React.ReactElement
}

export const DropdownMenu: React.FC<IDropdownMenu> = ({ menu, menuStyle, menuButton }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const menuHeight = (menu.length + 1) * 32;

  return (
      <MotionBox>
        {menuButton ? menuButton : <DefaultMenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />}
        <MotionFlex
          sx={{ 
            backgroundColor: 'white', 
            width: 200, 
            mt: 20,
            ml: -160, 
            boxShadow: '0 0 1rem 0.5rem rgba(0, 0, 0, 0.6)', 
            position: 'absolute', 
            zIndex: 300,
            overflowY: 'hidden',
            overflowX: 'hidden',
            ...menuStyle
          }}
          style={{ height: menuHeight }}
          variants={slideVerticalAnimation}
          initial='hidden'
          animate={isOpen ? 'visible' : ''}

        >
          <MotionFlex sx={{flexDirection: 'column', padding: 20, }}>
            <Text sx={{ color: 'black', mb: 20}}>Sort by</Text>
            <Flex sx={{flexDirection: 'column'}}>
              {menu.map((text, i) => (
                <Flex key={i} sx={{m: 10, ml: 0, fontSize: 12, color: 'black' }}>
                  {text}
                </Flex>
              ))}
            </Flex>
          </MotionFlex>
        </MotionFlex>
      </MotionBox>
  )
}

