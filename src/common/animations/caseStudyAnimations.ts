const caseStudyWrapperAnimation = {
  hidden: {},
  visible: {},
};
const caseStudyBgAnimation = {
  hidden: {
    y: 0,
  },
  visible: {
    y: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

const caseStudySubtitleAnimation = {
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
const caseStudyTitleAnimation = {
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

const caseStudySwiperAnimation = {
  hidden: {
    y: '20%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

const caseStudyButtonAnimation = {
  hidden: {
    x: '-50%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export {
  caseStudyBgAnimation,
  caseStudyButtonAnimation,
  caseStudySubtitleAnimation,
  caseStudySwiperAnimation,
  caseStudyTitleAnimation,
  caseStudyWrapperAnimation,
};
