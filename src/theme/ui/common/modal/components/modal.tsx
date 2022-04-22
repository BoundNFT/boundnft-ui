import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { ModalProps } from '../types'
import Backdrop from './backdrop'
import { createPortal } from 'react-dom'
import { cloneElement, isValidElement, useMemo } from 'react'
import { Close } from 'theme-ui'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut'
    }
  }
}

const MotionModal = styled(motion.div)`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MotionClose = styled(motion(Close))`
  color: ${({ theme }: any) => theme.colors.text1};
  position: absolute;
  right: 10px;
  top: 10px;
`

const Modal: React.FC<ModalProps> = ({ handleClose, children, type = 'dropIn', mode }) => {
  const Component = useMemo(
    () => (
      <Backdrop onClick={mode !== 'kiosk' ? handleClose : undefined}>
        {type === 'dropIn' && (
          <MotionModal
            onClick={e => e.stopPropagation()} // Prevent click from closing modal
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {mode !== 'kiosk' && <MotionClose whileHover={{ scale: 1.1 }} onClick={handleClose} />}
            {isValidElement(children) && cloneElement(children)}
          </MotionModal>
        )}

        {type === 'gifYouUp' && (
          <MotionModal onClick={e => e.stopPropagation()} variants={gifYouUp} initial='hidden' animate='visible' exit='exit'>
            {mode !== 'kiosk' && <MotionClose whileHover={{ scale: 1.1 }} onClick={handleClose} />}
            {isValidElement(children) && cloneElement(children)}
          </MotionModal>
        )}
      </Backdrop>
    ),
    [children, handleClose, mode, type]
  )

  return createPortal(Component, document.getElementById('__next') as HTMLElement)
}

export default Modal
