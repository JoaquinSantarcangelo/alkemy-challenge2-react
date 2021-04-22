import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeInOut", delay: 0.5 } },
  exit: { opacity: 0 },
};

const variantsContainer = {
  hidden: { maxHeight: "1vh" },
  visible: {
    maxHeight: "32vh",
    transition: { ease: "easeInOut", when: "beforeChildren" },
  },
  exit: { height: "20vh" },
};

const Hero = () => {
  return (
    <motion.div
      variants={variantsContainer}
      initial="hidden"
      animate={"visible"}
      exit="exit"
      className="section"
      id="hero"
    >
      <div className="container">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="title"
        >
          Client Title
        </motion.h1>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="background-image"
        onLoad
      ></motion.div>
    </motion.div>
  );
};

export default Hero;
