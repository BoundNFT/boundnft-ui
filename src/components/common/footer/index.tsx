import { Flex, Link as LinkRebass } from "rebass/styled-components"
import Image from 'next/image'


export const Footer: React.FC = () => {

  return (
    <Flex width='100%' maxWidth={1920} alignItems='center' justifyContent={'center'}  sx={{backgroundColor: 'blue.200', opacity: 0.8}} mt={-500} height={500}>
      <Flex maxWidth={960} width='100%' flexDirection={'column'} alignItems='center'>
        <Flex flexDirection={'column'} alignItems='center' mb={100}>
          <Image src='/assets/images/boundnft_logo.svg' width={88} height={70} />
          <Flex>
            <Flex as='text' variant='semi-title-white'>BOUND</Flex>
            <Flex as='text' variant='semi-title-bold-white'>NFT</Flex>
          </Flex>
        </Flex>
        <Flex width='100%' flex={1} justifyContent='flex-start'>
          <Flex flexDirection={'column'} flex={0.5}>
            <Flex as='text' variant='mid-title-white'>THE PROTOCOL</Flex>
            <Flex as='text' variant='body-xs' color='grey.100' maxWidth={400} mt={25}>
            Project BoundNFT is a decentralized NFT bound protocol 
            running on Ethereum. Bound everything from CryptoPunks 
            to game assets with no stolen risk.
            </Flex>
          </Flex>

          <Flex flexDirection={'column'} flex={0.25}>
            <Flex as='text' variant='mid-title-white'>ABOUT</Flex>
            <Flex as='text' variant='body-xs' color='grey.100' maxWidth={400} mt={25} flexDirection='column'>
              <LinkRebass>Twitter</LinkRebass>
              <LinkRebass>Discord</LinkRebass>
              <LinkRebass>Github</LinkRebass>
            </Flex>
          </Flex>

          <Flex flexDirection={'column'} flex={0.25}>
            <Flex as='text' variant='mid-title-white'>COMMUNITY</Flex>
            <Flex as='text' variant='body-xs' color='grey.100' maxWidth={400} mt={25} flexDirection='column'>
              <LinkRebass>About</LinkRebass>
              <LinkRebass>Contract</LinkRebass>
              <LinkRebass>PLATFORM</LinkRebass>
            </Flex>
          </Flex>
        </Flex>



      </Flex>
    </Flex>



  )
}