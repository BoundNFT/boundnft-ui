import useResponsive from 'hooks/common/useResponsive'
import React, { useEffect, useState } from 'react'
import { Flex, BoxProps } from 'theme-ui'
import routes from '../../../constants/routes'
import { IRoutes } from '../../../constants/types'
import { DropdownMenu } from '../dropdown'
import NavButton from '../nav-button'

const Navigation: React.FC<BoxProps> = ({ ...resprops }) => {
  const { isTablet } = useResponsive()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <>
      {isTablet && (
        <Flex sx={{ alignItems: 'center' }} {...resprops}>
          {routes.map((route: IRoutes, index) => (
            <NavButton key={`nav-button-${index}`} {...route} />
          ))}
        </Flex>
      )}
      {!isTablet && (
        <Flex sx={{ mr: 10 }}>
          <DropdownMenu
            menu={['Mobile menu']}
            menuStyle={{
              width: '250px',
              ml: '-75px',
              mt: '10px'
            }}
          />
        </Flex>
      )}
    </>
  )
}

export default Navigation
