import React from "react";

const BootTest = () => {
	return (
		<div>
			<h1>
				Example heading <span className="badge badge-secondary">New</span>
			</h1>

			<div className="container box-1">
				<h2>Fixed container</h2>
			</div>
			<div className="fluid-container box-2">
				<h2>Fixed container</h2>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">Column 1</div>
					<div className="col-sm">Column 1</div>
					<div className="col-sm">Column 1</div>
					<div className="col-sm">Column 1</div>
				</div>
			</div>
			<code>&lt;section&gt;</code>
			<code>&lt;section&gt;</code>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default BootTest;
