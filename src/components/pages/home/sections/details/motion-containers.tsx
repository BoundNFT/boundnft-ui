export const titlesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3
    }
  }
}

export const titleContainer = {
  hidden: { 
    opacity: 0, 
    y: -25,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.8, duration: 0.6}
  },
}

export const titleContainer2 = {
  hidden: { 
    opacity: 0, 
    y: -25, 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 1.1, duration: 0.6 }
  },
}

export const titleContainer3 = {
  hidden: { 
    opacity: 0, 
    y: -25, 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 1.4, duration: 0.6 }
  },
}

export const logoContainer = {
  hidden: { 
    opacity: 0, 
    y: 25, 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.3, duration: 0.5 }
  },
}

export const logoTextContainer = {
  hidden: { 
    opacity: 0, 
    y: 25, 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.5, duration: 0.5 }
  },
}

export const imageContainer = {
  hidden: { 
    opacity: 0, 
    x: 50, 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { delay: 1.5, duration: 0.3 }
  },
}
