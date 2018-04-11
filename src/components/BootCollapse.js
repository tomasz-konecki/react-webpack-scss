import React, { Component } from "react";

class BootCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconDirection: "right"
    };
  }

  handleClick = param => e => {
    console.log("Parameter", param);
    console.log("Event", e);
    let iconDirection = this.state.iconDirection === "right" ? "down" : "right";
    this.setState({
      iconDirection
    });
  };

  render() {
    let direction = this.state.iconDirection;
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <td>Table</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="icon">
                <div onClick={this.handleClick("param")} id="111">
                  <i className={`fas fa-angle-${direction}`} />
                </div>
              </td>
              <td>
                <div className="rectangle">
                  <p>
                    Proident irure cillum consequat magna nulla irure aliqua
                    minim sit. Ex aute magna in minim excepteur labore aliqua
                    amet aliquip minim do fugiat occaecat ad. Lorem proident
                    amet ea eu voluptate do laborum laborum culpa occaecat.
                    Consequat eu laborum aliqua esse duis elit anim excepteur
                    laborum nulla voluptate. Qui minim veniam labore enim minim
                    ex consectetur ex fugiat excepteur adipisicing. Ipsum velit
                    sint sunt in.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="icon">
                <i
                  className={`fas fa-angle-${direction}`}
                  onClick={this.handleClick}
                />
              </td>
              <td>
                <div className="rectangle">
                  <p>
                    Proident irure cillum consequat magna nulla irure aliqua
                    minim sit. Ex aute magna in minim excepteur labore aliqua
                    amet aliquip minim do fugiat occaecat ad. Lorem proident
                    amet ea eu voluptate do laborum laborum culpa occaecat.
                    Consequat eu laborum aliqua esse duis elit anim excepteur
                    laborum nulla voluptate. Qui minim veniam labore enim minim
                    ex consectetur ex fugiat excepteur adipisicing. Ipsum velit
                    sint sunt in.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BootCollapse;
