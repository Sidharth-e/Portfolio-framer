import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { motion,AnimatePresence} from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function home() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const animationVariants = {
    H2hidden: { opacity:0,y: -200},
    H2visible: {opacity:1,y: 0 },
    H3hidden: {opacity:0, scale: 0 },
    H3visible: {opacity:1, scale: 1 },
    Phidden: {opacity:0, scale: 0},
    Pvisible: {opacity:1,scale: 0.9},
    Buttonhidden: { opacity:0,scale: 0 },
    Buttonvisible: { opacity:1,scale: 1 },
    iconhidden: { opacity:0,scale: 1.2, rotate: 360 },
    iconvisible: { opacity:1,scale: 1, rotate: 0 },
    avatarhidden: { opacity:0,scale: 1.2},
    avatarvisible: { opacity:1,scale: 1}
  };
  return (
    <AnimatePresence>
    <motion.div className="type text-center p-15 py-10">
        <motion.h2
          ref={ref}
          variants={animationVariants}
          animate={inView ? "H2visible" : "H2hidden"}
          transition={{
            type:"spring",
            stiffness:400
          }}
          className="text-3xl py-5 text-teal-600 font-medium  dark:text-teal-400 md:text-6xl"
        >
          Hi this is Sidharth E
        </motion.h2>
        <motion.h3
          ref={ref}
          variants={animationVariants}
          animate={inView ? "H3visible" : "H3hidden"}
          transition={{
            type:"spring",
            stiffness:100
          }}
          className="text-2xl py-2 dark:text-white md:text-2xl"
        >
          Full stack developer.
        </motion.h3>
        <motion.p
          ref={ref}
          variants={animationVariants}
          animate={inView ? "Pvisible" : "Phidden"}
          transition={{
            type:"spring",
            stiffness:100
          }}
          className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-left"
        >
          I&apos;m a Full Stack developer. I spend my whole day, practically
          every day experimenting with HTML,CSS,JavaScript and web framework
          dabbling with Python and Asp.net
        </motion.p>
        <div className="mb-10">
          <motion.button
            ref={ref}
            variants={animationVariants}
            animate={inView ? "Buttonvisible" : "Buttonhidden"}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              type:"spring",
              stiffness:100
            }}
          >
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
              href="https://github.com/Sidharth-e/Portfolio/raw/main/public/Sidharth_E_Resume_FullStack.pdf"
              download
            >
              My Resume
            </a>
          </motion.button>
        </div>
        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
          <motion.a
            ref={ref}
            variants={animationVariants}
            animate={inView ? "iconvisible" : "iconhidden"}
            whileHover={{ scale: 1.2, rotate: 40 }}
            whileTap={{
              scale: 0.8,
              rotate: -40,
              borderRadius: "100%",
            }}

            transition={{
              type: "spring",
              stiffness: 200,
            }}
            href="mailto: sidharthe38943@gmail.com"
          >
            <AiFillMail className="rounded-full" />
          </motion.a>
          <motion.a
            ref={ref} 
            variants={animationVariants}
            animate={inView ? "iconvisible" : "iconhidden"}
            whileHover={{ scale: 1.2, rotate: 40 }}
            whileTap={{
              scale: 0.8,
              rotate: -40,
              borderRadius: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            href="https://www.linkedin.com/in/sidharth-e-6057081bb"
          >
            <AiFillLinkedin className="rounded-full" />
          </motion.a>
          <motion.a
            ref={ref} 
            variants={animationVariants}
            animate={inView ? "iconvisible" : "iconhidden"}
            whileHover={{ scale: 1.2, rotate: 40 }}
            whileTap={{
              scale: 0.8,
              rotate: -40,
              borderRadius: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            href="https://www.instagram.com/_sidharth_e_/"
          >
            <AiFillInstagram className="rounded-full" />
          </motion.a>
        </div>
      </motion.div>
      </AnimatePresence>
  );
}
