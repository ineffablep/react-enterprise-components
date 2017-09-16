import React from "react";
import Progress from "../progress";
import uuid from "uuid";

const PercentageStats = props => {
  const { heading, content, className } = props;
  return (
    <div className={"w3-container p128-16" + className}>
      <p className="w3-large w3-center w3-padding-16">
        {heading}
      </p>
      {content.map(_ => {
        return <Progress key={uuid.v4()} {..._} />;
      })}
    </div>
  );
};

export default PercentageStats;
