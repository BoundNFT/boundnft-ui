import { useMutation } from 'react-query'
import { MotionBox, MotionFlex } from 'components/common/motion-components'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Input, Label, Text } from 'theme-ui'
import getOpenseaCollection from 'utils/api/get-opensea-collection'
import { permalink } from '../../../../constants/routes'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import imageUrl from 'utils/api/imageUrl'
import { Screen } from 'modules/bound/hooks/useBoundNFT'

export const CreateBoundNFTStep1: React.FC = () => {
  const { t } = useTranslation('common')
  const { isBack, handleStep1, setMetaData, setScreenState } = useContext(BoundNFTContext)
  const router = useRouter()
  const animationType = useMemo(() => isBack, [isBack])
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue
  } = useFormContext()
  const { isLoading, mutateAsync } = useMutation(async (address: string) => await getOpenseaCollection(address))

  const onSubmit = useCallback(
    async data => {
      const result = await mutateAsync(data.contractAddress)
      if (!setMetaData) return
      if (result.status === 200) {
        console.log('result.data', result.data)
        setMetaData((state: any) => ({
          ...state,
          contractImage: imageUrl(result.data.collection.image_url),
          contractName: result.data.collection.name,
          contractAddress: data.contractAddress,
          openseaSlug: result.data.collection.slug
        }))

        handleStep1({ address: data.contractAddress })
        setScreenState(Screen.checkDetails)
      }
    },
    [handleStep1, mutateAsync, setMetaData, setScreenState]
  )

  useEffect(() => {
    return () => {
      setValue('collectionAddress', '')
    }
  }, [setValue])

  return (
    <AnimatePresence exitBeforeEnter>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MotionBox
          initial={{ x: animationType ? '-100vh' : '100vh' }}
          animate={{
            x: 0,
            transition: { type: 'spring', stiffness: 50, duration: 0.5 }
          }}
        >
          <Box variant='frames.normal' sx={{ mt: 80 }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Label sx={{ mb: 20 }} variant='text.body-xs' color='text2' htmlFor='contractAddress'>
                {t('label.contract-address')}
              </Label>
              <AnimatePresence>
                {errors?.['contractAddress']?.message && (
                  <MotionFlex
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: 10
                    }}
                    sx={{ position: 'absolute', top: -10, right: 0 }}
                  >
                    <Flex sx={{ bg: 'accent', width: 'auto', color: 'text1', p: 10 }}>{errors?.['contractAddress']?.message}</Flex>
                  </MotionFlex>
                )}
              </AnimatePresence>
              <Input
                sx={{ height: 56, borderRadius: 0 }}
                {...register('contractAddress', {
                  required: {
                    value: true,
                    message: 'Field Contract Address is required'
                  },
                  pattern: {
                    value: /^0x[a-fA-F0-9]{40}$/,
                    message: 'Address is not Ethereum address'
                  }
                })}
              />
              <Label sx={{ mt: 20 }} variant='text.body-xs' color='text2'>
                {t('label.input-notice')}
              </Label>
            </Box>
          </Box>

          <Box variant='frames.normal' sx={{ textAlign: 'center', mt: 40 }}>
            <Text
              as='span'
              variant='text.body'
              sx={{ color: 'text3', lineHeight: 1.5 }}
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
            <Button
              text={t('button.back').toUpperCase()}
              outlined
              switchArrow
              sx={{ mt: [20, 20, 20, 0] }}
              onClick={() => router.push(permalink.collections)}
            />
            <Button
              type='submit'
              text={t('button.fetch-contract-metadata').toUpperCase()}
              backgroundColor='accent'
              sx={{ mt: [20, 20, 20, 0] }}
              disabled={isLoading}
            />
          </Flex>
        </MotionBox>
      </form>
    </AnimatePresence>
  )
}
