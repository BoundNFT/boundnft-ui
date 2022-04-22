export type BackdropProps = {
  onClick?: () => void
}

export type ModalProps = {
  handleClose: () => void
  type?: 'dropIn' | 'gifYouUp'
  mode?: 'kiosk'
}

export type UseModal = {
  modalOpen: boolean
  close: () => void
  open: () => void
}

export type ModalContainerProps = {
  modalOpen: boolean
}
