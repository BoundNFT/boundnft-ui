import { createContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MotionFlex, MotionText } from '../../common/motion-components'
import { CreateBoundNFTStep1 } from './steps/step1'
import { CreateBoundNFTStep2 } from './steps/step2'
import { CreateBoundNFTStep3 } from './steps/step3'
import { CreateBoundNFTStep4 } from './steps/step4'
import { CreateBoundNFTContext, Screen } from './types'


export const BoundNFTContext = createContext<CreateBoundNFTContext>({})

export const CreateBoundNFT: React.FC = () => {
  const { t } = useTranslation('common')
  const [ screenState, setScreenState ] = useState<Screen>(Screen.fetchMetadata) 
  return (
    <BoundNFTContext.Provider value={{ screenState, setScreenState }}>
      <MotionFlex 
        sx={{
        width: '100%', 
        flexDirection: 'column', 
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center'}}>
          <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MotionText variant='text.title-white'>{t('label.create').toUpperCase()}</MotionText>
            <MotionText variant='text.title-bold-green'>{t('label.new-boundnft').toUpperCase()}</MotionText>
          </MotionFlex>

          <MotionText variant='text.body' color='white' sx={{ mt: 16}}>
            {t('label.nft-collection-create')}
          </MotionText>

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
        </MotionFlex>
      </MotionFlex>
    </BoundNFTContext.Provider>


  )
}