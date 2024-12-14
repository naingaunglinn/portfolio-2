'use client'
import { motion } from "framer-motion";

const MainText = () => {
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                straggerChildren: 0.08,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    const line1 = "Naing Aung Linn";
    const line2 = "Programphar";
  return (
    <div>
        <motion.h3
            className="text-white load-screen--message"
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {line1.split("").map((char, index) => {
                return (
                    <motion.span key={`${char}-${index}`} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}
            <br />
            {line2.split("").map((char, index) => {
                return (
                    <motion.span key={`${char}-${index}`} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}
            
        </motion.h3>
    </div>
  );
};

export default MainText;
