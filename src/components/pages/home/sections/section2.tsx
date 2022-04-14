
import { useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../../../theme/ui/common/button'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'
import { logoContainer2, logosContainer2, subTitleContainer, titleContainer, titlesContainer2 } from './details/motion-containers'
import { Link as ThemeLink } from 'theme-ui'
import { BOUNDNFT_DOCS_LINK } from 'constants/index'
import { permalink } from 'constants/routes'
import Link from 'next/link'

export const Section2: React.FC = () => {
  const { t } = useTranslation('common')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [ showComponent, setShowComponent ] = useState<boolean>(false)
  useEffect(() => {
      if (inView) {
        controls.start('visible')
        setShowComponent(true)
      }
    }, [controls, inView])

  return (
    <MotionBox sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', position: 'relative', alignitems: 'center'}} ref={ref} mt={100}>
      {showComponent && 
        <MotionFlex sx={{ width: '100%', flexDirection: 'column'}}>

          <MotionFlex variants={titlesContainer2} animate='visible' initial='hidden' sx={{ width: '100%', flexDirection: 'column'}}>
            <MotionText variant='text.title-white' variants={titleContainer}>{t('label.bound').toUpperCase()}</MotionText>
            <MotionText variant='text.title-bold-white' variants={titleContainer}>{t('label.any-kind-of-nfts').toUpperCase()}</MotionText>
            <MotionText variant='text.body' mt={16} variants={subTitleContainer}>{t('paragraph.section2-1').toUpperCase()}</MotionText>
          </MotionFlex>
      
          <MotionFlex sx={{ width: '100%', mt: 60, flexDirection: 'column'}}>
            <MotionFlex variants={logosContainer2} animate='visible' initial='hidden' sx={{ width: '100%', flexWrap: 'wrap'}}>
              <MotionBox variants={logoContainer2} sx={{ width: 106, height: 136, position: 'relative', mx: 25}}>        
                <Image src={'/assets/images/elements/nft_element_6.svg'} layout='fill' />
              </MotionBox>
              <MotionBox variants={logoContainer2} sx={{ width: 119, height: 136, position: 'relative', mx: 25}}>       
                <Image src={'/assets/images/elements/nft_element_1.svg'} layout='fill' />
              </MotionBox>
              <MotionBox variants={logoContainer2} sx={{ width: 97, height: 136, position: 'relative', mx: 25}}>       
                <Image src={'/assets/images/elements/nft_element_2.svg'} layout='fill' />
              </MotionBox>
              <MotionBox variants={logoContainer2} sx={{ width: 102.5, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_5.svg'} layout='fill' />
              </MotionBox>
              <MotionBox variants={logoContainer2} sx={{ width: 122, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_4.svg'} layout='fill' />
              </MotionBox>
              <MotionBox variants={logoContainer2} sx={{ width: 95, height: 136, position: 'relative', mx: 25}}>             
                <Image src={'/assets/images/elements/nft_element_3.svg'} layout='fill' />
              </MotionBox>
            </MotionFlex>
      
            <MotionFlex sx={{ width: '100%', mt: 70, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
              <Link href={permalink.collections} passHref><Button text={t('button.get-started').toUpperCase()} backgroundColor='green.100' arrowColor='black' /></Link>
              <ThemeLink href={BOUNDNFT_DOCS_LINK} target='_blank' sx={{width: '100%', maxWidth: [454, 454, 454, 420, 454]}}>
                <Button text={t('button.read-the-docs').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
              </ThemeLink>
            </MotionFlex>
            
          </MotionFlex>
        </MotionFlex>
      }
    </MotionBox>
  )

}
