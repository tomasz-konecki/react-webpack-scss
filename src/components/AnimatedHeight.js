import React, { Component } from "react";
import "./AnimatedHeight.scss";

class AnimatedHeight extends Component {
  state = {
    rectangleClass: "",
    iconDirection: "right"
  };

  handleClick = () => {
    let rectangleClass =
      this.state.rectangleClass === "extended" ? "" : "extended";
    let iconDirection = this.state.iconDirection === "right" ? "down" : "right";
    this.setState({
      rectangleClass,
      iconDirection
    });
  };

  render() {
    let direction = this.state.iconDirection;
    return (
      <div className="container">
        <div className="icon" onClick={this.handleClick}>
          <i className={`fas fa-angle-${direction}`} />
        </div>
        <div className={["rectangle", this.state.rectangleClass].join(" ")}>
          <p>
            Proident irure cillum consequat magna nulla irure aliqua minim sit.
            Ex aute magna in minim excepteur labore aliqua amet aliquip minim do
            fugiat occaecat ad. Lorem proident amet ea eu voluptate do laborum
            laborum culpa occaecat. Consequat eu laborum aliqua esse duis elit
            anim excepteur laborum nulla voluptate. Qui minim veniam labore enim
            minim ex consectetur ex fugiat excepteur adipisicing. Ipsum velit
            sint sunt in.
          </p>
        </div>
        <br />
        <div className="icon" onClick={this.handleClick}>
          <i className={`fas fa-angle-${direction}`} />
        </div>
        <div className={["rectangle", this.state.rectangleClass].join(" ")}>
          <p>
            Proident irure cillum consequat magna nulla irure aliqua minim sit.
            Ex aute magna in minim excepteur labore aliqua amet aliquip minim do
            fugiat occaecat ad. Lorem proident amet ea eu voluptate do laborum
            laborum culpa occaecat. Consequat eu laborum aliqua esse duis elit
            anim excepteur laborum nulla voluptate. Qui minim veniam labore enim
            minim ex consectetur ex fugiat excepteur adipisicing. Ipsum velit
            sint sunt in.
          </p>
        </div>
      </div>
    );
  }
}

export default AnimatedHeight;
