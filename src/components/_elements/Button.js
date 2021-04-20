import React from "react";

const Button = ({ id, Icon, text, alt, onClick }) => {
  return (
    <div
      onClick={() => onClick(id)}
      id={id}
      className={alt ? "button alt" : "button"}
    >
      {Icon && <Icon />}
      {text}
    </div>
  );
};

export default Button;
