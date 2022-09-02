const tableWrapperVariants = {
  hidden: {
    opacity: 0.6,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      dealy: 2,
      delayChildren: 0.6,
      duration: 1.2,
      ease: 'easeInOut',
      type: 'tween',
      staggerChildren: 0.2,
    },
  },
};

const tableRowVariants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      type: 'tween',
      when: 'beforeChildren',
    },
  },
};

const tableBgVariants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100%',
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export { tableBgVariants, tableRowVariants, tableWrapperVariants };
