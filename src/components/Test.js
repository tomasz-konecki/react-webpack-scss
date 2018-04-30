import React from "react";
import axios from "axios";

class Test extends React.Component {

getReport() {
 const API = "http://localhost:55525/Reports/Developers";
 const settings = {
  "teamsSheets": {
    "Zespół.Net 1":1,
    "FrontEnd Olsztyn":1
  }
}
 axios.post(`${API}`, settings).then((response) => {
   console.log(response)
 })

}


render() {
	return (
    <div>
		<h2>Report</h2>
    <button onClick={this.getReport}>Report</button>
    </div>
	)
};
}
export default Test;
