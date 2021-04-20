import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeInOut" } },
  exit: { opacity: 0 },
};

const Button = ({ id, Icon, text, alt, onClick }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => onClick(id)}
      id={id}
      className={alt ? "button alt" : "button"}
    >
      {Icon && <Icon />}
      {text}
    </motion.div>
  );
};

export default Button;
