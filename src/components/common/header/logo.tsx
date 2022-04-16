import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex } from 'theme-ui'
import { MotionFlex, MotionText } from '../motion-components'

const Logo: React.FC = () => {
  const [isEffect, setIsEffect] = useState<boolean>()
  return (
    <Link href='/' passHref>
      <MotionFlex
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        onHoverStart={() => setIsEffect(true)}
        onHoverEnd={() => setIsEffect(false)}
        whileHover={{
          textShadow: '0px 0px 8px rgb(255,255,255)'
        }}
        as='a'
        sx={{
          position: 'relative',
          alignItems: 'center',
          minWidth: 170
        }}
      >
        <Flex sx={{ width: 36 }}>
          <MotionFlex
            initial={{ x: 0 }}
            animate={{ x: isEffect ? 5.5 : 0, transition: { repeat: isEffect ? 1 : 0, repeatType: 'reverse', duration: 0.3 } }}
            sx={{
              width: 25,
              zIndex: 100,
              height: 28,
              position: 'relative'
            }}
          >
            <Image src='/assets/images/elements/hex-empty.svg' layout='fill' />
          </MotionFlex>
          <MotionFlex
            initial={{ x: 0 }}
            animate={{ x: isEffect ? -5.5 : 0, transition: { repeat: isEffect ? 1 : 0, repeatType: 'reverse', duration: 0.3 } }}
            sx={{
              ml: '-13px',
              width: 25,
              height: 28,
              position: 'relative',
              zIndex: 90
            }}
          >
            <Image src='/assets/images/elements/hex-dotted.svg' layout='fill' />
          </MotionFlex>
        </Flex>
        <Flex ml={15} sx={{ alignItems: 'center' }}>
          <MotionText variant='text.logo-text'>BOUND</MotionText>
          <MotionText sx={{ ml: '1.5px' }} variant='text.logo-text-bold'>
            NFT
          </MotionText>
        </Flex>
      </MotionFlex>
    </Link>
  )
}

export default Logo
