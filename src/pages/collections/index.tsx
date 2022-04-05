import { NextPage } from 'next'
import Container from '../../theme/ui/home/common/container'


const CollectionsPage: NextPage = () => (
  <Container 
    width='100%' 
    maxWidth={1920} 
    flexDirection='column' 
    hasPadding 
    alignItems='center'
    sx={{
    background: 'url(/assets/images/bg/section1_bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',  
    backgroundPosition : '100% auto',  
    overflow: 'hidden',
    }}>


  </Container>
)

export default CollectionsPage
