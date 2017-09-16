// @flow
import React from "react";
import uuid from "uuid";
import { IJson } from "../../types";
import SchemaView from "./schemaView";
import RenderItem from "./renderItem";
const RenderJson = ({ json }: { json: Array<IJson> }) => {
  return (
    <div>
      {json && json.map(_ => {
        return <RenderItem key={uuid.v4()} SchemaView={SchemaView} json={_} />;
      })}
    </div>
  );
};

export default RenderJson;
