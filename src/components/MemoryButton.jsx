import React from "react";
import "./MemoryButton.css";

export const MemoryButton = props => (
  <div className="memory-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);
