import React, { useMemo, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Text, NavLink, FlexProps } from 'theme-ui'
import { IRoutes } from '../../../constants/types'
import { permalink } from '../../../constants/routes'

interface INavButton extends IRoutes {}

const NavButton: React.FC<INavButton> = props => {
  const { route, onClick, children, external, name } = props

  return external ? (
    <NavLink
      href={route}
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
      sx={{
        '&:hover': {
          opacity: 1,
          textDecoration: 'none'
        }
      }}
    >
      <LinkComponent name={name} route={route} />
    </NavLink>
  ) : (
    <Flex sx={{ alignItems: 'center' }}>
      {children ? (
        <LinkComponent onClick={onClick} {...props} />
      ) : (
        <Link href={route} passHref>
          <LinkComponent onClick={onClick} as='a' name={name} route={route} />
        </Link>
      )}
    </Flex>
  )
}

export default NavButton

const LinkComponent = forwardRef<HTMLDivElement, INavButton & FlexProps>(({ route, name, ...restprops }, ref) => {
  const { pathname } = useRouter()

  const activePathname = useMemo(() => {
    if (!pathname) return null
    if (pathname === permalink.home) return '/'
    const path = pathname.split('/')
    return `/${path[1]}`
  }, [pathname])

  return (
    <Flex sx={{ position: 'relative', justifyContent: 'center' }} {...restprops} ref={ref}>
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
            bg: activePathname === route ? 'accent' : 'transparent'
          },
          '& svg': {
            transition: 'all 0.3s',
            color: activePathname === route ? 'text3' : 'text3'
          },
          '&:hover': {
            cursor: 'pointer',
            '&:after': {
              left: 0,
              width: '100%',
              bg: ['accent']
            }
          }
        }}
      >
        <Text as='span' color={activePathname === route ? 'text3' : 'grey.100 '} sx={{ textAlign: 'center' }} variant='text.nav-buttons-text'>
          {name}
        </Text>
      </Flex>
    </Flex>
  )
})
