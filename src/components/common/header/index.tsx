import { Flex } from 'theme-ui'
import Link from 'next/link'
import Navigation from './navigation'
import Logo from './logo'


const Header: React.FC = () => {
  return (
    <Flex
      sx={{
        bg: 'blue.300',
        width: '100%',
        height: 78,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: 0.8
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
        <Link href='/' passHref>
          <Logo />
        </Link>

        <Navigation />

      </Flex>
    </Flex>
  )
}

export default Header


export { Navigation }
