export const blogCardAnimation = {
  rest: {
    scale: 1,
  },
  zoom: {
    scale: 1.2,
  },
};
export const portfolioCardAnimation = {
  rest: {
    scale: 1,
  },
  zoom: {
    scale: 1.2,
  },
};
export const portfolioCardOverlayAnimation = {
  rest: {
    opacity: 0,
  },
  zoom: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
};
export const portfolioCardOverlayTextAnimation = {
  rest: {
    y: '110%',
  },
  zoom: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
export const portfolioCardOverlayBadgeAnimation = {
  rest: {
    y: '110%',
  },
  zoom: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};
