import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box } from 'rebass/styled-components'

const Logo: React.FC = () => {
  return (
    <Link href='/' passHref>
      <Flex as='a' alignItems='center' sx={{ cursor: 'pointer', position: 'relative' }}>
        <Image src='/assets/images/boundnft_logo.svg' width={36.45} height={29} />
        <Flex ml={15}>
          <Flex as='text' variant='semi-title-white'>BOUND</Flex>
          <Flex as='text' variant='semi-title-bold-white'>NFT</Flex>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Logo
