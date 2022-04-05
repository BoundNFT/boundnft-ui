import { Box, Flex } from 'rebass/styled-components'
import Image from 'next/image'
import { SelectionBox } from '../../common/selection-box'
import { useTranslation } from 'react-i18next'

export const Section2 = () => {
  const { t } = useTranslation('common')

  return (
    <Flex width='100%' alignItems='center' justifyContent={'center'} mt={120}>
        
      <Flex maxWidth={960} width='100%' flexDirection={'column'}>

        <Flex width='100%' flexDirection={'column'} fontSize={'xxxl'}>
            <Flex as='text' variant='title-white'>{t('label.bound').toUpperCase()}</Flex>
            <Flex as='text' variant='title-bold-white'>{t('label.any-kind-of-nfts').toUpperCase()}</Flex>
            <Flex as='text' variant='body' mt={16}>{t('paragraph.section2-1').toUpperCase()}</Flex>
        </Flex>

        <Flex width='100%' mt={60} flexDirection='column'>
          <Flex width='100%' flexWrap={'wrap'}>
            <Box width={106} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_6.svg'} layout='fill' />
            </Box>
            <Box width={119} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_1.svg'} layout='fill' />
            </Box>
            <Box width={97} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_2.svg'} layout='fill' />
            </Box>
            <Box width={102.5} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_5.svg'} layout='fill' />
            </Box>
            <Box width={122} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_4.svg'} layout='fill' />
            </Box>
            <Box width={95} height={136} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/nft_element_3.svg'} layout='fill' />
            </Box>
          </Flex>

          <Flex width='100%' mt={70} justifyContent='space-between'>
            <SelectionBox text={t('label.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
            <SelectionBox text={t('label.read-the-docs').toUpperCase()} outlined/>
          </Flex>
          
        </Flex>
    </Flex>
  </Flex>
  )

}