import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";
// render(<App />, document.getElementById("app"));

let person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

let logName = function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------------");
};

let logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["hu", "cz"]);

(function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------------");
}.apply(person, ["pl", "fr"]));

//function borrowing
let person2 = {
  firstname: "Paul",
  lastname: "King"
};

console.log(person.getFullName.call(person2));

//function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 3);
console.log(multiplyByTwo(5));
