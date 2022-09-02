const approachWrapperAnimation = {
  hidden: {},
  visible: {},
};
const approachBgAnimation = {
  hidden: {
    height: '0%',
  },
  visible: {
    height: '60%',
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export { approachBgAnimation, approachWrapperAnimation };
