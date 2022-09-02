const factsTopBgAnimation = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};
const factsBottomBgAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export { factsBottomBgAnimation, factsTopBgAnimation };
