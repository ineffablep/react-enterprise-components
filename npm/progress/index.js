import React from "react";
var Progress = function Progress(props) {
  var icon = props.icon,
      text = props.text,
      percent = props.percent,
      className = props.className;

  var style = {
    width: percent + "%"
  };
  return React.createElement(
    "div",
    { className: "w3-container" },
    React.createElement(
      "p",
      { className: "w3-wide" },
      React.createElement("i", { className: icon }),
      " ",
      text
    ),
    React.createElement(
      "div",
      { className: "w3-light-grey" },
      React.createElement(
        "div",
        {
          className: "w3-container w3-padding-small w3-center " + className,
          style: style
        },
        percent,
        "%"
      )
    )
  );
};

export default Progress;