import React from "react";
import uuid from "uuid";
import RenderNavLink from "./renderNavLink";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownClick = this.dropdownClick.bind(this);
    this.updateDropdownClass = this.updateDropdownClass.bind(this);
    
    this.state = {
      dropdownClass: "none"
    };
  }

  dropdownClick(e) {
    e.preventDefault();
    this.updateDropdownClass();
  }

  updateDropdownClass() {
    let dropdownClass = this.state.dropdownClass === "none" ? "show" : "none";
    this.setState({
      dropdownClass: dropdownClass
    });
  }
  render() {
    const { link } = this.props;
    return (
      <div className="w3-dropdown-click">
        <a
          onClick={this.dropdownClick}
          className={"w3-button " + link.className}
        >
          {link.text} <i className="fa fa-caret-down" />
        </a>
        <div
          className={
            "w3-dropdown-content w3-bar-block mobile-nav " +
            this.state.dropdownClass
          }
        >
          {link.children.map(sublink => {
            return (
              <RenderNavLink
                key={uuid.v4()}
                link={sublink}
                onClick={this.updateDropdownClass}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dropdown;
