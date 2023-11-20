export const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
/* Left Move ____________________________________________ */
export const moveInLeft = {
  initial: {
    opacity: 0,
    x: -400,
    rotate: -45,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,

    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};
/* Mover Right __________________________________________ */
export const moveInRight = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};
