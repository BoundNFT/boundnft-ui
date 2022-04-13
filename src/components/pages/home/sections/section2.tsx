
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useInViewport } from 'react-in-viewport'
import styled from 'styled-components'
import { Button } from '../../../../theme/ui/common/button'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'
import { titleContainer, titleContainer2, titleContainer3, titlesContainer } from './details/motion-containers'

export const Section2: React.FC = () => {
  const section2 = useRef<any>()
  const wasInViewport = useRef<boolean>(false)
  const { inViewport } = useInViewport(section2, {}, { disconnectOnLeave: false }, {})
  useEffect(() => {
    if (inViewport) wasInViewport.current = true
  }, [inViewport])
  const { t } = useTranslation('common')

  return (
      <MotionBox sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', position: 'relative', alignitems: 'center'}} ref={section2}>
          
        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>

          <MotionFlex variants={titlesContainer} animate='visible' initial='hidden' sx={{ width: '100%', flexDirection: 'column'}}>
            <MotionText variant='text.title-white' variants={wasInViewport.current ? titleContainer : titleContainer} >{t('label.bound').toUpperCase()}</MotionText>
            <MotionText variant='text.title-bold-white' variants={wasInViewport.current ? titleContainer2 : titleContainer2}>{t('label.any-kind-of-nfts').toUpperCase()}</MotionText>
            <MotionText variant='text.body' mt={16} variants={wasInViewport.current ? titleContainer3 : titleContainer3}>{t('paragraph.section2-1').toUpperCase()}</MotionText>
          </MotionFlex>

          <MotionFlex sx={{ width: '100%', mt: 60, flexDirection: 'column'}}>
            <MotionFlex sx={{ width: '100%', flexWrap: 'wrap'}}>
              <MotionBox sx={{ width: 106, height: 136, position: 'relative', mx: 25}} >        
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

            <MotionFlex sx={{ width: '100%', mt: 70, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}} className={inViewport || wasInViewport.current ? 'slide-in-buttons' : ''}>
              <Button text={t('button.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
              <Button text={t('button.read-the-docs').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
            </MotionFlex>
            
          </MotionFlex>
        </MotionFlex>
      </MotionBox>
  )

}
