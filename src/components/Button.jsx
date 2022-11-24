import React from "react";
import "./Button.css";

const isOperator = val => {
  return isNaN(val) || val === "." || val === "=";
};

export function Button({val}) {
  return(
  <div className={`button-wrapper ${
      isOperator(val) ? "operator" : null
    }`}
    // onClick={() => props.handleClick(props.children)}
  >
    {val}
  </div>);
}
