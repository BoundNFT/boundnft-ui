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
      sx={{
        width: '100%', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: 'url(/assets/images/bg/bg-main-00.png)',
        backgroundPositionX: 'center',
        backgroundPositionY: ['30%', '20%', '40%', '20%', '20%'],
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['300%', '300%', '150%', '150%', '100%']
      }}>
      <MotionBox sx={{px: [20, 20, 20, 40, 0], width: '100%', maxWidth: 1280, pt: 170, pb: [250, 250, 350]}}>
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
        backgroundPositionY: ['90%', '90%', '60%', '60%', '70%'],
        backGroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}>
      <MotionBox sx={{pb: [350, 350, 800], px: [20, 20, 20, 40, 0] }}>
        <Section2 />
      </MotionBox>
    </MotionFlex>
    <MotionFlex sx={{width: '100%', alignItems: 'center', justifyContent: 'center', px: [20, 20, 20, 40, 0]}}>
      <Section3 />
    </MotionFlex>
  </Container>

    )


