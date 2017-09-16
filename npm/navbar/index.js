var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Img from "react-image";
import RenderNavLink from "../dropdown/renderNavLink";
import Dropdown from "../dropdown";
import uuid from "uuid";

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.toggleNavbar = _this.toggleNavbar.bind(_this);
    _this.state = {
      mobileNavClass: "none"
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "toggleNavbar",
    value: function toggleNavbar(e) {
      e.preventDefault();
      var mobileNavClass = this.state.mobileNavClass === "none" ? "show" : "none";
      this.setState({
        mobileNavClass: mobileNavClass
      });
    }
  }, {
    key: "renderToggleNav",
    value: function renderToggleNav(toggleNav) {
      if (!toggleNav) {
        toggleNav = { className: "", title: "", icon: "" };
      }
      var _toggleNav = toggleNav,
          className = _toggleNav.className,
          title = _toggleNav.title,
          icon = _toggleNav.icon;

      return React.createElement(
        "a",
        {
          className: "w3-bar-item w3-button w3-hide-large w3-right " + className,
          onClick: this.toggleNavbar,
          title: title ? title : "Toggle Navigation Menu"
        },
        icon ? React.createElement(
          "i",
          { className: icon },
          " "
        ) : React.createElement(
          "span",
          null,
          " \u2630 Menu"
        )
      );
    }
  }, {
    key: "renderLogo",
    value: function renderLogo(logo) {
      if (!logo) {
        logo = { link: "/", image: null, textClassName: "" };
      }
      var _logo = logo,
          link = _logo.link,
          image = _logo.image,
          textClassName = _logo.textClassName;


      return React.createElement(
        Link,
        {
          to: link.path ? link.path : "/",
          className: "w3-bar-item w3-button w3-wide w3-padding w3-logo-link " + link.className
        },
        image ? React.createElement(Img, image) : "",
        link.text ? React.createElement(
          "span",
          { className: textClassName },
          link.text
        ) : ""
      );
    }
  }, {
    key: "renderLinks",
    value: function renderLinks(links) {
      return links.map(function (link) {
        if (!link.hiddenNav) {
          if (link.children && link.children.length > 0) {
            return React.createElement(Dropdown, { link: link, key: uuid.v4() });
          } else {
            return React.createElement(RenderNavLink, { link: link, key: uuid.v4() });
          }
        }
        return null;
      });
    }
  }, {
    key: "renderNavLinks",
    value: function renderNavLinks(navLinks, pullClass) {
      var className = navLinks.className,
          links = navLinks.links;

      return React.createElement(
        "div",
        {
          className: "w3-hide-small w3-hide-medium " + pullClass + " " + className
        },
        this.renderLinks(links)
      );
    }
  }, {
    key: "renderMobileNav",
    value: function renderMobileNav(links) {
      var navbarCloseButtonClassName = links.navbarCloseButtonClassName,
          mobileNavClassName = links.mobileNavClassName,
          leftLinks = links.leftLinks,
          rightLinks = links.rightLinks;

      var navLinks = [];
      if (leftLinks && leftLinks.links) {
        navLinks.concat.apply(navLinks, _toConsumableArray(leftLinks.links));
      }
      if (rightLinks && rightLinks.links) {
        navLinks.concat.apply(navLinks, _toConsumableArray(rightLinks.links));
      }
      return React.createElement(
        "nav",
        {
          className: "w3-sidebar w3-bar-block  w3-card-2 w3-animate-left w3-hide-medium w3-hide-large " + mobileNavClassName + " " + this.state.mobileNavClass
        },
        React.createElement(
          "a",
          {
            onClick: this.toggleNavbar,
            className: "w3-bar-item w3-button w3-large w3-padding-16 " + navbarCloseButtonClassName
          },
          "Close \xD7"
        ),
        this.renderLinks(navLinks)
      );
    }
  }, {
    key: "renderDesktopNav",
    value: function renderDesktopNav(links) {
      var navbarClassName = links.navbarClassName,
          toggleNav = links.toggleNav,
          logo = links.logo,
          leftLinks = links.leftLinks,
          rightLinks = links.rightLinks;

      return React.createElement(
        "div",
        { className: "w3-bar " + navbarClassName, id: "topNavbar" },
        this.renderToggleNav(toggleNav),
        this.renderLogo(logo),
        leftLinks && this.renderNavLinks(leftLinks, "w3-left"),
        rightLinks && this.renderNavLinks(rightLinks, "w3-right")
      );
    }
  }, {
    key: "render",
    value: function render() {
      var links = this.props.links;

      return React.createElement(
        "header",
        { className: "w3-row" },
        links && this.renderDesktopNav(links),
        links && this.renderMobileNav(links)
      );
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  links: PropTypes.object.isRequired
};
export default Navbar;