
import { MotionText, MotionFlex } from '../motion-components'
import { Text } from 'theme-ui'
interface ISelectionBox {
    backgroundColor?: string
    text: string
    arrowColor?: string
    outlined?: boolean
    sx?: any
}

export const SelectionBox: React.FC<ISelectionBox> = ({ backgroundColor, text, arrowColor, outlined, sx }) => {

  return (

    <MotionFlex 
      sx={{ 
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
        height: 56,
        width: '100%',
        maxWidth: 454,
        border: outlined ? '1px solid white' : '0px',
        ":hover": { opacity: 0.6, transition: 'ease-in-out 0.3s', cursor: 'pointer'},
        ...sx
      }}>
      <MotionFlex sx={{ width: '100%', justifyContent: 'space-between', px: 30, py: 20, alignItems: 'center'}}>
        <Text color={outlined ? 'white' : 'blue.100'} variant='styles.body'>{text}</Text>
        <Text sx={{ fontSize: 30, fontWeight: 'bold'}} color={outlined ? 'white' : arrowColor ? arrowColor : 'blue.100'}>&#x2192;</Text>
      </MotionFlex>
    </MotionFlex>   

  )
}