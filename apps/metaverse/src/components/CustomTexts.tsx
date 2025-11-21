import { motion, type Variants } from 'motion/react';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps extends ClassProps {
  title: string;
}

const letterVariants = textVariant2 as Variants;

export const TypingText = ({ title, className }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-base text-secondary-white ${className}`}
  >
    {Array.from(title).map((c, i) => (
      <motion.span key={i} className="inline-block" variants={letterVariants}>
        {c == ' ' ? '\u00A0\u00A0' : c}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps extends ChildrenProps, ClassProps {}

export const TitleText = ({ children, className }: TitleTextProps) => (
  <motion.h2
    variants={letterVariants}
    className={`mt-[8px] font-bold text-[40px] md:text-[64px] text-white ${className}`}
  >
    {children}
  </motion.h2>
);
