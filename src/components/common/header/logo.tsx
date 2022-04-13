import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Text } from 'theme-ui'
import styled from 'styled-components'
import { MotionFlex } from '../motion-components'

const Logo: React.FC = () => {
  return (
    <Animations>
      <MotionFlex>
        <Link href='/' passHref>
          <Flex as='a' sx={{ position: 'relative', alignItems: 'center', minWidth: 170 }}>
            <Flex sx={{width: 36}}>
              <Flex className='slide-in-circle' sx={{width: 25, zIndex: 100, height: 28, position: 'relative'}}>
                <Image src='/assets/images/elements/hex-empty.svg' layout='fill' />
              </Flex>
              <Flex className='slide-in-dot' sx={{ml: '-13px', width: 25, height: 28, position: 'relative', zIndex: 90}}>
                <Image src='/assets/images/elements/hex-dotted.svg' layout='fill' />
              </Flex>
            </Flex>
            <Flex ml={15}>
              <Text variant='text.logo-text'>BOUND</Text>
              <Text sx={{ ml: '1.5px'}} variant='text.logo-text-bold'>NFT</Text>
            </Flex>
          </Flex>
        </Link>
      </MotionFlex>
    </Animations>
  )
}

export default Logo

const Animations = styled(MotionFlex)`
  @keyframes slide-in-left {
    0% {
      transform: translateX(0);
      opacity: 1;
    };
    50% {
      transform: translateX(5px);
      opacity: 0.3;
    };
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  };
  @keyframes slide-in-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    };
    50% {
      transform: translateX(-5px);
      opacity: 0.3;
    };
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  };
  a:hover .slide-in-circle {
    animation: slide-in-left 0.6s cubic-bezier(0, 0.03, 0.515, 0.955) 0.2s;
  };
  a:hover .slide-in-dot {
    animation: slide-in-right 0.6s cubic-bezier(0, 0.03, 0.515, 0.955) 0.2s;
  };
`
