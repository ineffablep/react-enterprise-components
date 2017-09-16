import React from "react";
import uuid from "uuid";
const NumberStats = props => {
  const { className, content } = props;
  return (
    <div className={"w3-row w3-center w3-padding-16 " + className}>
      {content.map(_ => {
        return (
          <div
            className={"w3-quarter w3-section " + _.className}
            key={uuid.v4()}
          >
            <span className="w3-xlarge">
              {_.number + "+"}
            </span>
            <br />
            {_.text}
          </div>
        );
      })}
    </div>
  );
};

export default NumberStats;
