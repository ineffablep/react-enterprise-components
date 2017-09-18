import React from "react";
/**
 * <Alert alertText="dfadfa" className="w3-red"/>
 * @param {*} param0 
 */

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.state = {
      toggleClass: "show"
    };
  }
  onCloseClick() {
    this.setState({
      toggleClass: "none"
    });
  }

  render() {
    let { alertText, className } = this.props;
    className = className || ' w3-theme ';
    return (
      <div className={"w3-panel " + this.state.toggleClass + " " + className}>
        <span
          className="w3-button w3-large  w3-right"
          onClick={this.onCloseClick}
        >
          &times;
        </span>
        <p>
          {alertText}
        </p>
      </div>
    );
  }
}

export default Alert;
