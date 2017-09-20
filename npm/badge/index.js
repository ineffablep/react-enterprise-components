import React from "react";

var Badge = function Badge(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      className = _ref.className;

  return React.createElement(
    "span",
    { className: "w3-badge w3-border " + className, onClick: onClick },
    " ",
    text,
    " "
  );
};

export default Badge;