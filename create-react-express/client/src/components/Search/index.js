import React from "react";
import "./style.css";

export function Search(props) {
    return (
        <div className="form-group" >
            <input className="form-control" type="text" {...props} />
        </div>
    )
}

export function FormBtn(props) {
    return (
      <button {...props} className="btn btn-success">
        {props.children}
      </button>
    );
  }

