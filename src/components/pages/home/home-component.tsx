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
        backgroundPositionY: '0%',
        backGroundPositionX: 'stretch ',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}>
      <MotionBox sx={{pt: 170, pb: 350}}>
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
        backgroundPositionY: 300,
        backGroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}>
      <MotionBox sx={{pb: 800}}>
        <Section2 />
      </MotionBox>
    </MotionFlex>
    <MotionFlex sx={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Section3 />
    </MotionFlex>
  </Container>

    )


