function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import uuid from "uuid";
import Img from "react-image";

var RenderItem = function RenderItem(_ref) {
  var SchemaView = _ref.SchemaView,
      json = _ref.json;

  var component = json.component,
      rest = _objectWithoutProperties(json, ["component"]);

  if (component === "Image") {
    return React.createElement(Img, Object.assign({ key: uuid.v4() }, rest));
  }
  return React.createElement(
    "div",
    { key: uuid.v4() },
    SchemaView.parseSchema(json)
  );
};

export default RenderItem;