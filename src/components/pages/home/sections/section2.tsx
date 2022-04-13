
import Image from 'next/image'
import { MutableRefObject, ReactHTMLElement, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useInViewport } from 'react-in-viewport'
import styled from 'styled-components'
import { Button } from '../../../../theme/ui/common/button'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'

export const Section2: React.FC = () => {
  const section2 = useRef<any>()
  const wasInViewport = useRef<boolean>(false)
  const { inViewport } = useInViewport(section2, {}, { disconnectOnLeave: false }, {})
  useEffect(() => {
    if (inViewport) wasInViewport.current = true
  }, [inViewport])
  const { t } = useTranslation('common')
  return (
    <Animations>
      <MotionBox sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', position: 'relative', alignitems: 'center'}} ref={section2}>
          
        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>

          <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>
            <MotionText variant='text.title-white' className={inViewport || wasInViewport.current ? 'slide-in-title' : ''}>{t('label.bound').toUpperCase()}</MotionText>
            <MotionText variant='text.title-bold-white' className={inViewport || wasInViewport.current ? 'slide-in-title' : ''}>{t('label.any-kind-of-nfts').toUpperCase()}</MotionText>
            <MotionText variant='text.body' mt={16} className={inViewport || wasInViewport.current ? 'slide-in-text' : ''}>{t('paragraph.section2-1').toUpperCase()}</MotionText>
          </MotionFlex>

          <MotionFlex sx={{ width: '100%', mt: 60, flexDirection: 'column'}}>
            <MotionFlex sx={{ width: '100%', flexWrap: 'wrap'}}>
              <MotionBox sx={{ width: 106, height: 136, position: 'relative', mx: 25}} className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}>        
                <Image src={'/assets/images/elements/nft_element_6.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
              <MotionBox sx={{ width: 119, height: 136, position: 'relative', mx: 25}}>       
                <Image src={'/assets/images/elements/nft_element_1.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
              <MotionBox sx={{ width: 97, height: 136, position: 'relative', mx: 25}}>       
                <Image src={'/assets/images/elements/nft_element_2.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
              <MotionBox sx={{ width: 102.5, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_5.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
              <MotionBox sx={{ width: 122, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_4.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
              <MotionBox sx={{ width: 95, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_3.svg'} layout='fill' className={inViewport || wasInViewport.current ? 'slide-in-nfts' : ''}/>
              </MotionBox>
            </MotionFlex>

            <MotionFlex sx={{ width: '100%', mt: 70, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}} className={inViewport || wasInViewport.current ? 'slide-in-buttons' : ''}>
              <Button text={t('button.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
              <Button text={t('button.read-the-docs').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
            </MotionFlex>
            
          </MotionFlex>
        </MotionFlex>
      </MotionBox>
    </Animations>
  )

}


const Animations: React.FC = styled(MotionBox)`
  width: 100%;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .slide-in-nfts {
    animation: slide-in-top 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.7s both;
  }
  .slide-in-title {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s both;
  }
  .slide-in-text {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.7s both;
  }
  .slide-in-buttons {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s both;
  }

`
