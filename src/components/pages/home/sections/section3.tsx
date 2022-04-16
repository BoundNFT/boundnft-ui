import { useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'
import { logoContainer3, section3Parent, subTitleContainer3, titleContainer, titlesContainer3 } from './details/motion-containers'

export const Section3 = () => {
  const { t } = useTranslation('common')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [showComponent, setShowComponent] = useState<boolean>(false)

  useEffect(() => {
    if (inView) {
      setShowComponent(true)
    }
  }, [controls, inView])

  return (
    <MotionFlex sx={{ width: '100%', maxWidth: 960, height: 'auto', flexDirection: 'column', alignItems: 'center', mt: [100, 150, 200, 150, 300] }} ref={ref}>
      {showComponent && (
        <MotionFlex
          variants={section3Parent}
          animate='visible'
          initial='hidden'
          sx={{
            width: '100%',
            flexDirection: 'column'
          }}
        >
          <MotionFlex
            variants={titlesContainer3}
            sx={{
              width: '100%',
              flexDirection: 'column'
            }}
          >
            <MotionFlex>
              <MotionFlex sx={{ flexDirection: 'column' }}>
                <MotionText variant='text.title-white' variants={titleContainer}>
                  {t('label.fully').toUpperCase()}
                </MotionText>
                <MotionText variant='text.title-bold-white' variants={titleContainer}>
                  {t('label.functional').toUpperCase()}
                </MotionText>
              </MotionFlex>
              <MotionBox sx={{ width: 65, height: 65, position: 'relative' }} variants={logoContainer3}>
                <Image src={'/assets/images/elements/subtitle_element_1.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>

            <MotionText variant='text.body' variants={subTitleContainer3} sx={{ mt: 16, maxWidth: 593 }}>
              {t('paragraph.section3-1').toUpperCase()}
            </MotionText>
          </MotionFlex>

          <MotionFlex variants={titlesContainer3} sx={{ width: '100%', justifyContent: 'right' }}>
            <MotionFlex sx={{ width: '100%', justifyContent: 'right', flexDirection: 'column', maxWidth: 645, mt: 80, fontSize: 64 }}>
              <MotionFlex>
                <MotionFlex sx={{ flexDirection: 'column' }}>
                  <MotionText variant='text.title-white' variants={titleContainer}>
                    {t('label.fully').toUpperCase()}
                  </MotionText>
                  <MotionText variant='text.title-bold-white' variants={titleContainer}>
                    {t('label.permissionless').toUpperCase()}
                  </MotionText>
                </MotionFlex>
                <MotionBox sx={{ width: 65, height: 65, position: 'relative' }} variants={logoContainer3}>
                  <Image src={'/assets/images/elements/subtitle_element_3.svg'} layout='fill' />
                </MotionBox>
              </MotionFlex>

              <MotionText variant='text.body' sx={{ mt: 16, maxWidth: 645 }} variants={subTitleContainer3}>
                {t('paragraph.section3-2').toUpperCase()}
              </MotionText>
            </MotionFlex>
          </MotionFlex>

          <MotionFlex variants={titlesContainer3} sx={{ width: '100%', flexDirection: 'column', fontSize: 64, mt: 80 }}>
            <MotionFlex>
              <MotionFlex sx={{ flexDirection: 'column' }}>
                <MotionText as='text' variant='text.title-white' variants={titleContainer}>
                  {t('label.fully').toUpperCase()}
                </MotionText>
                <MotionText as='text' variant='text.title-bold-white' variants={titleContainer}>
                  {t('label.open-source').toUpperCase()}
                </MotionText>
              </MotionFlex>
              <MotionBox sx={{ width: 65, height: 65, position: 'relative' }} variants={logoContainer3}>
                <Image src={'/assets/images/elements/subtitle_element_2.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>
            <MotionText variant='text.body' sx={{ mt: 16, maxWidth: 565 }} variants={subTitleContainer3}>
              {t('paragraph.section3-3').toUpperCase()}
            </MotionText>
          </MotionFlex>
        </MotionFlex>
      )}
    </MotionFlex>
  )
}
