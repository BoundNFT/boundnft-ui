
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../../theme/ui/common/button'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'

export const Section2 = () => {
  const { t } = useTranslation('common')

  return (
    <MotionFlex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', mt: [150, 150, 120]}}>
        
      <MotionFlex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column'}}>

        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>
          <MotionText variant='text.title-white'>{t('label.bound').toUpperCase()}</MotionText>
          <MotionText variant='text.title-bold-white'>{t('label.any-kind-of-nfts').toUpperCase()}</MotionText>
          <MotionText variant='text.body' mt={16}>{t('paragraph.section2-1').toUpperCase()}</MotionText>
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

          <MotionFlex sx={{ width: '100%', mt: 70, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
            <Button text={t('button.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
            <Button text={t('button.read-the-docs').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
          </MotionFlex>
          
        </MotionFlex>
    </MotionFlex>
  </MotionFlex>
  )

}