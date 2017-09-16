import React from "react";
const Progress = props => {
  const { icon, text, percent, className } = props;
  const style = {
    width: percent + "%"
  };
  return (
    <div className="w3-container">
      <p className="w3-wide">
        <i className={icon} /> {text}
      </p>
      <div className="w3-light-grey">
        <div
          className={
            "w3-container w3-padding-small w3-center " + className
          }
          style={style}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default Progress;
