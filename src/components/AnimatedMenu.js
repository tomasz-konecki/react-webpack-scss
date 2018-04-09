import React, { Component } from "react";
import "./AnimatedMenu.scss";

class AnimatedMenu extends Component {
	state = {
		menuClass: "menu-hidden"
	};

	handleToggle = () => {
		let menuClass = "";
		this.state.menuClass === "menu-hidden" ? (menuClass = "menu-shown") : (menuClass = "menu-hidden");
		this.setState({
			menuClass
		});
	};

	render() {
		return (
			<div className="container-fluid mt-3">
				<div className="row">
					<div className="col-3">
						<div className="row">
							<div className="col-12">
								<h5>Menu</h5>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className={[ "row", this.state.menuClass ].join(" ")}>
							<div className="col-4">
								<button className="btn btn-success">Success</button>
							</div>
							<div className="col-4">
								<button className="btn btn-primary">Primary</button>
							</div>
							<div className="col-4">
								<button className="btn btn-warning">Warning</button>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="row">
							<div className="offset-6 col-6">
								<button className="btn btn-danger" onClick={this.handleToggle}>
									Toggle
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AnimatedMenu;
