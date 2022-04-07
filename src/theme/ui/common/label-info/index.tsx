import { Box, Label, Text } from 'theme-ui'


interface ILabelInfo {
  label: string
  info: string
  textColor?: string
}

export const LabelInfo: React.FC<ILabelInfo> = ({ label, info, textColor }) => {

  return (
    <Box>
      <Label mb={10} variant='styles.body-xs'>{label}</Label>
      <Text variant='styles.body' sx={{ color: textColor ? textColor : 'white'}}>{info}</Text>
    </Box>
  )
}