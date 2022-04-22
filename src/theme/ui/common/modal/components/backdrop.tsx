import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { BackdropProps } from '../types'

const MotionBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }: any) => theme.colors.backdrop};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 300;
`

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <MotionBackdrop onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </MotionBackdrop>
  )
}

export default Backdrop
