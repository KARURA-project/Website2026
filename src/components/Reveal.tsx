'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  /** Animate on page load instead of when scrolled into view. */
  onMount?: boolean;
};

/** Fade (and slide) a block in, once. The only client piece most pages need. */
export function Reveal({ delay = 0, duration, x = 0, y = 16, onMount = false, ...rest }: RevealProps) {
  const shown = { opacity: 1, x: 0, y: 0 };
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      {...(onMount ? { animate: shown } : { whileInView: shown, viewport: { once: true } })}
      transition={duration === undefined ? { delay } : { delay, duration }}
      {...rest}
    />
  );
}
