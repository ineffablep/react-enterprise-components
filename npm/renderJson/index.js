import React from "react";
import uuid from "uuid";
import { IJson } from "../../types";
import SchemaView from "./schemaView";
import RenderItem from "./renderItem";
var RenderJson = function RenderJson(_ref) {
  var json = _ref.json;

  return React.createElement(
    "div",
    null,
    json && json.map(function (_) {
      return React.createElement(RenderItem, { key: uuid.v4(), SchemaView: SchemaView, json: _ });
    })
  );
};

export default RenderJson;