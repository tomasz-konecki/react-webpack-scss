import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

let person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

console.log(person.getFullName());

// render(<App />, document.getElementById("app"));
