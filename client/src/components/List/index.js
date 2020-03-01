import React from "react";
import "./style.css";
import Button from "../Btn"

function List(props) {
  return (
    props.books.map(book => {
      return (

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-2 col-sm-7 col-xs-2">
              <img src={book.image} style= {{width:"100%"}} alt="bookImg"/>
              </div>
              <div className="col-lg-7 col-sm-11 col-xs-9">
                <h3>{book.title}</h3>
                <p>{book.authors}</p>
                <p>{book.description.substring(0,200)}... 
                </p>

                <Button className="saveBtn"  id={book.id} onClick={(event) => props.handleSavedButton(event)}>Save</Button>
                <Button>
                <a className="viewBtn" href={book.link} target="_blank" rel="noopener noreferrer">
                View
                   </a>
                </Button>

              </div>
            </div>
          </div>
        </div>

      );
    })
  );
}

export default List;

