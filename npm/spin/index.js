import React from 'react';

var Spin = function Spin(_ref) {
    var className = _ref.className;
    return React.createElement(
        "div",
        { className: "w3-display-container", style: { zIndex: 1 } },
        React.createElement(
            "div",
            { className: "w3-padding w3-display-middle" },
            React.createElement("i", { className: "fa fa-spin fa-spinner fa-3x " + className })
        )
    );
};

export default Spin;