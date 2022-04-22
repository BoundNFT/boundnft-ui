import { AnimatePresence } from 'framer-motion'
import { ModalContainerProps } from '../types'

const ModalContainer: React.FC<ModalContainerProps> = ({ children, modalOpen }) => (
  <AnimatePresence initial={false} exitBeforeEnter={true}>
    {modalOpen && children}
  </AnimatePresence>
)

export default ModalContainer
