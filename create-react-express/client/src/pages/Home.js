import React, { Component } from "react";
import API from "../utils/API";
import List from "./../components/List";
import Jumbotron from "../components/Jumbotron"
import { Search, FormBtn } from "../components/Search";



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
        console.log("state.search: " + this.state.search);
        API.searchBooks(String(this.state.search))
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            else{
                let results = res.data.items
                results = results.map(result => {
                    result= {
                        key:result.id,
                        id:result.id,
                        title:result.volumeInfo.title,
                        authors:result.volumeInfo.authors,
                        description:result.volumeInfo.description,
                        image:result.volumeInfo.imageLinks.thumbnail,
                        link:result.volumeInfo.infoLink,
                    }
                    // console.log("result: " + JSON.stringify(result));
                    return result;
                })
                this.setState({books: results});
                console.log("state.books: " + JSON.stringify(this.state.books));
    
            }
      })
          .catch(err => this.setState({ error: err.message }));
      };
  
    render() {
        return (
            <div>
                <Jumbotron backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books for Interest</h2>
                </Jumbotron >
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">

                                <Search
                                    name="book"
                                    placeholder="Search"
                                    handleInputChange={this.handleInputChange}
                                >
                                </Search>
                            </div>
                            <div className="col-md-2">
                                <FormBtn handleFormSubmit={this.handleFormSubmit}>
                                    Search
                                </FormBtn>
                            </div>

                        </div>
                       
                            <List books={this.state.books}>
                                 
                            </List>
                        
                        
                    </div>
                </form>

            </div>

        );
    }
}

export default Home;