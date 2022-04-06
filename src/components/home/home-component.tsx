import Container from '../../theme/common/container'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/section2'
import { Section3 } from './sections/section3'
import { MotionFlex } from '../motion-components'

export const HomePageComponent: React.FC = () => (
    
    <Container 
      sx={{
      pb: 730,
      width: '100%', 
      maxWidth: 1920, 
      flexDirection: 'column', 
      alignItems: 'center',
      background: 'url(/assets/images/bg/section1_bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',  
      backgroundPosition : '100% auto',  
      overflow: 'hidden',
      }}>
      <MotionFlex sx={{ width: '100%', maxWidth: 1280, flexDirection: 'column', alignitems: 'center'}}>
        <Section1 />
        <Section2 />
        <Section3 />
      </MotionFlex>
    </Container>

    )


