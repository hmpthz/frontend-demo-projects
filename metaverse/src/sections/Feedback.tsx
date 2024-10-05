import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion';

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}>

        <LeftPart />
        <RightPart />

      </motion.div>
    </section>
  );
}

const LeftPart = () => (
  <motion.div variants={fadeIn('right', 'tween', 0.25, 1)}
    className="flex-1 lg:max-w-[370px] gradient-05 p-4 sm:p-8 rounded-[32px] border border-[#6a6a6a] relative flex flex-col justify-end">
      <div className="feedback-gradient" />
      <div className="relative z-10 text-white">
        <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px]">Samantha </h4>
        <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px]">Founder | Metaverus</p>
        <p className="mt-[24px] font-normal text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px]">“With the development of today&rsqup;s technology, metaverse is very useful for today&rsqup;s work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </div>
  </motion.div>
);

const RightPart = () => (
  <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
    className="relative flex-[2]">
    <img src="./planet-09.png" alt="planet-09" className="w-full minh-[210px] lg:h-[610px] object-cover rounded-[40px]" />

    <motion.div variants={zoomIn(0.4, 1)}
      className="hidden lg:block absolute -left-[10%] top-[3%] ">
      <img src="./stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
    </motion.div>
  </motion.div>
)

export default Feedback;
