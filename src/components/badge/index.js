//@flow
import React from "react";

const Badge = ({
  onClick,
  className
}: {
  onClick: Function,
  className: string
}) => {
  return (
    <span className={"w3-badge w3-border " + className} onClick={onClick} />
  );
};

export default Badge;
