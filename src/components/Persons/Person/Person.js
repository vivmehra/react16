import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/wIthClass";

import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("Something went wrong");
  // }

  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering..");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log in</p>
        )}

        <p onClick={this.props.click}>
          I'am a {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
