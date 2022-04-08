import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Input, Label, Text } from 'theme-ui'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import { Screen } from '../types'

export const CreateBoundNFTStep1: React.FC = () => {
  const { t } = useTranslation('common')
  const { setScreenState } = useContext(BoundNFTContext)
  return (
    <>
      <Box variant='frames.normal' sx={{mt: 80}}>
        <Box as='form'sx={{width: '100%'}}>
          <Label sx={{mb: 20}} variant='text.body-xs' color='grey.100' htmlFor='username'>{t('label.contract-address')}</Label>
          <Input
            
          />
          <Label sx={{mt: 20}} variant='text.body-xs' color='grey.100' htmlFor='password'>{t('label.input-notice')}</Label>
        </Box>
      </Box>

      <Box variant='frames.normal' sx={{textAlign: 'center', mt: 40}}>
        <Text as='span' variant='text.body' sx={{ color: 'white', lineHeight: 1.5}} dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-step1')}}/>
      </Box>

      <Flex sx={{ width: '100%', mt: 40, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
        <Button text={t('button.create-new-boundnft').toUpperCase()} backgroundColor='green.100' arrowColor='black' onClick={() => setScreenState(Screen.checkDetails)} />
        <Button text={t('button.use-existing-boundnft').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
      </Flex>
    </>
  )
}