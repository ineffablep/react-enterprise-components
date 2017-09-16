import React from "react";
import { NavLink } from "react-router-dom";
var RenderNavLink = function RenderNavLink(_ref) {
  var link = _ref.link,
      onClick = _ref.onClick;
  var path = link.path,
      text = link.text,
      className = link.className,
      activeClassName = link.activeClassName;

  return React.createElement(
    NavLink,
    {
      to: path,
      onClick: onClick,
      activeClassName: "w3-active " + activeClassName,
      className: "w3-button w3-bar-item " + className
    },
    text
  );
};

export default RenderNavLink;