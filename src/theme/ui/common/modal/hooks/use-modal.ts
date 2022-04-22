import { useCallback, useState } from 'react'
import { UseModal } from '../types'
import { useDisableBodyScroll } from './use-disable-body-scroll'

const useModal = (): UseModal => {
  const [modalOpen, setModalOpen] = useState(false)
  useDisableBodyScroll(modalOpen)

  const close = useCallback(() => setModalOpen(false), [])
  const open = useCallback(() => setModalOpen(true), [])

  return { modalOpen, close, open }
}

export default useModal
