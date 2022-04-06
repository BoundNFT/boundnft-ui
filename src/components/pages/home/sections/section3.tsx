
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { MotionBox, MotionFlex, MotionText } from '../../../motion-components'

export const Section3 = () => {
  const { t } = useTranslation('common')
  return (
    <MotionFlex sx={{ width:'100%', justifyContent: 'center', alignItems: 'center', mt: 500 }}>
        
      <MotionFlex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column'}}>

        <MotionFlex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column'}}>
          <MotionFlex>
            <MotionFlex sx={{ flexDirection: 'column'}}>
              <MotionText variant='styles.title-white'>{t('label.fully').toUpperCase()}</MotionText>
              <MotionText variant='styles.title-bold-white'>{t('label.functional').toUpperCase()}</MotionText>
            </MotionFlex>
            <MotionBox sx={{ width: 65, height: 65, position: 'relative', mx: 25}}>        
              <Image src={'/assets/images/elements/subtitle_element_1.svg'} layout='fill' />
            </MotionBox>
          </MotionFlex>

          <MotionText variant='styles.body' sx={{ mt: 16, maxWidth: 593}}>
            {t('paragraph.section3-1').toUpperCase()}
          </MotionText>
        </MotionFlex>

        <MotionFlex sx={{ width: '100%', justifyContent: 'right'}}>
          <MotionFlex sx={{ width: '100%', justifyContent: 'right', flexDirection: 'column', maxWidth: 645, mt: 80, fontSize: 64}}>
            <MotionFlex>
              <MotionFlex sx={{ flexDirection: 'column'}}>
                <MotionText variant='styles.title-white'>{t('label.fully').toUpperCase()}</MotionText>
                <MotionText variant='styles.title-bold-white'>{t('label.permissionless').toUpperCase()}</MotionText>
              </MotionFlex>
              <MotionBox sx={{ width: 65, height: 65, position: 'relative', mx: 25}}>        
                <Image src={'/assets/images/elements/subtitle_element_3.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>

            <MotionText variant='styles.body' sx={{ mt: 16, maxWidth: 645}}>
              {t('paragraph.section3-2').toUpperCase()}
            </MotionText>
    
          </MotionFlex>
        </MotionFlex>

        <MotionFlex sx={{width:'100%', flexDirection: 'column', fontSize: 64, mt: 80}}>
          <MotionFlex>
            <MotionFlex sx={{ flexDirection: 'column'}}>
              <MotionText as='text' variant='styles.title-white'>{t('label.fully').toUpperCase()}</MotionText>
              <MotionText as='text' variant='styles.title-bold-white'>{t('label.open-source').toUpperCase()}</MotionText>
            </MotionFlex>
            <MotionBox sx={{ width: 65, height: 65, position: 'relative', mx: 25}}>        
              <Image src={'/assets/images/elements/subtitle_element_2.svg'} layout='fill' />
            </MotionBox>
          </MotionFlex>
          <MotionText variant='styles.body' sx={{ mt: 16, maxWidth: 565}}>
            {t('paragraph.section3-3').toUpperCase()}
          </MotionText>
        </MotionFlex>

        </MotionFlex>
    </MotionFlex>

  )

}