import { NextPage } from 'next'
import { Container } from 'theme-ui'
import { CreateBounftNFT } from '../../../components/pages/collections/details/create-boundnft'



const CreateBoundNFT: NextPage = () => (
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
    <CreateBounftNFT/>
  </Container>
)

export default CreateBoundNFT
