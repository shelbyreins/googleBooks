import React, {Component} from "react";
import Jumbotron from "./../components/Jumbotron";
import API from "../utils/API";
import SaveList from "./../components/SaveList";

class Saved extends Component {

    state={
        bookData:[]
    };

    componentDidMount(){
        API.getBooks()
        .then(res=> this.setState({bookData: res.data}))
        .catch(err => console.log(err))
    }

    // Deletes a book from the database with a given id, then reloads books from the db
    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
    };
  
    render() {
        // console.log("bookData: " + )
        return (
            <div>
                
                <Jumbotron backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books for Interest</h2>
                </Jumbotron >

                <SaveList bookData={this.state.bookData} handleDeleteButton={this.handleDeleteButton}/>
            </div>
        );
    }
}

export default Saved;


