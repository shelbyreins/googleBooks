import React, { Component } from "react";
import API from "../utils/API";
import { Search, FormBtn } from "../components/Search";
import Jumbotron from "../components/Jumbotron"



class Home extends Component {
    state = {
        title: "",
        author: [],
        description: "",
        image: "",
        link: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
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
                                >
                                </Search>
                            </div>
                            <div className="col-md-2">
                                <FormBtn
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                >
                                    Search
                                </FormBtn>
                            </div>




                        </div>
                    </div>
                </form>

            </div>

        );
    }
}

export default Home;