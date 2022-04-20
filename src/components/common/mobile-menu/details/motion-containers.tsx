export const slideVerticalAnimation = {
  visible: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.4,
      type: 'spring'
    },
    display: 'block'
  },
  hidden: {
    rotateX: -15,
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.3
    },
    transitionEnd: {
      display: 'none'
    }
  }
}
