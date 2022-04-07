import { useTranslation } from "react-i18next"
import { MotionFlex, MotionText } from "../../../common/motion-components"


export const CreateBounftNFT: React.FC = () => {
  const { t } = useTranslation('common')
  return (

    <MotionFlex 
    sx={{
    width: '100%', 
    flexDirection: 'column', 
    alignItems: 'center',
    overflow: 'hidden',
    }}>
    <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center'}}>
      <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <MotionText variant='styles.title-white'>{t('label.create').toUpperCase()}</MotionText>
        <MotionText variant='styles.title-bold-green'>{t('label.new-bound-nft').toUpperCase()}</MotionText>
      </MotionFlex>

      <MotionText variant='styles.body' color='white' sx={{ mt: 16}}>
        {t('label.nft-collection-create')}
      </MotionText>

    </MotionFlex>
  </MotionFlex>


  )
}