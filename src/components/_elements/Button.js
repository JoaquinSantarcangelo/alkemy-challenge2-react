import React from "react";

const Button = ({ id, Icon, text, drop }) => {
  return (
    <div id={id} className="button">
      {Icon && <Icon />}
      {text}
      
    </div>
  );
};

export default Button;
