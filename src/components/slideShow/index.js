import React from "react";
import uuid from "uuid";
import Badge from "../badge";
import Slide from "./slide";

class SlideShow extends React.Component {
  
  constructor(props) {
    super(props);
    let stateObj = { currentSlide: 0 };
    for (let i = 0; i < props.slides.length; i++) {
      i === 0 ? (stateObj[i] = "show") : (stateObj[i] = "none");
    }
    this.state = stateObj;
  }

  componentDidMount() {
    if (this.props.automatic) {
      this.countdown = setInterval(() => {
        if (this.state.currentSlide < this.props.slides.length - 1) {
          this.onSlideIndicatorClick(this.state.currentSlide + 1);
        } else {
          this.onSlideIndicatorClick(0);
        }
      }, this.props.timeOut);
    }
  }

  componentWillUnmount() {
    if (this.countdown) {
      clearInterval(this.countdown);
    }
  }

  onSlideIndicatorClick = i => {
    let updateState = { currentSlide: i };
    for (let i = 0; i < this.props.slides.length; i++) {
      updateState[i] = "none";
    }
    updateState[i] = "show";
    this.setState(updateState);
  };

  onIndicatorButtonClick(i) {
    if (
      this.state.currentSlide > 0 ||
      this.state.currentSlide < this.props.slides.length - 1
    ) {
      this.onSlideIndicatorClick(this.state.currentSlide + i);
    }
  }

  render() {
    const { className, slides } = this.props;
    return (
      <div
        className={"w3-content w3-display-container w3-responsive " + className}
      >
        {slides.map((_, i) => {
          return <Slide json={_} key={uuid.v4()} className={this.state[i]} />;
        })}
        <div className="w3-center  w3-display-bottommiddle w3-responsive">
          {slides.map((_, i) => {
            return (
              <Badge
                key={uuid.v4()}
                className=" w3-transparent w3-hover-white "
                onClick={e => {
                  this.onSlideIndicatorClick(i);
                }}
              />
            );
          })}
        </div>

        <button
          disabled={this.state.currentSlide === 0}
          className="w3-button w3-display-left slide-indicator"
          onClick={() => this.onIndicatorButtonClick(-1)}
        >
          &#10094;
        </button>
        <button
          disabled={this.state.currentSlide === this.props.slides.length - 1}
          className="w3-button w3-display-right slide-indicator"
          onClick={() => this.onIndicatorButtonClick(1)}
        >
          &#10095;
        </button>
      </div>
    );
  }
}

export default SlideShow;
