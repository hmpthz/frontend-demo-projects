import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion';
import { NewFeatures, TitleText, TypingText } from '@/components'
import { newFeatures } from "@/constants";

function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}>

        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[3] flex justify-center flex-col">
          <TypingText title="| What's New?" className="" />
          <TitleText className="">
            What&rsquo;s new about Metaversus?
          </TitleText>
          <div className="mt-[31px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((item) => (
              <NewFeatures key={item.title} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={planetVariants('right')}
          className={`${styles.flexCenter} flex-[4]`}>
          <img src="./whats-new.png" alt="whats-new"
            className="w-[90%] h-[90%] object-contain" />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default WhatsNew;
