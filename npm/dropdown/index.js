var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import uuid from "uuid";
import RenderNavLink from "./renderNavLink";

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.dropdownClick = _this.dropdownClick.bind(_this);
    _this.updateDropdownClass = _this.updateDropdownClass.bind(_this);

    _this.state = {
      dropdownClass: "none"
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "dropdownClick",
    value: function dropdownClick(e) {
      e.preventDefault();
      this.updateDropdownClass();
    }
  }, {
    key: "updateDropdownClass",
    value: function updateDropdownClass() {
      var dropdownClass = this.state.dropdownClass === "none" ? "show" : "none";
      this.setState({
        dropdownClass: dropdownClass
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var link = this.props.link;

      return React.createElement(
        "div",
        { className: "w3-dropdown-click" },
        React.createElement(
          "a",
          {
            onClick: this.dropdownClick,
            className: "w3-button " + link.className
          },
          link.text,
          " ",
          React.createElement("i", { className: "fa fa-caret-down" })
        ),
        React.createElement(
          "div",
          {
            className: "w3-dropdown-content w3-bar-block mobile-nav " + this.state.dropdownClass
          },
          link.children.map(function (sublink) {
            return React.createElement(RenderNavLink, {
              key: uuid.v4(),
              link: sublink,
              onClick: _this2.updateDropdownClass
            });
          })
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

export default Dropdown;