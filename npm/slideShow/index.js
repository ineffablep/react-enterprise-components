var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import uuid from "uuid";
import Badge from "../badge";
import Slide from "./slide";

var SlideShow = function (_React$Component) {
  _inherits(SlideShow, _React$Component);

  function SlideShow(props) {
    _classCallCheck(this, SlideShow);

    var _this = _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).call(this, props));

    _this.onSlideIndicatorClick = function (i) {
      var updateState = { currentSlide: i };
      for (var _i = 0; _i < _this.props.slides.length; _i++) {
        updateState[_i] = "none";
      }
      updateState[i] = "show";
      _this.setState(updateState);
    };

    var stateObj = { currentSlide: 0 };
    for (var i = 0; i < props.slides.length; i++) {
      i === 0 ? stateObj[i] = "show" : stateObj[i] = "none";
    }
    _this.state = stateObj;
    return _this;
  }

  _createClass(SlideShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.automatic) {
        this.countdown = setInterval(function () {
          if (_this2.state.currentSlide < _this2.props.slides.length - 1) {
            _this2.onSlideIndicatorClick(_this2.state.currentSlide + 1);
          } else {
            _this2.onSlideIndicatorClick(0);
          }
        }, this.props.timeOut);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.countdown) {
        clearInterval(this.countdown);
      }
    }
  }, {
    key: "onIndicatorButtonClick",
    value: function onIndicatorButtonClick(i) {
      if (this.state.currentSlide > 0 || this.state.currentSlide < this.props.slides.length - 1) {
        this.onSlideIndicatorClick(this.state.currentSlide + i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          slides = _props.slides;

      return React.createElement(
        "div",
        {
          className: "w3-content w3-display-container w3-responsive " + className
        },
        slides.map(function (_, i) {
          return React.createElement(Slide, { json: _, key: uuid.v4(), className: _this3.state[i] });
        }),
        React.createElement(
          "div",
          { className: "w3-center  w3-display-bottommiddle w3-responsive" },
          slides.map(function (_, i) {
            return React.createElement(Badge, {
              key: uuid.v4(),
              className: " w3-transparent w3-hover-white ",
              onClick: function onClick(e) {
                _this3.onSlideIndicatorClick(i);
              }
            });
          })
        ),
        React.createElement(
          "button",
          {
            disabled: this.state.currentSlide === 0,
            className: "w3-button w3-display-left slide-indicator",
            onClick: function onClick() {
              return _this3.onIndicatorButtonClick(-1);
            }
          },
          "\u276E"
        ),
        React.createElement(
          "button",
          {
            disabled: this.state.currentSlide === this.props.slides.length - 1,
            className: "w3-button w3-display-right slide-indicator",
            onClick: function onClick() {
              return _this3.onIndicatorButtonClick(1);
            }
          },
          "\u276F"
        )
      );
    }
  }]);

  return SlideShow;
}(React.Component);

export default SlideShow;