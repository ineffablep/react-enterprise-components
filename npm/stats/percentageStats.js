import React from "react";
import Progress from "../progress";
import uuid from "uuid";

var PercentageStats = function PercentageStats(props) {
  var heading = props.heading,
      content = props.content,
      className = props.className;

  return React.createElement(
    "div",
    { className: "w3-container p128-16" + className },
    React.createElement(
      "p",
      { className: "w3-large w3-center w3-padding-16" },
      heading
    ),
    content.map(function (_) {
      return React.createElement(Progress, Object.assign({ key: uuid.v4() }, _));
    })
  );
};

export default PercentageStats;