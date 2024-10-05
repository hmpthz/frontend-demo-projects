import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from '@/utils/motion';
import { socials } from "@/constants";

function Footer() {
  return (
    <motion.footer variants={footerVariants}
      initial='hidden' whileInView='show'
      className={`${styles.paddings} py-8 relative`}>

      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto`}>

        <div className="text-white flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold text-[44px] md:text-[64px]">Enter the Metaverse </h4>
          <button type="button" className="py-4 px-6 bg-[#25618b] rounded-[32px]">
            <img src="./headset.svg" className="inline-block w-[24px] h-[24px] align-bottom" />
            <span className="font-normal text-[16px] ml-3">ENTER METAVERSE</span>
          </button>
        </div>

        <div className="mt-8">
          <div className="h-0.5 mb-[50px] bg-white opacity-10" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">METAVERSE</h4>
            <p className="font-normal text-[14px] text-secondary-white">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div className="">
              {socials.map((item, i) => (
                <img key={item.name} src={item.url} alt={item.name}
                  className="inline-block w-[24px] h-[24px] cursor-pointer mx-2" />
              ))}
            </div>
          </div>
        </div>
      </div>

    </motion.footer>
  );
}

export default Footer;
