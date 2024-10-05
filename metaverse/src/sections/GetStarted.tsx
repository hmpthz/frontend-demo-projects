import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion';
import { StartSteps, TitleText, TypingText } from '@/components'
import { startingFeatures } from "@/constants";

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}>

        <motion.div variants={planetVariants('left')}
          className={`${styles.flexCenter} flex-[4]`}>
          <img src="./get-started.png" alt="get-started"
            className="w-[90%] h-[90%] object-contain" />
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[3] flex justify-center flex-col">
          <TypingText title="| How Metaverse Works" className="" />
          <TitleText className="">
            Get started with just a few clicks
          </TitleText>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((item, i) => (
              <StartSteps key={item} num={i+1} text={item} />
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default GetStarted;
