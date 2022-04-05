import { Box, Flex } from 'rebass/styled-components'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export const Section1 = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Flex width='100%' flexDirection={'column'} fontSize={'xxxl'}>
      <Flex as='text' variant='title-white'>{t('label.powering').toUpperCase()}</Flex>
      <Flex as='text' variant='title-bold-white'>{t('label.decentralized').toUpperCase()}</Flex>
      <Flex as='text' variant='title-bold-green'>{t('label.nft-liquidity').toUpperCase()}</Flex>
    </Flex>

    <Flex flexDirection={'column'} alignItems={'center'} sx={{position: 'fixed center'}} mt={50} ml={30}>
      <Box width={95} height={75} sx={{position: 'relative'}}>        
          <Image src='/assets/images/boundnft_logo.svg' layout='fill'/>
      </Box>
      <Flex>
          <Flex as='text' variant='semi-title-white'>{t('label.bound').toUpperCase()}</Flex>
          <Flex as='text' variant='semi-title-bold-white'>{t('label.nft').toUpperCase()}</Flex>
      </Flex>
    </Flex>

    <Flex width='100%' justifyContent={'right'} ml={900} mt={-240}>
      <Box width={853} height={473} sx={{position: 'relative'}}>        
          <Image src='/assets/images/top_image_1.png' layout='fill'/>
      </Box>
    </Flex>
    
    </>
  )

}