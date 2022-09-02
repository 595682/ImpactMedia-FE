const goalMapWrapperAnimation = {
  hidden: {},
  visible: {},
};

const goalMapBgAnimation = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

const goalMapCard1 = {
  hidden: {
    opacity: 0,
    y: '-20%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export { goalMapBgAnimation, goalMapCard1, goalMapWrapperAnimation };
