import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import { MotionBox, MotionFlex, MotionText } from '../../../common/motion-components'

export const Section1 = () => {
  const { t } = useTranslation('common')
  return (
    <Animations>
      <MotionFlex sx={{ width: '100%', maxWidth: 1280, flexDirection: 'column'}}>
        <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}}>
          <MotionText className='slide-in-title' variant='text.title-white'>{t('label.powering').toUpperCase()}</MotionText>
          <MotionText className='slide-in-title-2'variant='text.title-bold-white'>{t('label.decentralized').toUpperCase()}</MotionText>
          <MotionText className='slide-in-title-3'variant='text.title-bold-green'>{t('label.nft-liquidity').toUpperCase()}</MotionText>
        </MotionFlex>

        <MotionFlex sx={{position: 'relative', flexDirection: 'column', alignItems: 'center', ml: [0, 0, 0], mt: 40}}>
          <MotionBox className='slide-in-logo' sx={{ width: 95, height: 75, position: 'relative'}}>        
            <Image src='/assets/images/boundnft_logo.svg' layout='fill'/>
          </MotionBox>
          <MotionFlex className='slide-in-title-3' sx={{ mt: 25}}>
            <MotionText variant='text.semi-title-white'>{t('label.bound').toUpperCase()}</MotionText>
            <MotionText variant='text.semi-title-bold-white'>{t('label.nft').toUpperCase()}</MotionText>
          </MotionFlex>
        </MotionFlex>

        <MotionFlex className='fade-in-img-right' sx={{ width: '100%',  justifyContent: 'right', ml: [0, 50, 300, 450, 450], mt: [50, 50, -200, -250]}}>
          <Box sx={{ width: [344, 452, 638, 853], height: [191, 250, 354, 473], position: 'relative'}}>        
            <Image src='/assets/images/top_image_1.png' layout='fill'/>
          </Box>
        </MotionFlex>
      
      </MotionFlex>
    </Animations>
  )

}


const Animations: React.FC = styled.div`
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
      opacity: 2;
    }
  }
 
  .fade-in-img-right {
    animation: fade-in 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s both;
  }
  .slide-in-logo {
    animation: slide-in-top 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.7s both;
  }
  .slide-in-title {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s both;
  }
  .slide-in-title-2 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.7s both;
  }
  .slide-in-title-3 {
    animation: slide-in-bottom 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.9s both;
  }

`