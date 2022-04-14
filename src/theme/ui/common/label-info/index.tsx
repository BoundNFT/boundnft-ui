import { Box, Label, Text } from 'theme-ui'

interface ILabelInfo {
  label: string
  info: string
  textColor?: string
  align?: 'center' | 'left' | 'right'
}

export const LabelInfo: React.FC<ILabelInfo> = ({ label, info, textColor, align }) => {
  return (
    <Box sx={{ alignItems: align ? align : undefined, textAlign: align ? align : 'left' }}>
      <Label mb={10} variant='text.body-xs'>
        {label}
      </Label>
      <Text variant='text.body' sx={{ color: textColor ? textColor : 'white', wordBreak: 'break-all' }}>
        {info}
      </Text>
    </Box>
  )
}
