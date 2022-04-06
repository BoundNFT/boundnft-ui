import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Text } from 'theme-ui'
import { MotionFlex } from '../../motion-components'

const Logo: React.FC = () => {
  return (
    <Link href='/' passHref>
      <MotionFlex as='a' sx={{ cursor: 'pointer', position: 'relative', alignItems: 'center' }}>
        <Image src='/assets/images/boundnft_logo.svg' width={36.45} height={29} />
        <Flex ml={15}>
          <Text variant='styles.logo-text'>BOUND</Text>
          <Text variant='styles.logo-text-bold'>NFT</Text>
        </Flex>
      </MotionFlex>
    </Link>
  )
}

export default Logo
