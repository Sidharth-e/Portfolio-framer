import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import deved from "../public/avatar.png";
import Image from "next/image";

function getexp(date) {
  const today = new Date();
  const joiningdate = new Date(date);
  let exp = today.getFullYear() - joiningdate.getFullYear();
  const monthdiff = today.getMonth() - joiningdate.getMonth();
  if (
    monthdiff < 0 ||
    (monthdiff === 0 && today.getDate() < joiningdate.getDate())
  ) {
    exp--;
  }
  return exp;
}
export default function about(props) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 0.9
    }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const date = "2021-01-18";
  const experience = getexp(date);
  return (
    <AnimatePresence>
    <motion.div
    ref={ref}
    variants={container}
    animate={inView ? "visible" : "hidden"}
    >
      <motion.div
      ref={ref}
      variants={item}
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      style={{background:props.primary}}
        className="mx-auto mb-10 rounded-full w-80 h-80 relative overflow-hidden"
      >
        <Image alt="img" src={deved} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.h3
      ref={ref}
      variants={item}
      style={{color:props.primary}}
      animate={inView ? "visible" : "hidden"}
        className="text-3xl py-1 dark:text-white "
      >
        About me
      </motion.h3>

      <motion.p
      ref={ref}
      variants={item}
      animate={inView ? "visible" : "hidden"}
      style={{color:props.secondary}}
        className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Innovative tech mind with {experience} years of experience working as a
        computer programmer. Capable of working with a variety of technology and
        software solutions, and managing databases. Valuable team member who has
        experience diagnosing problems and developing solutions.Talented person
        with unique ideas and a history of successful contributions in the
        field.
      </motion.p>
    </motion.div>
    </AnimatePresence>
  );
}
