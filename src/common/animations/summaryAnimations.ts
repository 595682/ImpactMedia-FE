const summaryHeaderAnimation = {
  hidden: {
    y: '200%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      type: 'tween',
      when: 'beforeChildren',
    },
  },
};

const summaryStaggerItemAnimation = {
  hidden: {
    y: '20%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 1.6,
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export { summaryHeaderAnimation, summaryStaggerItemAnimation };
