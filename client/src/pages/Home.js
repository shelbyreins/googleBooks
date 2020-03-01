import React, { Component } from "react";
import API from "../utils/API";
import List from "./../components/List";
import Hero from "../components/Hero"
import Form from "../components/Search";

class Home extends Component {
    state = {
        search: "",
        books: [],
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(String(this.state.search))
            .then(res => {
                if (res.data.status === "error") {              
                    let result = [{
                        id: "",
                        title: "",
                        authors: [],
                        description: "",
                        image: "",
                        link: "",
                    }]
                    this.setState({books: result})
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description === undefined ? "No description" : result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks === undefined ? "/NoPhotoAvailable.jpg" : result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink,
                        }
                        return result;
                    })
                    this.setState({ books: results });
                }
            })
            .catch(err => console.log(err));    
        };

    handleSavedButton = event => {
        event.preventDefault();
        let bookData = this.state.books.filter(book => book.id === event.target.id);
        bookData = bookData[0];
        API.saveBook(bookData)
            .then(function (data) {
                alert("Your book has been saved!");
            });
    }

    render() {
        return (
            <div>
                <Hero backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books for Interest</h2>
                </Hero >
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