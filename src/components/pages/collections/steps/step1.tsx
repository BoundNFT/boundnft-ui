import { MotionBox } from 'components/common/motion-components'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Input, Label, Text } from 'theme-ui'
import { permalink } from '../../../../constants/routes'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import { Screen } from '../types'

export const CreateBoundNFTStep1: React.FC = () => {
  const { t } = useTranslation('common')
  const { setScreenState, isBack } = useContext(BoundNFTContext)
  const router = useRouter()
  const animationType = useMemo(() => isBack, [isBack])
  return (
    <AnimatePresence exitBeforeEnter>
      <MotionBox
        initial={{ x: animationType ? '-100vh' : '100vh' }}
        animate={{
          x: 0,
          transition: { type: 'spring', stiffness: 50, duration: 0.5 }
        }}
      >
        <Box variant='frames.normal' sx={{ mt: 80 }}>
          <Box as='form' sx={{ width: '100%' }}>
            <Label sx={{ mb: 20 }} variant='text.body-xs' color='grey.100' htmlFor='username'>
              {t('label.contract-address')}
            </Label>
            <Input sx={{ height: 56, borderRadius: 0 }} />
            <Label sx={{ mt: 20 }} variant='text.body-xs' color='grey.100' htmlFor='password'>
              {t('label.input-notice')}
            </Label>
          </Box>
        </Box>

        <Box variant='frames.normal' sx={{ textAlign: 'center', mt: 40 }}>
          <Text
            as='span'
            variant='text.body'
            sx={{ color: 'white', lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-step1') }}
          />
        </Box>

        <Flex
          sx={{
            width: '100%',
            mt: 40,
            alignItems: ['center', 'center', 'center', null],
            justifyContent: ['space-between'],
            flexDirection: ['column', 'column', 'column', 'row']
          }}
        >
          <Button text={t('button.back').toUpperCase()} outlined switchArrow sx={{ mt: [20, 20, 20, 0] }} onClick={() => router.push(permalink.collections)} />
          <Button
            text={t('button.fetch-contract-metadata').toUpperCase()}
            backgroundColor='green.100'
            sx={{ mt: [20, 20, 20, 0] }}
            arrowColor='black'
            onClick={() => setScreenState(Screen.checkDetails)}
          />
        </Flex>
      </MotionBox>
    </AnimatePresence>
  )
}
