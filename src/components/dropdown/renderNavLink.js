import React from "react";
import { NavLink } from "react-router-dom";
const RenderNavLink = ({ link, onClick }) => {
  const { path, text, className, activeClassName } = link;
  return (
    <NavLink
      to={path}
      onClick={onClick}
      activeClassName={"w3-active " + activeClassName}
      className={"w3-button w3-bar-item " + className}
    >
      {text}
    </NavLink>
  );
};

export default RenderNavLink;
