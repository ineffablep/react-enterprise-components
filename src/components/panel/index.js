import React from "react";
 /**
  *  <Panel panelText="dfadfa" className="w3-red"/>
  */
const Panel = ({ className, panelText }  ) => {
  return (
    <div className={"w3-panel w3-theme " + className}>
      <p>
        {panelText}
      </p>
    </div>
  );
};

export default Panel;
