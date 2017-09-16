function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import RenderItem from "../renderJson/renderItem";
import SchemaView from "../renderJson/schemaView";
import uuid from "uuid";
import { IJson } from "../../types";

var Slide = function Slide(_ref) {
  var json = _ref.json,
      className = _ref.className;

  var content = json.content,
      rest = _objectWithoutProperties(json, ["content"]);

  return React.createElement(
    "div",
    {
      className: "w3-display-container w3-slides " + className,
      key: uuid.v4()
    },
    React.createElement(RenderItem, { json: rest, SchemaView: SchemaView }),
    content && content.map(function (_) {
      return React.createElement(RenderItem, { key: uuid.v4(), json: _, SchemaView: SchemaView });
    })
  );
};

export default Slide;