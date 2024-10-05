import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from '@/utils/motion';

function Navbar() {
  return (
    <motion.nav variants={navVariants} initial='hidden' whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-6 h-6" />
        <h2 className="text-2xl font-extrabold leading-[30px] text-white">
          METAVERSE
        </h2>
        <img src="./menu.svg" alt="menu" className="w-6 h-6" />
      </div>
    </motion.nav>
  )
}

export default Navbar;
