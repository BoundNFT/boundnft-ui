import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Text } from 'theme-ui'

const Logo: React.FC = () => {
  return (
    <Link href='/' passHref>
      <Flex as='a' sx={{ position: 'relative', alignItems: 'center', minWidth: 170 }}>
        <Image src='/assets/images/boundnft_logo.svg' width={36.45} height={29} />
        <Flex ml={15}>
          <Text variant='styles.logo-text'>BOUND</Text>
          <Text sx={{ ml: '1.5px'}} variant='styles.logo-text-bold'>NFT</Text>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Logo
