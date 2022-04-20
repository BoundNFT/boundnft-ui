/* import Image from 'next/image' */
import { useTranslation } from 'react-i18next'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'
import { imageContainer, logoTextContainer, titleContainer, titlesContainer } from './details/motion-containers'
import { Section1Sub } from './details/section-1-sub'
import { motion } from 'framer-motion'

const svgVariants = {
  hidden: { x: -30 },
  visible: { 
    x: 0,
    transition: { duration : 1.2, staggerChildren: 0.12 },
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 0.5,
      ease: 'easeInOut',
    }
  }
}

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: 15,
    rotate: 90,
  },
  visible: {
    opacity: 1,
    x: 0,
    pathLength: 1,
    rotate: 0,
    transition: { 
      duration: 1,
      delay: 1.3,
      ease: 'easeOut',

    }
  }
}


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
        <MotionBox sx={{ width: 95, height: 75, position: 'relative' }}>
          <motion.svg 
            variants={svgVariants}
            initial='hidden'
            animate='visible'
            id='Group_11' data-name='Group 11' xmlns='http://www.w3.org/2000/svg' width='94.255' height='75' viewBox='0 0 94.255 75'>
            <motion.path             
              variants={pathVariants2}
              id='Path_1' data-name='Path 1' d='M5.985,52.691V22.17L32.415,6.912,58.846,22.17V52.691L32.415,67.95ZM32.415,0,0,18.715v37.43L32.415,74.861,64.832,56.146V18.715Z' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_2' data-name='Path 2' d='M25.651,21.593H19.666V13.88l6.679-3.856,2.992,5.183-3.686,2.129Z' transform='translate(9.757 4.974)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_6' data-name='Rectangle 6' width='5.985' height='7.336' transform='translate(29.423 33.902)' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_3' data-name='Path 3' d='M26.345,44.033l-6.679-3.856V32.465h5.985v4.256l3.686,2.129Z' transform='translate(9.757 16.107)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_7' data-name='Rectangle 7' width='5.984' height='7.336' transform='matrix(0.5, -0.866, 0.866, 0.5, 42.455, 63.807)' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_4' data-name='Path 4' d='M43.546,46.216l-3.685-2.129L36.869,49.27l6.677,3.857,6.68-3.857-2.992-5.183Z' transform='translate(18.292 21.873)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_8' data-name='Rectangle 8' width='7.336' height='5.984' transform='matrix(0.866, -0.5, 0.5, 0.866, 71.878, 62.293)' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_5' data-name='Path 5' d='M60.22,32.466v4.256l-3.685,2.129,2.991,5.183,6.68-3.857V32.466Z' transform='translate(28.049 16.107)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_9' data-name='Rectangle 9' width='5.986' height='7.334' transform='translate(88.269 33.902)' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_6' data-name='Path 6' d='M56.534,15.208l3.685,2.129v4.257h5.986V13.881l-6.679-3.856Z' transform='translate(28.049 4.974)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_10' data-name='Rectangle 10' width='5.984' height='7.336' transform='translate(71.878 12.845) rotate(-59.994)' fill='#c0ff00'/>
            <motion.path             
              variants={pathVariants}
              id='Path_7' data-name='Path 7' d='M36.868,3.95l2.992,5.183L43.546,7l3.688,2.129L50.226,3.95,43.546.093Z' transform='translate(18.292 0.046)' fill='#c0ff00'/>
            <motion.rect 
              variants={pathVariants}
              id='Rectangle_11' data-name='Rectangle 11' width='7.336' height='5.984' transform='translate(42.454 11.331) rotate(-30.001)' fill='#c0ff00'/>
          </motion.svg>
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
