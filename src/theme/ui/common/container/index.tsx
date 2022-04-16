import React from 'react'
import { Flex } from 'theme-ui'
import { IContainer } from './interfaces'

const Container: React.FC<IContainer> = ({ hasBorder = false, hasPadding = false, children, ...restprops }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        maxWidth: 1400,
        p: hasPadding ? [20, 20, 30] : undefined,
        borderWidth: hasBorder ? 2 : null,
        borderStyle: hasBorder ? 'solid' : null,
        borderColor: hasBorder ? 'primary' : null
      }}
      {...restprops}
    >
      {children}
    </Flex>
  )
}

export default Container
