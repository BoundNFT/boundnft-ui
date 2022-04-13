import Container from '../../../theme/ui/common/container'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/section2'
import { Section3 } from './sections/section3'
import { MotionBox, MotionFlex } from '../../common/motion-components'

export const HomePageComponent: React.FC = () => (
    
  <Container 
    sx={{
      width: '100%', 
      flexDirection: 'column', 
      alignItems: 'center',
      overflow: 'hidden',
    }}>
    <MotionFlex
      animate={{ opacity: 1, transition: { when: 'beforeChildren', duration: 0.8 }}}
      initial={{ opacity: 0 }}
      sx={{
        width: '100%', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: 'url(/assets/images/bg/bg-main-00.png)',
        backgroundPositionX: 'center',
        backgroundPositionY: [70, 70, 10, 95, -20],
        backgroundRepeat: 'no-repeat',
        backgroundSize: [1200, 1200, 1600, 1500, 2000]
      }}>
      <MotionBox sx={{px: [20, 20, 20, 40, 0], width: '100%', maxWidth: 1280, pt: 170, pb: [250, 250, 340]}}>
        <Section1 />
      </MotionBox>
    </MotionFlex> 

    <MotionFlex
      sx={{
        mt: -150,
        width: '100%', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: 'url(/assets/images/bg/bg-main-01.png)',
        backgroundPositionY: [320, 350, 450, 300, 300],
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: [1500, 1500, 1500, 1500, 2000],
      }}>
      <MotionBox sx={{pb: [100, 100, 0], px: [20, 20, 20, 40, 0], width: '100%', maxWidth: 960}}>
        <Section2 />
        <Section3 />
      </MotionBox>
    </MotionFlex>
  </Container>

    )


