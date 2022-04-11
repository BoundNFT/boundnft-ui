import { Flex } from 'theme-ui'
import Navigation from './navigation'
import Logo from './logo'
import Web3Status from '../../../modules/wallet'
import useResponsive from '../../../hooks/common/useResponsive'


const Header: React.FC = () => {
  const { isTablet } = useResponsive()
  return (
    <Flex
      sx={{
        position: 'fixed',
        bg: 'blue.300',
        width: '100%',
        height: [78],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: 0.8,
        px: [20, 20, 40, null],
        zIndex: 200
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1280,         
        }}
      >
        <Logo />
    
        <Flex sx={{justifyContent:'flex-end'}}>
          {isTablet && <Navigation />  }
          <Flex sx={{ml: [0, 0, 0, 50]}}>
            <Web3Status />
          </Flex>
      
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header


export { Navigation }
