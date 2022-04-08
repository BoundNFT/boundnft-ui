import router from 'next/router'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Text } from 'theme-ui'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import { Screen } from '../types'
import Image from 'next/image'


export const CreateBoundNFTStep3: React.FC = () => {
  const { t } = useTranslation('common')
  const { setScreenState } = useContext(BoundNFTContext)
  return (
    <>
      <Flex sx={{mt: 80, justifyContent: 'space-between', width: '100%'}}>

        <Box variant='frames.image' sx={{width: '100%', maxWidth: 202}}>
          <Box sx={{width: 182, height: 182, position: 'relative'}}>
            <Image src='/assets/images/collections/big/punk.svg' layout='fill'/>
          </Box>
        </Box>

        <Box variant='frames.image' sx={{width: '100%', maxWidth: 202}}>
          <Box sx={{width: 182, height: 182, position: 'relative'}}>
            <Image src='/assets/images/collections/big/punk.svg' layout='fill'/>
          </Box>
        </Box>
        
      </Flex>

      <Box variant='frames.normal' sx={{textAlign: 'center', mt: 40}}>
        <Text as='span' variant='text.body' sx={{ color: 'white', lineHeight: 1.5}} dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-proccesing', { asset: 'CRYPTOPUNKS' })}}/>
      </Box>

      <Flex sx={{ width: '100%', mt: 40, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
        <Button text={t('button.back').toUpperCase()} backgroundColor='green.100' arrowColor='black' switchArrow onClick={() => setScreenState(Screen.checkDetails)} />
        <Button text={t('button.next').toUpperCase()} outlined arrowColor='black' onClick={() => setScreenState(Screen.boundNFTCreationSuccess)} sx={{ mt: [20, 20, 20, 0]}} />

      </Flex>
    </>
  )
}