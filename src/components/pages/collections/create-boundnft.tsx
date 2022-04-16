import { createContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'theme-ui'
import { MotionFlex, MotionText } from '../../common/motion-components'
import { mainContainer } from './details/motion-containers'
import { CreateBoundNFTStep1 } from './steps/step1'
import { CreateBoundNFTStep2 } from './steps/step2'
import { CreateBoundNFTStep3 } from './steps/step3'
import { CreateBoundNFTStep4 } from './steps/step4'
import { CreateBoundNFTContext, Screen } from './types'

export const BoundNFTContext = createContext<CreateBoundNFTContext>({
  setIsBack: () => {}
})

export const CreateBoundNFT: React.FC = () => {
  const { t } = useTranslation('common')
  const [screenState, setScreenState] = useState<Screen>(Screen.fetchMetadata)
  const [isBack, setIsBack] = useState<boolean>(false)
  return (
    <BoundNFTContext.Provider value={{ screenState, setScreenState, setIsBack, isBack }}>
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

          <MotionText variant='text.body' color='white' sx={{ mt: 16 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.15, delay: 1, type: 'tween'} }} initial={{opacity: 0, y: -100}}>
            {t('label.nft-collection-create')}
          </MotionText>
          <Box sx={{minHeight: 560}}>
          {(() => {
            switch (screenState) {
              default:
              case Screen.fetchMetadata:
                return <CreateBoundNFTStep1 />
              case Screen.checkDetails:
                return <CreateBoundNFTStep2 />
              case Screen.boundNFTProcessing:
                return <CreateBoundNFTStep3 />
              case Screen.boundNFTCreationSuccess:
                return <CreateBoundNFTStep4 />
            }
          })()}
          </Box>
        </MotionFlex>
      </MotionFlex>
    </BoundNFTContext.Provider>
  )
}
