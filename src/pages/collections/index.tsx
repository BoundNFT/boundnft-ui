import { NextPage } from 'next'
import { CollectionsPageComponent } from '../../components/pages/collections/collections-component'
import Container from '../../theme/common/container'


const CollectionsPage: NextPage = () => (
  <Container 
    sx={{
    width: '100%', 
    flexDirection: 'column', 
    alignItems: 'center',
    background: 'url(/assets/images/bg/collections_bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%', 
    overflow: 'hidden',
  }}>
    <CollectionsPageComponent/>


  </Container>
)

export default CollectionsPage
