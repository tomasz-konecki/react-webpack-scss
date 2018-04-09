import React from "react";

const ButtonTest = () => {
	function handleClick() {
		console.log("Button clicked!");
	}
	return (
		<div>
			<button className="btn btn-success" onClick={handleClick}>
				Click me
			</button>
		</div>
	);
};

export default ButtonTest;
