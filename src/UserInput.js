import React from "react";

const userinput = props => {
  const style = {
    backgroundColor: "lightblue",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc ",
    padding: "8px",
    font: "inherit"
  };
  return (
    <input
      style={style}
      type="text"
      onChange={props.change}
      value={props.username}
    />
  );
};
export default userinput;
