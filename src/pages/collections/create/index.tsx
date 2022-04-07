import { NextPage } from 'next'
import { CreateBoundNFT } from '../../../components/pages/collections/create-boundnft'
import Container from '../../../theme/ui/common/container'


const CreateBoundNFTPage: NextPage = () => (
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
    <CreateBoundNFT/>
  </Container>
)

export default CreateBoundNFTPage
