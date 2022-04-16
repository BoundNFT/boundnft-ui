import { MotionButton, MotionFlex } from '../../../../components/common/motion-components'
import { /* Flex, */ Text } from 'theme-ui'
import { IconArrow } from 'theme/ui/icons'
import useTheme from 'hooks/common/useTheme'
/* import { IconArrow } from 'theme/ui/icons'
import { theme } from 'theme/theme' */
interface IButton {
  backgroundColor?: string
  text: string
  arrowColor?: string
  outlined?: boolean
  sx?: any
  onClick?: () => {}
  switchArrow?: boolean
}

export const Button: React.FC<IButton> = ({ backgroundColor, text, arrowColor, outlined, switchArrow, sx, onClick }, ...restprops) => {
  const { colors } = useTheme()
  return (
    <MotionButton
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
        height: 56,
        width: '100%',
        maxWidth: [454, 454, 454, 420, 454],
        borderRadius: null,
        border: outlined ? '1px solid white' : '0px',
        ':hover': { opacity: 0.6, transition: 'ease-in-out 0.3s', cursor: 'pointer' },
        ...sx
      }}
      {...restprops}
    >
      <MotionFlex sx={{ width: '100%', justifyContent: 'space-between', px: 10, alignItems: 'center' }}>
        <Text color={outlined ? 'white' : 'blue.100'} variant='text.body'>
          {text}
        </Text>
        <Text sx={{ fontSize: 30, transform: switchArrow ? 'scaleX(-1)' : null }}>
          <IconArrow color={outlined ? 'white' : arrowColor ? arrowColor : colors.blue[100]} />
        </Text>
      </MotionFlex>
    </MotionButton>
  )
}
