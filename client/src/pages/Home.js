import React, { Component } from "react";
import API from "../utils/API";
import List from "./../components/List";
import Jumbotron from "../components/Jumbotron"
import Form from "../components/Search";
// import Button from "../components/Btn"

class Home extends Component {
    state = {
        search: "",
        books: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log("state.search: " + this.state.search);
        API.searchBooks(String(this.state.search))
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.key,
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink,
                        }
                        console.log("result: " + JSON.stringify(result));
                        return result;
                    })
                    this.setState({ books: results });
                    // console.log("state.books: " + JSON.stringify(this.state.books));

                }
            })
            .catch(err => this.setState({ error: err.message }));
    };

    handleSavedButton = event => {
        event.preventDefault();
        let bookData = this.state.books.filter(book => book.id === event.target.id);
        bookData = bookData[0];
        API.saveBook(bookData)
            .then(function (data) {
                //call route to save book
                console.log("Book added: " + data);
                alert("added");
            });
    }

    render() {
        return (
            <div>
                <Jumbotron backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books for Interest</h2>
                </Jumbotron >
                <div className="container">
                    <Form
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    >
                    </Form>

                    <br/>

                    <List books={this.state.books} handleSavedButton={this.handleSavedButton}>
                    </List>


                </div>


            </div>

        );
    }
}

export default Home;