import React from "react";
import uuid from "uuid";
var NumberStats = function NumberStats(props) {
  var className = props.className,
      content = props.content;

  return React.createElement(
    "div",
    { className: "w3-row w3-center w3-padding-16 " + className },
    content.map(function (_) {
      return React.createElement(
        "div",
        {
          className: "w3-quarter w3-section " + _.className,
          key: uuid.v4()
        },
        React.createElement(
          "span",
          { className: "w3-xlarge" },
          _.number + "+"
        ),
        React.createElement("br", null),
        _.text
      );
    })
  );
};

export default NumberStats;