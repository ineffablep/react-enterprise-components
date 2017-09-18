//@flow
import React from "react";
import uuid from "uuid";
import Img from "react-image";

const RenderItem = ({ SchemaView, json }) => {
  const { component, ...rest } = json;

  if (component === "Image") {
    return <Img key={uuid.v4()} {...rest} />;
  }
  return (
    <div key={uuid.v4()}>
      {SchemaView.parseSchema(json)}
    </div>
  );
};

export default RenderItem;
