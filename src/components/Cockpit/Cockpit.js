import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const btnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      btnRef.current.click();
    }, 1000);
    // btnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanUp work in use");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanUp work in 2nd useEffect");
    };
  });
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button ref={btnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in </button>
    </div>
  );
};

export default React.memo(cockpit);
