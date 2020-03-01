import React from "react";
import "./style.css";
import Button from "../Btn"

function SaveList(props) {
  return (
    props.bookData.map(bookData => {
      return (

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className=" col-lg-2 col-sm-7 col-xs-2">
                <img src={bookData.image} style= {{width:"100%"}} alt="bookImg"/>
              </div>
              <div className="col-lg-7 col-sm-11 col-xs-9">
                <h3>{bookData.title}</h3>
                <p>{bookData.authors}</p>
                <p>{bookData.description.substring(0,200)}... 
                </p>

              <p>
                {bookData.id}
              </p>
                <Button className="deleteBtn" id={bookData._id} onClick={(event) => props.handleDeleteButton(bookData._id)}>Delete</Button>
                
                <Button >
                <a className="viewBtn" href={bookData.link} target="_blank" rel="noopener noreferrer">
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

export default SaveList;

