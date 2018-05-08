import React, { Component } from "react";
import "./scss/App.scss";
// import Filter from "./components/Filter";
import people from "./data/people";

function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people,
      term: ""
    };
  }

  searchHandler = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    const { term, people } = this.state;
    console.log(term);
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchHandler} />
        </form>
        {people.filter(searchingFor(term)).map(person => (
          <div key={person.id}>
            <div className="person">
              <h6>{person.first}</h6>
              <h6>{person.last}</h6>
              <h6>{person.age}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
