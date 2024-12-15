'use client'
import { motion } from "framer-motion";

type props = {
    text: string 
}
const MainText = ({text}:props) => {   

  return (
        <motion.div
            initial={{ y: 300}}
            animate={{ y: 0}}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.5, }}
            className="col-start-7 col-span-5 row-start-3 row-span-2"
        >
            <p className="text-2xl font-bold leading-none">
                <span className="bg-white text-black my-3">{text}</span>
            </p>
        </motion.div>
  );
};

export default MainText;
