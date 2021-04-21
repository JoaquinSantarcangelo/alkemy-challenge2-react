import { motion } from "framer-motion";
import React from "react";
import ClickAwayListener from "react-click-away-listener";
import CloseButton from "../_elements/CloseButton";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
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
        <div className="card">
          <CloseButton onClick={onClose} />
          {children}
        </div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default Modal;
