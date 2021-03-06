import React from "react";
import RenderItem from "../renderJson/renderItem";
import SchemaView from "../renderJson/schemaView";
import uuid from "uuid";

const Slide = ({ json, className }) => {
  const { content, ...rest } = json;
  return (
    <div
      className={"w3-display-container w3-slides " + className}
      key={uuid.v4()}
    >
      <RenderItem json={rest} SchemaView={SchemaView} />
      {content &&
        content.map(_ => {
          return (
            <RenderItem key={uuid.v4()} json={_} SchemaView={SchemaView} />
          );
        })}
    </div>
  );
};

export default Slide;
