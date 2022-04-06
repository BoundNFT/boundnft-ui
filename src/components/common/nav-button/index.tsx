import { useMemo, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Text, Link as StyledLink, FlexProps } from 'theme-ui'
import { IRoutes } from '../../../constants/types'
import { permalink } from '../../../constants/routes'


interface INavButton extends IRoutes {}

const NavButton: React.FC<INavButton> = props => {
  const { route, onClick, children, external } = props

  return external ? (
    <StyledLink
      href={route}
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
      sx={{
        '&:hover': {
          opacity: 1
        }
      }}
    >
      <LinkComponent {...props} />
    </StyledLink>
  ) : (
    <Flex sx={{ alignItems: 'center'}}>
      {children ? (
        <LinkComponent onClick={onClick} {...props} />
      ) : (
        <Link href={route} passHref>
          <LinkComponent onClick={onClick} as='a' {...props} />
        </Link>
      )}
    </Flex>
  )
}

export default NavButton

const LinkComponent = forwardRef<HTMLElement, INavButton & FlexProps>(({ route, name, children, ...restprops }, ref) => {

  const { pathname } = useRouter()

  const activePathname = useMemo(() => {
    if (!pathname) return null
    if (pathname === permalink.home) return '/'
    const path = pathname.split('/')
    return `/${path[1]}`
  }, [pathname])

  return (
    <Flex sx={{ position: 'relative', justifyContent: 'center' }} /* ref={ref} */ {...restprops}>
      <Flex
        sx={{
          flexDirection: ['row'],
          justifyContent: 'center',
          alignItems: 'center',
          px: [25],
          height: [80],
          '&:after': {
            content: "''",
            position: 'absolute',
            left: activePathname === route ? 0 : '100%',
            bottom: 0,
            width: activePathname === route ? '100%' : 0,
            height: 3,
            transition: 'all 0.3s',
            bg: activePathname === route ? 'green.100' : 'transparent',
          },
          '& svg': {
            transition: 'all 0.3s',
            color: activePathname === route ? 'white' : 'white',
            
          },
          '&:hover': {
            cursor: 'pointer',
            '&:after': {
              left: 0,
              width: '100%',
              bg: ['green.100']
            },

          }
        }}
      >
        <Text
          as='text'
          color='white'
          sx={{ textAlign: 'center', display: ['none', 'none', 'flex'],}}
          variant='styles.nav-buttons-text'
          
        >
          {name}
        </Text>
      </Flex>
        
    </Flex>
  )
})

