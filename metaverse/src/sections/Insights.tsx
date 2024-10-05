import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from '@/utils/motion';
import { InsightCard, TitleText, TypingText } from '@/components'
import { insights } from "@/constants";

function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

        <TypingText title="| Insights" className="text-center" />
        <TitleText className="text-center">
          Insights about metaverse
        </TitleText>

        <motion.div className="mt-[50px]">
          {insights.map((item, i) => (
            <InsightCard key={i} {...item} i={i} />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Insights;
