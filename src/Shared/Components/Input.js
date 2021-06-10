import React from "react";

import "./Input.css";

function Input(props) {
  return (
    <div className="input-div">
      <label className="input-label" for={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        className="input"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
