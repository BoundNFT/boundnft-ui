import { NextPage } from 'next'
import { CreateBoundNFT } from '../../../components/pages/collections/create-boundnft'
import Container from '../../../theme/ui/common/container'


const CreateBoundNFTPage: NextPage = () => (
  <Container 
    sx={{
    width: '100%', 
    flexDirection: 'column', 
    alignItems: 'center',
    background: 'url(/assets/images/bg/bg-sub-00.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['250%', '250%', '100%'], 
    backgroundPositionX: 'center',
    backgroundPositionY: ['0%', '0%', '0%'],
    overflow: 'hidden',
  }}>
    <CreateBoundNFT/>
  </Container>
)

export default CreateBoundNFTPage
