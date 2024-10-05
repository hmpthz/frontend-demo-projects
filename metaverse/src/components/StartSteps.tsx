import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion';

interface StartStepProps {
  num: number;
  text: string;
}

const StartSteps = ({ num, text }: StartStepProps) => (
  <div className="flex items-center">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{num}</p>
    </div>

    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
