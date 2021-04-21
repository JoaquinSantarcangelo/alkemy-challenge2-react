import { motion } from "framer-motion";
import React from "react";
import ClickAwayListener from "react-click-away-listener";
import CloseButton from "../_elements/CloseButton";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

const variantsCard = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: -20, opacity: 0 },
};

const Modal = ({ id, children, onClose }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="modal"
      id={id}
    >
      <ClickAwayListener onClickAway={() => onClose()}>
        <motion.div
          variants={variantsCard}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="card"
        >
          <CloseButton onClick={onClose} />
          {children}
        </motion.div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default Modal;
