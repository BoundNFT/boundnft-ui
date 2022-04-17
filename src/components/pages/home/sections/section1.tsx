import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'
import { imageContainer, logoContainer, logoTextContainer, titleContainer, titlesContainer } from './details/motion-containers'
import { Section1Sub } from './details/section-1-sub'

export const Section1 = () => {
  const { t } = useTranslation('common')
  return (
    <MotionFlex sx={{ width: '100%', maxWidth: 1280, flexDirection: 'column' }}>
      <MotionFlex variants={titlesContainer} animate='visible' initial='hidden' sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl' }}>
        <MotionText variant='text.title-white' variants={titleContainer}>
          {t('label.powering').toUpperCase()}
        </MotionText>
        <MotionText variant='text.title-bold-white' variants={titleContainer}>
          {t('label.decentralized').toUpperCase()}
        </MotionText>

        <MotionText variant='text.title-bold-green' variants={titleContainer}>
          {t('label.nft-liquidity').toUpperCase()}
        </MotionText>
      </MotionFlex>

      <MotionFlex
        sx={{
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
          ml: [0, 0, 0],
          mt: 40
        }}
      >
        <MotionBox variants={logoContainer} animate='visible' initial='hidden' sx={{ width: 95, height: 75, position: 'relative' }}>
          <Image src='/assets/images/boundnft_logo.svg' layout='fill' />
        </MotionBox>
        <MotionFlex variants={logoTextContainer} animate='visible' initial='hidden' sx={{ mt: 25 }}>
          <MotionText variant='text.semi-title-white'>{t('label.bound').toUpperCase()}</MotionText>
          <MotionText variant='text.semi-title-bold-white' sx={{ ml: '1.5px' }}>
            {t('label.nft').toUpperCase()}
          </MotionText>
        </MotionFlex>
      </MotionFlex>

      <MotionFlex
        variants={imageContainer}
        animate='visible'
        initial='hidden'
        sx={{
          width: '100%',
          justifyContent: 'right',
          alignItems: 'right',
          ml: [50, 50, 100, 150, 50],
          mt: [50, 50, 50, -150]
        }}
      >
          <Section1Sub />
      </MotionFlex>
    </MotionFlex>
  )
}
