import { animate, motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, slideIn } from '@/utils/motion';
import type { WorldItem } from "@/constants";

interface ExploreCardProps {
  item: WorldItem,
  index: number,
  active: string,
  handleClick: ReactSetState<string>
}

const ExploreCard = ({ item, index, active, handleClick }: ExploreCardProps) => (
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${styles.flexCenter} min-w-[170px] min-h-[80px] lg:h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-3xl overflow-hidden
      ${active == item.id
        ? 'flex-[10] lg:flex-[3.5]'
        : 'flex-[2] lg:flex-[0.5]'}`}
    onClick={() => handleClick(item.id)}>

    <img src={item.imgUrl} alt={item.title} className="absolute w-full h-full object-cover" />

    {active != item.id ? NonActive(item.title) : ActivePanel(item.title)}
  </motion.div>
);

const NonActive = (title: string) => (
  <div key='non' className="absolute z-0 lg:bottom-20 lg:w-[170px]">
    <h3
      className="lg:-rotate-90 lg:origin-center font-semibold text-[18px] sm:text-[26px] text-white">
      {title}
    </h3>
  </div>
);

const ActivePanel = (title: string) => (
  <motion.div key='active' variants={slideIn(0, '100%', 'tween', 0.5, 0.3)} initial='hidden' animate='show'
    className="absolute bottom-0 p-8 w-full bg-black/50">

    <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-2xl mb-[16px] glassmorphism`}>
      <img src="./headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
    </div>
    <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
      Enter the metaverse
    </p>
    <h2 className="mt-[24px] text-[24px] sm:text-[32px] font-semibold text-white">
      {title}
    </h2>

  </motion.div>
);

export default ExploreCard;
