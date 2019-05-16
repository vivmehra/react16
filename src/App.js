import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    persons: [
      { id: "ab1", name: "Vivek", age: 31 },
      { id: "ab2", name: "Vishu", age: 34 },
      { id: "ab3", name: "Vikas", age: 29 }
    ],
    userName: "vivekState",
    showPersons: false
  };
  // swithNameHandler = newName => {
  //   //console.log("was clicked");
  //   //Do not do this: this.state.persons[0].name = "testing...";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 31 },
  //       { name: "Vishu", age: 34 },
  //       { name: "Vikas", age: 30 }
  //     ]
  //   });
  // };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const personShown = this.state.showPersons;
    this.setState({ showPersons: !personShown });
  };
  assignmentStateChangeHandler = event => {
    this.setState({ userName: event.target.value });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #ccc ",
      padding: "8px",
      cursor: "pointer",
      font: "inherit"
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p className={classes.join(" ")}>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        {/* <div className="Person">
          <UserInput
            username={this.state.userName}
            change={this.assignmentStateChangeHandler}
          />
          <UserOutput username={this.state.userName} />
          <UserOutput username="Akash" />
        </div> */}
      </div>

      // React.createElement(
      //   "div",
      //   null,
      //   React.createElement("h1", { className: "App" }, "Hi, I'm a react App")
      // )
    );
  }
}

export default App;
