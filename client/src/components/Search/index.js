import React from "react";
import "./style.css";

export function Search(props) {
    return (
        <div className="form-group" >
            <input className="form-control" type="text" value={props.search} onChange={props.handleInputChange} />
        </div>
    )
}

export function FormBtn(props) {
    return (
      <button className="btn btn-success" id="searchBtn" onClick={props.handleFormSubmit}>
        {props.children}
      </button>
    );
  }