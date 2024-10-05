import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from '@/utils/motion';

interface CardProps {
  imgUrl: string,
  title: string,
  subtitle: string,
  i: number
}

const InsightCard = ({ imgUrl, title, subtitle, i }: CardProps) => (
  <motion.div variants={fadeIn('up', 'spring', 0.5 * i, 1)}
    className="flex flex-col md:flex-row gap-5 my-4">
      <img src={imgUrl} alt="planet" className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover" />

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] max-w-[650px]">
          <h4 className="font-normal text-[26px] lg:text-[42px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal text-[14px] lg:text-[20px] text-secondary-white">{subtitle}</p>
        </div>

        <div className="hidden lg:flex justify-center items-center w-[100px] h-[100px] rounded-full bg-transparent border border-white">
          <img src="./arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
        </div>
      </div>
  </motion.div>
);

export default InsightCard;
