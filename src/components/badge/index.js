import React from "react";

const Badge = ({
  text,
  onClick,
  className
}) => {
  return (
    <span className={"w3-badge w3-border " + className} onClick={onClick}> {text} </span>
  );
};

export default Badge;
