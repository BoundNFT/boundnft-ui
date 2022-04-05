import { Flex, Box, Text } from 'rebass/styled-components'
import Image from 'next/image'
import Container from '../../theme/ui/home/common/container'
import { SelectionBox } from '../common/selection-box'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/section2'
import { Section3 } from './sections/section3'

export const HomePageComponent: React.FC = () => (
    
    <Container width='100%' maxWidth={1920} flexDirection='column' hasPadding alignItems='center'
      sx={{
      background: 'url(/assets/images/bg/section1_bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',  
      backgroundPosition : '100% auto',  
      overflow: 'hidden',
      }}>
      <Flex width='100%' maxWidth={1280} flexDirection='column' alignItems='center'>
        <Section1 />
        <Section2 />
        <Section3 />
      </Flex>
    </Container>


    )


