import React from "react";
import RenderJson from "../renderJson/renderItem";
import SchemaView from "../renderJson/schemaView";
import uuid from "uuid";
const Footer = props => {
  const { className, children } = props;
  return (
    <footer className={"w3-footer " + className}>
      {children && children.map(_ => {
        return <RenderJson key={uuid.v4()} SchemaView={SchemaView} json={_} />;
      })}
    </footer>
  );
};

export default Footer;
