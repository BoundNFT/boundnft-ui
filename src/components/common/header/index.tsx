import { Flex } from 'theme-ui'
import Navigation from './navigation'
import Logo from './logo'
import Web3Status from '../../../modules/wallet'
import { rgba } from 'polished'

const Header: React.FC = () => {
  return (
    <Flex
      sx={{
        position: 'fixed',
        backgroundColor: rgba(6, 10, 16, 0.3),
        width: '100%',
        height: [78],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        px: [20, 20, 40, null],
        zIndex: 200
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1280
        }}
      >
        <Logo />

        <Flex sx={{ justifyContent: 'flex-end' }}>
          <Navigation />
          <Flex sx={{ ml: [0, 0, 0, 50] }}>
            <Web3Status />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header

export { Navigation }
