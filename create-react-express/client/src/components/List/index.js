import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({props}) {
//   return <li className="list-group-item"> {children}</li>;
// }

function List(props) {
  return (
    props.books.map(book => {
      return (
        <div>
          <h1>Title: {book.title}</h1>
          <h1>Authors: {book.authors}</h1>
          <h1>Description: {book.description}</h1>
          <img src={book.image} />
          <button className="btn">
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </button>
         
        </div>
      );
    })
  );
}

export default List;

