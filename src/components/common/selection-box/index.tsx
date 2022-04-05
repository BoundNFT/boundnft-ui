
import { Flex, Box, Text } from 'rebass/styled-components'

interface ISelectionBox {
    backgroundColor?: string
    text: string
    arrowColor?: string
    outlined?: boolean
}

export const SelectionBox: React.FC<ISelectionBox> = ({ backgroundColor, text, arrowColor, outlined }, ...restprops) => {


  return (
    <Flex backgroundColor={backgroundColor ? backgroundColor : 'transparent'} height={56} width='100%' maxWidth={[320, 320, 454]} sx={{border: outlined ? '1px solid white' : '0px'}}  {...restprops}>
      <Flex width='100%' justifyContent={'space-between'} px={30} py={20} alignItems='center'>
        <Flex as='text' color={outlined ? 'white' : 'blue.100'} variant='body'>{text}</Flex>
        <Flex fontSize={30} color={outlined ? 'white' : arrowColor ? arrowColor : 'blue.100'} fontWeight={'bold'}>&#x2192;</Flex>
      </Flex>
    </Flex>

      
  )
}