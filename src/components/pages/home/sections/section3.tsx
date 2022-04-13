
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInViewport } from 'react-in-viewport'
import styled from 'styled-components'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'

export const Section3 = () => {
  const { t } = useTranslation('common')
  const section3 = useRef<any>()
  const wasInViewport = useRef<boolean>(false)
  const { inViewport } = useInViewport(section3, {}, { disconnectOnLeave: false }, {})
  useEffect(() => {
    if (inViewport) wasInViewport.current = true
  }, [inViewport])
  return (
    <Animations>
      <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignItems: 'center', mt: [100, 150, 200, 150, 300]}} ref={section3}>
        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>

          <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>
            <MotionFlex>
              <MotionFlex sx={{ flexDirection: 'column'}}>
                <MotionText variant='text.title-white' className={inViewport || wasInViewport.current ? 'slide-in-title' : ''}>{t('label.fully').toUpperCase()}</MotionText>
                <MotionText variant='text.title-bold-white' className={inViewport || wasInViewport.current ? 'slide-in-title' : ''}>{t('label.functional').toUpperCase()}</MotionText>
              </MotionFlex>
              <MotionBox sx={{ width: 65, height: 65, position: 'relative'}} className={inViewport || wasInViewport.current ? 'slide-in-logo' : ''}>        
                <Image src={'/assets/images/elements/subtitle_element_1.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>

            <MotionText variant='text.body' sx={{ mt: 16, maxWidth: 593}}  className={inViewport || wasInViewport.current ? 'slide-in-text' : ''}>
              {t('paragraph.section3-1').toUpperCase()}
            </MotionText>
          </MotionFlex>

          <MotionFlex sx={{ width: '100%', justifyContent: 'right'}}>
            <MotionFlex sx={{ width: '100%', justifyContent: 'right', flexDirection: 'column', maxWidth: 645, mt: 80, fontSize: 64}}>
              <MotionFlex>
                <MotionFlex sx={{ flexDirection: 'column'}}>
                  <MotionText variant='text.title-white'  className={inViewport || wasInViewport.current ? 'slide-in-title-2' : ''}>{t('label.fully').toUpperCase()}</MotionText>
                  <MotionText variant='text.title-bold-white'  className={inViewport || wasInViewport.current ? 'slide-in-title-2' : ''}>{t('label.permissionless').toUpperCase()}</MotionText>
                </MotionFlex>
                <MotionBox sx={{ width: 65, height: 65, position: 'relative'}}  className={inViewport || wasInViewport.current ? 'slide-in-logo-2' : ''}>        
                  <Image src={'/assets/images/elements/subtitle_element_3.svg'} layout='fill' />
                </MotionBox>
              </MotionFlex>

              <MotionText variant='text.body' sx={{ mt: 16, maxWidth: 645}}  className={inViewport || wasInViewport.current ? 'slide-in-text-2' : ''}>
                {t('paragraph.section3-2').toUpperCase()}
              </MotionText>
      
            </MotionFlex>
          </MotionFlex>

          <MotionFlex sx={{width:'100%', flexDirection: 'column', fontSize: 64, mt: 80}}>
            <MotionFlex>
              <MotionFlex sx={{ flexDirection: 'column'}}>
                <MotionText as='text' variant='text.title-white'  className={inViewport || wasInViewport.current ? 'slide-in-title-3' : ''}>{t('label.fully').toUpperCase()}</MotionText>
                <MotionText as='text' variant='text.title-bold-white'  className={inViewport || wasInViewport.current ? 'slide-in-title-3' : ''}>{t('label.open-source').toUpperCase()}</MotionText>
              </MotionFlex>
              <MotionBox sx={{ width: 65, height: 65, position: 'relative'}}  className={inViewport || wasInViewport.current ? 'slide-in-logo-3' : ''}>        
                <Image src={'/assets/images/elements/subtitle_element_2.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>
            <MotionText variant='text.body' sx={{ mt: 16, maxWidth: 565}}  className={inViewport || wasInViewport.current ? 'slide-in-text-3' : ''}>
              {t('paragraph.section3-3').toUpperCase()}
            </MotionText>
          </MotionFlex>

          </MotionFlex>
      </MotionFlex>
    </Animations>
  )
}


const Animations: React.FC = styled(MotionFlex)`
  
  width: 100%;
  @keyframes slide-in-right {
    0% {
      transform: translateX(60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
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

  .slide-in-logo {
    animation: slide-in-right 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.6s both;
  }
  .slide-in-logo-2 {
    animation: slide-in-right 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.4s both;
  }
  .slide-in-logo-3 {
    animation: slide-in-right 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2.2s both;
  }
  .slide-in-title {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.4s both;
  }
  .slide-in-title-2 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s both;
  }
  .slide-in-title-3 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2s both;
  }
  .slide-in-text {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.7s both;
  }
  .slide-in-text-2 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.4s both;
  }
  .slide-in-text-3 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2.2s both;
  }
`