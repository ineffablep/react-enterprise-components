import React from "react";
import uuid from "uuid";
import SchemaView from "./schemaView";
import RenderItem from "./renderItem";
const RenderJson = ({ json }) => {
  return (
    <div>
      {json && json.map(_ => {
        return <RenderItem key={uuid.v4()} SchemaView={SchemaView} json={_} />;
      })}
    </div>
  );
};

export default RenderJson;
