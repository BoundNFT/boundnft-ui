import router from 'next/router'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Input, Label, Text } from 'theme-ui'
import { permalink } from '../../../../constants/routes'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import { Screen } from '../types'
import Image from 'next/image'
import { LabelInfo } from '../../../../theme/ui/common/label-info'


export const CreateBoundNFTStep4: React.FC = () => {
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
        
        <Box variant='frames.normal' sx={{width: '100%', maxWidth: 728}}>
          <Flex sx={{ justifyContent: 'space-between', width: '100%'}}>
            <LabelInfo label='Name' info='Cryptopunks' />
            <LabelInfo label='NO. OF TOKENS' info='10,000' />
            <Button text='View on Opensea' arrowColor='white' outlined sx={{maxWidth: 286}} />
          </Flex>

          <Flex sx={{ mt: 25}}>
          <LabelInfo label='CONTRACT' info='0x83494d0c61f87ff3e44992552ee0751816f478e4482349763d9bdd219986b5ff' textColor='green.100' />
          </Flex>

        </Box>
      </Flex>

      <Box variant='frames.normal' sx={{textAlign: 'center', mt: 40}}>
        <Text as='span' variant='styles.body' sx={{ color: 'white', lineHeight: 1.5}} dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-success', { boundAsset: 'BOUNDWPUNKS' })}}/>
      </Box>

      <Flex sx={{ width: '100%', mt: 40, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
        <Button text={t('button.back-to-collections').toUpperCase()} backgroundColor='green.100' arrowColor='black' switchArrow onClick={() => router.push(permalink.collections)} />
        <Button text={t('button.create-another-one').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}} onClick={() => setScreenState(Screen.fetchMetadata)}/>
      </Flex>
    </>
  )
}