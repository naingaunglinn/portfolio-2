'use client'
import { HeroText } from "@/type";
import { motion } from "framer-motion";

type props = {
    text: HeroText 
}
const MainText = ({text}:props) => {   

  return (
        <motion.div
            initial={{ y: -200}}
            animate={{ y: 0}}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.5, }}
            className="uppercase  col-start-2 col-end-6 row-start-3 row-span-2"
        >
            <p className="text-5xl font-bold"><span className="bg-white text-black px-2">{text['name']}</span></p>
            <p className="text-xl font-bold my-5"><span className="bg-white text-black px-2">{text['bio']}</span></p>
        </motion.div>
  );
};

export default MainText;
