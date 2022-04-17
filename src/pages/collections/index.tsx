
import { NextPage } from 'next'
import { CollectionsPageComponent } from '../../components/pages/collections/collections-component'
import Container from '../../theme/ui/common/container'

const CollectionsPage: NextPage = () => (
  <Container
    sx={{
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'url(/assets/images/bg/bg-sub-00.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: [1300, 1300, 1200, 1200, 1600],
      backgroundPositionX: 'center',
      backgroundPositionY: 0,
      overflow: 'hidden'
    }}
  >
    <CollectionsPageComponent />
  </Container>
)

export default CollectionsPage
