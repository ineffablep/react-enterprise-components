import React from "react";
import RenderJson from "../renderJson/renderItem";
import SchemaView from "../renderJson/schemaView";
import uuid from "uuid";
var Footer = function Footer(props) {
  var className = props.className,
      children = props.children;

  return React.createElement(
    "footer",
    { className: "w3-footer " + className },
    children && children.map(function (_) {
      return React.createElement(RenderJson, { key: uuid.v4(), SchemaView: SchemaView, json: _ });
    })
  );
};

export default Footer;