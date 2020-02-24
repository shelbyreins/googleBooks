import React, { Component } from "react";
import { Search, FormBtn } from "../components/Search";
import Jumbotron from "../components/Jumbotron"



class Home extends Component {
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