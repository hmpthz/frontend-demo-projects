import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from '@/utils/motion';
import { useState } from "react";
import { ExploreCard, TitleText, TypingText } from '@/components'
import { exploreWorlds } from "@/constants";

function Explore() {
  const [active, setActive] = useState('world-2');

  return (
    <section id="explore" className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>

        <TypingText title="| The World" className="text-center" />
        <TitleText className="text-center">
          Choose the world you want
          &nbsp;<br className="hidden md:block" />
          to explore
        </TitleText>

        <div className="mt-[50px] min-h-[700px] gap-5 flex flex-col lg:flex-row">
          {exploreWorlds.map((item, i) => (
            <ExploreCard key={item.id} item={item} index={i} active={active} handleClick={setActive}/>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
