import { motion } from "framer-motion";
import { TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from '@/utils/motion';

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0.2, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

        <TypingText title="| About Metaversus" className="text-center" />

        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-2 font-normal text-[20px] sm:text-[32px] text-center text-secondary-white">
          &nbsp;<span className="font-extrabold text-white">Metaverse</span>&nbsp;
          is a new thing in the future, where you can enjoy the virtual world by feeling like it&rsquo;s really real, you can feel what you feel in this metaverse world, because this is really the
          &nbsp;<span className="font-extrabold text-white">madness of the metaverse</span>&nbsp;
          of today, using only
          &nbsp;<span className="font-extrabold text-white">VR</span>&nbsp;
          devices you can easily explore the metaverse world you want, turn your dreams into reality. Let&rsquo;s
          &nbsp;<span className="font-extrabold text-white">explore</span>&nbsp;
          the madness of the metaverse by scrolling down.
        </motion.p>

        <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}
          src="./arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] mt-[28px]" />

      </motion.div>
    </section>
  );
}

export default About;
