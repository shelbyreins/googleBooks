import React from "react";
// import "./style.css";
import Button from "../Btn"

function SaveList(props) {
  return (
    props.bookData.map(bookData => {
      return (

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-2">
                <img src={bookData.image} alt="bookImg"/>
              </div>
              <div className="col-sm-9">
                <h3>{bookData.title}</h3>
                <p>{bookData.authors}</p>
                <p>{bookData.description}</p>


                <Button key={bookData.id} id={bookData._id} onClick={(event) => props.handleDeleteButton(bookData._id)}>Delete</Button>
                
                <Button>
                <a href={bookData.link} target="_blank" rel="noopener noreferrer">
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

