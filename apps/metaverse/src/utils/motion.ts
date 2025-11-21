import type { Variants } from 'motion/react';

type Direction = 'left' | 'right' | 'up' | 'down';
type AxisInput = number | string;
type AnimationType = 'spring' | 'tween' | 'keyframes' | 'inertia' | (string & {});

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
} as const satisfies Variants;

export const slideIn = (
  x: AxisInput,
  y: AxisInput,
  type: AnimationType,
  delay: number,
  duration: number
): Variants =>
  ({
    hidden: {
      x,
      y,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }) as Variants;

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants =>
  ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }) as Variants;

export const textVariant = (delay = 0): Variants =>
  ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  }) as Variants;

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const satisfies Variants;

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 1,
    },
  },
} as const satisfies Variants;

export const fadeIn = (
  direction: Direction,
  type: AnimationType,
  delay: number,
  duration: number
): Variants =>
  ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }) as Variants;

export const planetVariants = (direction: 'left' | 'right'): Variants =>
  ({
    hidden: {
      x: direction === 'left' ? -600 : 600,
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  }) as Variants;

export const zoomIn = (delay: number, duration: number): Variants =>
  ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }) as Variants;

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
} as const satisfies Variants;
