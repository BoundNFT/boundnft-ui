import styled from 'styled-components'
import { Box, BoxProps } from 'theme-ui'

export const SkeletonPulse = styled(Box)<BoxProps>`
  display: inline-block;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

export const SkeletonLine = styled(SkeletonPulse)`
  &::before {
    content: '';
  }
`
