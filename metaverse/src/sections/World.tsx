import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn } from '@/utils/motion';
import { TitleText, TypingText } from '@/components'

function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div variants={staggerContainer(0, 0)}
        initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

        <TypingText title="| People on the World" className="text-center" />
        <TitleText className="text-center">
          Track friends around you and invite them to play together in the same world
        </TitleText>

        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]">

          <img src="./map.png" alt="world-map" className="w-full h-full object-cover" />
          <People positionTwd="bottom-20 right-20" imgUrl="./people-01.png" alt="people-01" />
          <People positionTwd="top-10 left-20" imgUrl="./people-02.png" alt="people-02" />
          <People positionTwd="top-1/2 left-[45%]" imgUrl="./people-03.png" alt="people-03" />
          <Frame positionTwd="top-[40%] left-[18%]" imgUrl="./planet-02.png" title="The Upside Down" />
          <Frame positionTwd="top-[10%] right-[20%]" imgUrl="./planet-03.png" title="Hawkins Labs" />
        </motion.div>

      </motion.div>
    </section>
  );
}

interface PeopleProps {
  positionTwd: string,
  imgUrl: string,
  alt: string
}

const People = ({ positionTwd, imgUrl, alt }: PeopleProps) => (
  <div className={`absolute ${positionTwd} w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]`}>
    <img src={imgUrl} alt={alt} className="w-full h-full" />
  </div>
)

interface FrameProps {
  positionTwd: string,
  imgUrl: string,
  title: string
}

const Frame = ({ positionTwd, imgUrl, title }: FrameProps) => (
  <div className={`absolute ${positionTwd} w-[220px] h-[150px] rounded-2xl bg-[#5d6680] p-1.5`}>
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      <img src={imgUrl} alt="planet-background"
        className="absolute bottom-0 w-[300%] h-[300%] object-cover" />
    </div>

    <div className="absolute bottom-0 text-white p-4 w-full">
      <div className="flex items-center">
        <img src='./people-01.png' alt='people' className="w-5 h-5" />
        <p className="ml-4 text-xs">+264 has joined</p>
      </div>
      <p className="mt-1">{title}</p>
    </div>
  </div>
)

export default World;
