import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import UserOutput from "../UserOutput";
import UserInput from "../UserInput";
//import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/wIthClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "ab1", name: "Vivek", age: 31 },
      { id: "ab2", name: "Vishu", age: 34 },
      { id: "ab3", name: "Vikas", age: 29 }
    ],
    userName: "vivekState",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js getDerivedStateFromProps]", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   border: "1px solid #eee",
    //   boxShadow: "0 2px 3px #ccc ",
    //   padding: "8px",
    //   cursor: "pointer",
    //   font: "inherit"
    // };
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        {/* <div className="Person">
          <UserInput
            username={this.state.userName}
            change={this.assignmentStateChangeHandler}
          />
          <UserOutput username={this.state.userName} />
          <UserOutput username="Akash" />
        </div> */}
      </Aux>

      // React.createElement(
      //   "div",
      //   null,
      //   React.createElement("h1", { className: "App" }, "Hi, I'm a react App")
      // )
    );
  }
}

export default withClass(App, classes.App);
