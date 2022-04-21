import useBoundNFT, { Screen } from 'modules/bound/hooks/useBoundNFT'
import { createContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box } from 'theme-ui'
import { MotionFlex, MotionText } from '../../common/motion-components'
import { mainContainer } from './details/motion-containers'
import { CreateBoundNFTStepError } from './steps/step-error'
import { CreateBoundNFTStepSuccess } from './steps/step-success'
import { CreateBoundNFTStep1 } from './steps/step1'
import { CreateBoundNFTStep2 } from './steps/step2'
import { CreateBoundNFTStep3 } from './steps/step3'
import { CreateBoundNFTStep4 } from './steps/step4'
import { CreateBoundNFTContext } from './types'

export const BoundNFTContext = createContext<CreateBoundNFTContext>({
  setIsBack: () => {}
})

export const CreateBoundNFT: React.FC = () => {
  const { t } = useTranslation('common')
  const [isBack, setIsBack] = useState<boolean>(false)
  const methods = useForm()
  const { data, metaData, screenState, setScreenState, handleStep1, handleCreateBNFT } = useBoundNFT()

  return (
    <BoundNFTContext.Provider value={{ screenState, setScreenState, setIsBack, isBack, metaData, data, handleStep1, handleCreateBNFT }}>
      <FormProvider {...methods}>
        <MotionFlex
          sx={{
            px: [20, 20, 20, 40, 0],
            pt: 170,
            pb: 200,
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center' }}>
            <MotionFlex variants={mainContainer} sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl' }} initial='hidden' animate={'visible'}>
              <MotionText variant='text.title-white'>{t('label.create').toUpperCase()}</MotionText>
              <MotionText variant='text.title-bold-green'>{t('label.new-boundnft').toUpperCase()}</MotionText>
            </MotionFlex>

            <MotionText
              variant='text.body'
              color='text3'
              sx={{ mt: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.9, type: 'spring' } }}
              initial={{ opacity: 0, y: -100 }}
            >
              {t('label.nft-collection-create')}
            </MotionText>
            <Box sx={{ minHeight: 560 }}>
              {(() => {
                switch (screenState) {
                  default:
                  case Screen.fetchMetadata:
                    return <CreateBoundNFTStep1 />
                  case Screen.checkDetails:
                    return <CreateBoundNFTStep2 />
                  case Screen.boundNFTConfirm:
                    return <CreateBoundNFTStep3 />
                  case Screen.boundNFTProcessing:
                    return <CreateBoundNFTStep4 />
                  case Screen.boundNFTCreationSuccess:
                    return <CreateBoundNFTStepSuccess />
                  case Screen.boundNFTCreationError:
                    return <CreateBoundNFTStepError />
                }
              })()}
            </Box>
          </MotionFlex>
        </MotionFlex>
      </FormProvider>
    </BoundNFTContext.Provider>
  )
}
