export const titlesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.1,
      staggerChildren: 0.6
    }
  }
}

export const titlesContainer2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.4
    }
  }
}

export const titlesContainer3 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      when: 'beforeChildren'
    }
  }
}

export const titleContainer = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export const subTitleContainer = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 2.4 }
  }
}

export const subTitleContainer3 = {
  hidden: {
    opacity: 0,
    x: 25
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 1.2, type: 'spring' }
  }
}

export const logoContainer = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export const logosContainer2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.3,
      when: 'beforeChildren'
    }
  }
}

export const logoContainer2 = {
  hidden: {
    opacity: 0.0,
    scale: 1.2
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

export const logoContainer3 = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: 30
  },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: 'spring', stiffness: 100 }
  }
}

export const logoTextContainer = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.6 }
  }
}

export const imageContainer = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.8, duration: 0.6 }
  }
}

export const section3Parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 1.2
    }
  }
}
