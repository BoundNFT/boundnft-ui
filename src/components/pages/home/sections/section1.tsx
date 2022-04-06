import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { MotionBox, MotionFlex, MotionText } from '../../../motion-components'

export const Section1 = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <MotionText variant='styles.title-white'>{t('label.powering').toUpperCase()}</MotionText>
        <MotionText variant='styles.title-bold-white'>{t('label.decentralized').toUpperCase()}</MotionText>
        <MotionText variant='styles.title-bold-green'>{t('label.nft-liquidity').toUpperCase()}</MotionText>
      </MotionFlex>

    <MotionFlex sx={{position: 'relative', flexDirection: 'column', alignItems: 'center', mt: 55, ml: 25}} initial={{ opacity: 0 }} animate={{ opacity: 1}}>
      <MotionBox sx={{ width: 95, height: 75, position: 'relative'}}>        
        <Image src='/assets/images/boundnft_logo.svg' layout='fill'/>
      </MotionBox>
      <MotionFlex sx={{ mt: 25}}>
        <MotionText variant='styles.semi-title-white'>{t('label.bound').toUpperCase()}</MotionText>
        <MotionText variant='styles.semi-title-bold-white'>{t('label.nft').toUpperCase()}</MotionText>
      </MotionFlex>
    </MotionFlex>

    <MotionFlex sx={{ width: '100%', justifyContent: 'right', ml: 380, mt: -240}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <MotionBox sx={{ width: 853, height: 473, position: 'relative'}}>        
          <Image src='/assets/images/top_image_1.png' layout='fill'/>
      </MotionBox>
    </MotionFlex>
    
    </>
  )

}