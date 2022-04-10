import { Box, Label, SxProp, Text } from 'theme-ui'


interface ILabelInfo {
  label: string
  info: string
  textColor?: string
  sx?: any
}

export const LabelInfo: React.FC<ILabelInfo> = ({ label, info, textColor, sx }) => {

  return (
    <Box {...sx}>
      <Label mb={10} variant='text.body-xs'>{label}</Label>
      <Text variant='text.body' sx={{ color: textColor ? textColor : 'white', wordBreak: 'break-all'}}>{info}</Text>
    </Box>
  )
}