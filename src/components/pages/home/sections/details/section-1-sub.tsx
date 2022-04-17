import { MotionFlex, MotionBox } from 'components/common/motion-components'
import { Flex } from 'theme-ui'
import Image from 'next/image'
import { PUNK_IMAGE_PATH, BAYC_IMAGE_PATH } from 'constants/index'
import { animationParent, imageContainer2, imageContainer3, subAnimation } from './motion-containers'

export const Section1Sub: React.FC = () => {

  return (
    <MotionFlex variants={animationParent} animate='visible' initial='hidden'  sx={{width: '100%', maxWidth: [320, 320, 488]}}>

      <MotionBox variants={subAnimation} animate='visible' initial='hidden'  >
        <Flex sx={{alignItems: 'right', justifyContent: 'right', mb: 10}}>
          <MotionBox sx={{ width: 73, height: 39, position: 'relative', mr: 20 }} variants={imageContainer2}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
          <MotionBox sx={{ width: 73, height: 39, position: 'relative' }} variants={imageContainer3}>
            <Image src={BAYC_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </Flex>
        <Flex sx={{ mb: 10}}>
          <MotionBox sx={{ width: 219, height: 144, position: 'relative'}} variants={imageContainer2}>
            <Image src={BAYC_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </Flex>
        <Flex sx={{alignItems: 'flex-start', ml: -40}}>
          <MotionBox sx={{ width: 141, height: 73, position: 'relative'}} variants={imageContainer3}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
          <MotionBox sx={{ width: 73, height: 39, position: 'relative'}} variants={imageContainer2}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </Flex>
      </MotionBox>

      <MotionBox variants={subAnimation} animate='visible' initial='hidden'  >
        <MotionFlex>
          <MotionBox sx={{ width: 219, height: 144, position: 'relative', mt: -14}} variants={imageContainer3}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </MotionFlex>
        <Flex sx={{alignItems: 'flex-start', mt: 10}}>
          <MotionBox sx={{ width: 73, height: 39, position: 'relative', mr: 15}} variants={imageContainer3}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
          <MotionBox sx={{ width: 141, height: 73, position: 'relative'}} variants={imageContainer2}>
            <Image src={BAYC_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </Flex>
        <Flex sx={{alignItems: 'flex-end', ml: -40, mt: -15}}>
          <MotionBox sx={{ width: 141, height: 73, position: 'relative', mr: 3}} variants={imageContainer2}>
            <Image src={BAYC_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
          <MotionBox sx={{ width: 73, height: 39, position: 'relative', mt: 40}} variants={imageContainer2}>
            <Image src={PUNK_IMAGE_PATH} layout='fill' quality={'100%'}/>
          </MotionBox>
        </Flex>
      </MotionBox>
    </MotionFlex>

  )
}