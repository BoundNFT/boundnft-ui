import React from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface SpacerDashProps extends BoxProps {
  bgColor: string
  width?: number | string
  height?: number | string
}

const SpacerDash: React.FC<SpacerDashProps> = ({ bgColor, width, height }) => {
  return <Box sx={{ bg: bgColor, width: width ? width : '100%', height: height ? height : 4 }} />
}

export default SpacerDash
