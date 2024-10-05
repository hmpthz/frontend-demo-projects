import { motion } from "framer-motion";
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps extends ClassProps {
  title: string
}

export const TypingText = ({ title, className }: TypingTextProps) => (
  <motion.p variants={textContainer}
    className={`font-normal text-base text-secondary-white ${className}`}>
    {Array.from(title).map((c, i) => (
      <motion.span key={i} className="inline-block"
        variants={textVariant2}>
        {c == ' ' ? '\u00A0\u00A0' : c}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps extends ChildrenProps, ClassProps {}

export const TitleText = ({ children, className }: TitleTextProps) => (
  <motion.h2 variants={textVariant2}
    className={`mt-[8px] font-bold text-[40px] md:text-[64px] text-white ${className}`}>
      {children}
  </motion.h2>
);
