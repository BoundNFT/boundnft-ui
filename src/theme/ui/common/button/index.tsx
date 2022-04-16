import { MotionButton, MotionFlex, MotionText } from '../../../../components/common/motion-components'
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

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  },
}
export const Button: React.FC<IButton> = ({ backgroundColor, text, arrowColor, outlined, switchArrow, sx, onClick }, ...restprops) => {
  const { colors } = useTheme()
  return (
    <MotionButton
      variants={buttonVariants}
      whileHover='hover'
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
        height: 56,
        width: '100%',
        maxWidth: [454, 454, 454, 420, 454],
        borderRadius: null,
        border: outlined ? '1px solid white' : '0px',
        ':hover': { cursor: 'pointer' },
        ...sx
      }}
      {...restprops}
    >
      <MotionFlex sx={{ width: '100%', justifyContent: 'space-between', px: 10, alignItems: 'center' }}>
        <MotionText animate={{opacity: 1}} sx={{ color: outlined ? 'white' : 'blue.100', fontSize: 16, fontFamily: 'bold'}}>
          {text}
        </MotionText>
        <Text sx={{ fontSize: 30, transform: switchArrow ? 'scaleX(-1)' : null }}>
          <IconArrow color={outlined ? 'white' : arrowColor ? arrowColor : colors.blue[100]} />
        </Text>
      </MotionFlex>
    </MotionButton>
  )
}
