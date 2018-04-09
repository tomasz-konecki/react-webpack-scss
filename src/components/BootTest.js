import React from "react";

const BootTest = () => {
	return (
		<div className="container">
			<div className="row mt-2">
				<div className="panel panel-default">
					<div className="panel-heading col-12">
						{/* <a className="btn btn-primary" href="#buttons" data-toggle="collapse">
							Toggle menu
						</a> */}
						<button className="btn btn-primary" data-target="#buttons" data-toggle="collapse">
							Toggle menu
							<i className="fa fa-filter" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<div className="panel-body collapse" id="buttons">
				<div className="row mt-2">
					<div className="col-4">
						<button className="btn btn-success">Success</button>
					</div>
					<div className="col-4">
						<button className="btn btn-warning">Warning</button>
					</div>
					<div className="col-4">
						<button className="btn btn-danger">Danger</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BootTest;
