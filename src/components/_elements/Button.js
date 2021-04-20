import React from "react";

const Button = ({ id, Icon, text, alt }) => {
  return (
    <div id={id} className={alt ? "button alt" : "button"}>
      {Icon && <Icon />}
      {text}
    </div>
  );
};

export default Button;
