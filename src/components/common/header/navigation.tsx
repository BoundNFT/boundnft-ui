import React from 'react'
import { Flex, BoxProps } from 'theme-ui'
import routes from '../../../constants/routes'
import { IRoutes } from '../../../constants/types'
import NavButton from '../nav-button'

const Navigation: React.FC<BoxProps> = ({ ...resprops }) => {
  return (
    <Flex sx={{ alignItems: 'center' }} {...resprops}>
      {routes.map((route: IRoutes, index) => (
        <NavButton key={`nav-button-${index}`} {...route} />
      ))}
    </Flex>
  )
}

export default Navigation
