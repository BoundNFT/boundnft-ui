import React from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface SpacerDashProps extends BoxProps {
  bgColor: string
  width?: number
  height?: number
}

const SpacerDash: React.FC<SpacerDashProps> = ({ bgColor, width, height }) => {
  return <Box bg={bgColor} sx={{ backgroundClip: bgColor, width: width ? width : '100%', height: height ? height : 4 }} />
}

export default SpacerDash
