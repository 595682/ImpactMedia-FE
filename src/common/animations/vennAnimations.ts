const vennBubble1 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
      delay: 1,
    },
  },
};
const vennBubble2 = {
  hidden: {
    opacity: 0,
    y: 100,
    x: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
      delay: 1.1,
    },
  },
};
const vennBubble3 = {
  hidden: {
    opacity: 0,
    y: 100,
    x: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
      delay: 1.2,
    },
  },
};
const youBubble = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      type: 'tween',
      delay: 1.2,
    },
  },
};

export { vennBubble1, vennBubble2, vennBubble3, youBubble };
