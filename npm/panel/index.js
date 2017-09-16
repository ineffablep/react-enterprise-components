import React from "react";
/**
 *  <Panel panelText="dfadfa" className="w3-red"/>
 */
var Panel = function Panel(_ref) {
  var className = _ref.className,
      panelText = _ref.panelText;

  return React.createElement(
    "div",
    { className: "w3-panel w3-theme " + className },
    React.createElement(
      "p",
      null,
      panelText
    )
  );
};

export default Panel;