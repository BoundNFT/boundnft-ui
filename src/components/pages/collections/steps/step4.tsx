import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Text, Image as ImageThemeUI } from 'theme-ui'
import { BoundNFTContext } from '../create-boundnft'
import Image from 'next/image'
import { MotionBox } from 'components/common/motion-components'
import { Screen } from 'modules/bound/hooks/useBoundNFT'

export const CreateBoundNFTStep4: React.FC = () => {
  const { t } = useTranslation('common')
  const { setScreenState, metaData } = useContext(BoundNFTContext)
  return (
    <MotionBox
      initial={{ x: '100vh' }}
      animate={{
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 0.5
        }
      }}
    >
      <Flex sx={{ mt: 80, justifyContent: 'space-between', width: '100%', alignItems: 'center', flexDirection: ['column', 'column', 'row'] }}>
        <Box variant='frames.image' sx={{ width: '100%', maxWidth: 202 }}>
          <Box sx={{ width: 182, height: 182, position: 'relative' }}>
            <Image src='/assets/images/collections/big/punk.svg' layout='fill' />
          </Box>
        </Box>

        <Box sx={{ width: ['100%'], overflow: 'hidden', position: 'relative', alignSelf: 'center', my: [20, 20, 0], px: [0, 0, 30] }}>
          <ImageThemeUI src={'/assets/images/elements/boundnft-preloader.gif'} width={'100%'} />
        </Box>

        <Box variant='frames.image' sx={{ width: '100%', maxWidth: 202 }}>
          <Box sx={{ width: 182, height: 182, position: 'relative' }}>
            <Image src='/assets/images/collections/big/punk.svg' layout='fill' />
          </Box>
        </Box>
      </Flex>

      <Box variant='frames.normal' sx={{ textAlign: 'center', mt: 40 }} onClick={() => setScreenState(Screen.boundNFTCreationSuccess)}>
        <Text
          as='span'
          variant='text.body'
          sx={{ color: 'text3', lineHeight: 1.5 }}
          dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-proccesing', { asset: metaData.contractName }) }}
        />
      </Box>
    </MotionBox>
  )
}
