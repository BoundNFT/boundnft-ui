import { FlexProps, SxStyleProp } from 'rebass/styled-components'

export interface IContainer extends FlexProps {
  hasBorder?: boolean
  hasPadding?: boolean
  styles?: SxStyleProp
}
