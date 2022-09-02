const defaultWrapperAnimation = {
  hidden: {
    opacity: 1,
    transition: {
      duration: 0,
      when: 'beforeChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      when: 'beforeChildren',
    },
  },
};

const SubtitleAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
      duration: 1,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};
const TitleAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

const StaggerWrapperAnimation = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const StaggerItemAnimation = {
  hidden: {
    y: '20%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

const SlideUpAnimation = (delay: number = 0.8) => ({
  hidden: {
    y: '20%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
});

const ExpandBgAnimation = {
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
const SlideBgUpAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export {
  defaultWrapperAnimation,
  ExpandBgAnimation,
  SlideBgUpAnimation,
  SlideUpAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
  TitleAnimation,
};
