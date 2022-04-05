import { NextPage } from 'next'
import { Flex } from 'rebass/styled-components'
import { Footer } from '../components/common/footer'

import { HomePageComponent } from '../components/home/home-component'
import Home from '../theme/ui/home'

const IndexPage: NextPage = () => (
  <Home title='BoundNFT' description='Project description' backgroundColor={'background'}>
    <HomePageComponent />
  </Home>
)

export default IndexPage
