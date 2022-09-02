const quoteRootAnimation = {
  hidden: {},
  visible: {},
};
const quoteIconAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      type: 'tween',
      delay: 0.6,
    },
  },
};
const quoteTextAnimation = {
  hidden: {},
  visible: {},
};
const quoteAuthorAnimation = {
  hidden: {},
  visible: {},
};

export {
  quoteAuthorAnimation,
  quoteIconAnimation,
  quoteRootAnimation,
  quoteTextAnimation,
};
