const mainHeroVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

const mainHeroControlsVariants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
  },
};

const mainHeroTitleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const mainHeroButtonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const mainHeroBgVariants = {
  hidden: {
    filter: 'blur(40px)',
  },
  visible: {
    filter: 'blur(5px)',

    transition: {
      duration: 0.8,
      ease: 'linear',
      type: 'tween',
    },
  },
};

export {
  mainHeroBgVariants,
  mainHeroButtonVariants,
  mainHeroControlsVariants,
  mainHeroTitleVariants,
  mainHeroVariants,
};
