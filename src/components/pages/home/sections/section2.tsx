
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { SelectionBox } from '../../../common/selection-box'
import { MotionBox, MotionFlex, MotionText } from '../../../motion-components'

export const Section2 = () => {
  const { t } = useTranslation('common')

  return (
    <MotionFlex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', mt: 120}}>
        
      <MotionFlex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column'}}>

        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>
          <MotionText variant='styles.title-white'>{t('label.bound').toUpperCase()}</MotionText>
          <MotionText variant='styles.title-bold-white'>{t('label.any-kind-of-nfts').toUpperCase()}</MotionText>
          <MotionText variant='styles.body' mt={16}>{t('paragraph.section2-1').toUpperCase()}</MotionText>
        </MotionFlex>

        <MotionFlex sx={{ width: '100%', mt: 60, flexDirection: 'column'}}>
          <MotionFlex sx={{ width: '100%', flexWrap: 'wrap'}}>
            <MotionBox sx={{ width: 106, height: 136, position: 'relative', mx: 25}}>        
              <Image src={'/assets/images/elements/nft_element_6.svg'} layout='fill' />
            </MotionBox>
            <MotionBox sx={{ width: 119, height: 136, position: 'relative', mx: 25}}>       
              <Image src={'/assets/images/elements/nft_element_1.svg'} layout='fill' />
            </MotionBox>
            <MotionBox sx={{ width: 97, height: 136, position: 'relative', mx: 25}}>       
              <Image src={'/assets/images/elements/nft_element_2.svg'} layout='fill' />
            </MotionBox>
            <MotionBox sx={{ width: 102.5, height: 136, position: 'relative', mx: 25}}>             
              <Image src={'/assets/images/elements/nft_element_5.svg'} layout='fill' />
            </MotionBox>
            <MotionBox sx={{ width: 122, height: 136, position: 'relative', mx: 25}}>             
              <Image src={'/assets/images/elements/nft_element_4.svg'} layout='fill' />
            </MotionBox>
            <MotionBox sx={{ width: 95, height: 136, position: 'relative', mx: 25}}>             
              <Image src={'/assets/images/elements/nft_element_3.svg'} layout='fill' />
            </MotionBox>
          </MotionFlex>

          <MotionFlex sx={{ width: '100%', mt: 70, justifyContent: 'space-between'}}>
            <SelectionBox text={t('label.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
            <SelectionBox text={t('label.read-the-docs').toUpperCase()} outlined/>
          </MotionFlex>
          
        </MotionFlex>
    </MotionFlex>
  </MotionFlex>
  )

}