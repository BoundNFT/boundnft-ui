import Container from '../../../theme/ui/common/container'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/section2'
import { Section3 } from './sections/section3'
import { MotionFlex } from '../../common/motion-components'

export const HomePageComponent: React.FC = () => (
    
    <Container 
      sx={{
      width: '100%', 
      flexDirection: 'column', 
      alignItems: 'center',
      background: 'url(/assets/images/bg/section1_bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
      }}>
      <MotionFlex sx={{ width: '100%', maxWidth: 1280, flexDirection: 'column', alignitems: 'center'}}>
        <Section1 />
        <Section2 />
        <Section3 />
      </MotionFlex>
    </Container>

    )


