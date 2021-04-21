import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//Elements
import Button from "./Button";

const variants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.3, delay: custom * 0.1 },
  }),
  exit: (custom) => ({
    opacity: 0,
    transition: { duration: 0.3, delay: custom * 0.1 },
  }),
};

const Dropdown = ({ children, text, Icon, disabled, id, custom }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div id={id || "dropdown"} className={disabled ? "dropdown disabled" : "dropdown"}>
      <Button
        onClick={handleDropdown}
        id="main-button"
        text={text}
        Icon={Icon}
        custom={custom || 1}
      />
      <AnimatePresence exitBeforeEnter>
        {dropdownOpen && (
          <motion.div
            variants={variants}
            custom={1}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="drop-items"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
