const serviceCardVariants = (reverse: boolean = false) => ({
  hidden: {
    opacity: 0,
    x: reverse ? 40 : -40,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
});

export { serviceCardVariants };
