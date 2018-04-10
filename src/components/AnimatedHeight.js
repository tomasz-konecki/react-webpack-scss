import React, { Component } from "react";
import "./AnimatedHeight.scss";

class AnimatedHeight extends Component {
	state = {
		mangoClass: ""
	};

	handleClick = (e) => {
		let mangoClass = this.state.mangoClass === "extended" ? "" : "extended";
		this.setState({
			mangoClass
		});
	};

	render() {
		return (
			<div className="container">
				<div className="icon" onClick={this.handleClick}>
					>
				</div>
				<div className={[ "mango", this.state.mangoClass ].join(" ")}>
					<p>
						Proident irure cillum consequat magna nulla irure aliqua minim sit. Ex aute magna in minim excepteur labore
						aliqua amet aliquip minim do fugiat occaecat ad. Lorem proident amet ea eu voluptate do laborum laborum
						culpa occaecat. Consequat eu laborum aliqua esse duis elit anim excepteur laborum nulla voluptate. Qui minim
						veniam labore enim minim ex consectetur ex fugiat excepteur adipisicing. Ipsum velit sint sunt in.
					</p>
				</div>
				<br />
				<div className="icon" onClick={this.handleClick}>
					>
				</div>
				<div className={[ "mango", this.state.mangoClass ].join(" ")}>
					<p>
						Proident irure cillum consequat magna nulla irure aliqua minim sit. Ex aute magna in minim excepteur labore
						aliqua amet aliquip minim do fugiat occaecat ad. Lorem proident amet ea eu voluptate do laborum laborum
						culpa occaecat. Consequat eu laborum aliqua esse duis elit anim excepteur laborum nulla voluptate. Qui minim
						veniam labore enim minim ex consectetur ex fugiat excepteur adipisicing. Ipsum velit sint sunt in.
					</p>
				</div>
			</div>
		);
	}
}

export default AnimatedHeight;
