var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
/**
 * <Alert alertText="dfadfa" className="w3-red"/>
 * @param {*} param0 
 */

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.onCloseClick = _this.onCloseClick.bind(_this);
    _this.state = {
      toggleClass: "show"
    };
    return _this;
  }

  _createClass(Alert, [{
    key: "onCloseClick",
    value: function onCloseClick() {
      this.setState({
        toggleClass: "none"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          alertText = _props.alertText,
          className = _props.className;

      className = className || ' w3-theme ';
      return React.createElement(
        "div",
        { className: "w3-panel " + this.state.toggleClass + " " + className },
        React.createElement(
          "span",
          {
            className: "w3-button w3-large  w3-right",
            onClick: this.onCloseClick
          },
          "\xD7"
        ),
        React.createElement(
          "p",
          null,
          alertText
        )
      );
    }
  }]);

  return Alert;
}(React.Component);

export default Alert;