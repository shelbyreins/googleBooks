import React from "react";
import "./style.css";

function Form(props) {
  return (
    <form >
      <div className="form-inline" id="searchForm">
        <input className="form-control mr-sm-2"
          id="search"
          type="text"
          name="search"
          placeholder="Book Search"
          value={props.search}
          onChange={props.handleInputChange} />
        <button className="btn btn-success "
          id="searchBtn"
          type="submit"
          onClick={props.handleFormSubmit}>
           Search
        </button>
      </div>
    </form>
  )
}

export default Form
