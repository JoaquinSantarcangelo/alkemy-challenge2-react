import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { y: -30, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, delay: 2 + custom * 0.1 || 0 },
  }),
  exit: (custom) => ({
    y: -30,
    opacity: 0,
    transition: { delay: custom * 0.1 || 0 },
  }),
};

const Button = ({ id, Icon, text, alt, onClick, custom }) => {
  return (
    <motion.div
      variants={variants}
      custom={custom}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => onClick && onClick()}
      id={id}
      className={alt ? "button alt" : "button"}
    >
      {Icon && <Icon />}
      <div className="text">{text}</div>
    </motion.div>
  );
};

export default Button;
