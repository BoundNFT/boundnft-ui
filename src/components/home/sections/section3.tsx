import { Box, Flex } from 'rebass/styled-components'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export const Section3 = () => {
  const { t } = useTranslation('common')
  return (
    <Flex width='100%' alignItems='center' justifyContent={'center'} mt={450}>
        
      <Flex maxWidth={960} width='100%' flexDirection={'column'}>

        <Flex width='100%' flexDirection={'column'} fontSize={'xxxl'}>
          <Flex>
            <Box>
              <Flex as='text' variant='title-white'>{t('label.fully').toUpperCase()}</Flex>
              <Flex as='text' variant='title-bold-white'>{t('label.functional').toUpperCase()}</Flex>
            </Box>
            <Box width={65} height={65} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/subtitle_element_1.svg'} layout='fill' />
            </Box>
          </Flex>

          <Flex as='text' variant='body' mt={16} maxWidth={593}>
            {t('paragraph.section3-1').toUpperCase()}
          </Flex>
        </Flex>

        <Flex width={'100%'} justifyContent='right'>
          <Flex flexDirection={'column'} justifyContent='right' fontSize={'xxxl'} mt={80} maxWidth={645}>
            <Flex>
              <Box>
              <Flex as='text' variant='title-white'>{t('label.fully').toUpperCase()}</Flex>
              <Flex as='text' variant='title-bold-white'>{t('label.permissionless').toUpperCase()}</Flex>
              </Box>
              <Box width={65} height={65} sx={{position: 'relative'}} mx={25}>        
                <Image src={'/assets/images/elements/subtitle_element_3.svg'} layout='fill' />
              </Box>
            </Flex>

            <Box>
              <Flex as='text' variant='body' mt={16} maxWidth={645}>
                {t('paragraph.section3-2').toUpperCase()}
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Flex width='100%' flexDirection={'column'} fontSize={'xxxl'} mt={80}>
          <Flex>
            <Box>
              <Flex as='text' variant='title-white'>{t('label.fully').toUpperCase()}</Flex>
              <Flex as='text' variant='title-bold-white'>{t('label.open-source').toUpperCase()}</Flex>
            </Box>
            <Box width={65} height={65} sx={{position: 'relative'}} mx={25}>        
              <Image src={'/assets/images/elements/subtitle_element_2.svg'} layout='fill' />
            </Box>
          </Flex>
          <Flex as='text' variant='body' mt={16} maxWidth={565}>
            {t('paragraph.section3-3').toUpperCase()}
          </Flex>
        </Flex>

        </Flex>
    </Flex>

  )

}