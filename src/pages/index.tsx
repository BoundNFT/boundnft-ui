import { NextPage } from 'next'

import { HomePageComponent } from '../components/pages/home/home-component'
import Home from '../theme/ui/home'

const IndexPage: NextPage = () => (
  <Home title='BoundNFT' description='Project description' backgroundColor={'background'}>
    <HomePageComponent />
  </Home>
)

export default IndexPage
