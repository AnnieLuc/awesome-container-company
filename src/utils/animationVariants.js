export const sectionVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 3,
    },
  },
};

export const chatVariants = {
  offscreen: {
    opacity: 0,
    y: 300,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      mass: 0.2,
      damping: 20,
    },
  },
};

export const sustainabilityIconVariants = {
  hidden: {
    y: -250,
    opacity: 0,
  },

  visible: {
    y: -10,
    opacity: 1,
  },
};
