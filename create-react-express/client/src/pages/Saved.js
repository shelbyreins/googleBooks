import React, {Component} from "react";
import Jumbotron from "./../components/Jumbotron";
// import Card from "./../components/Card";


class Home extends Component {
    render() {
        return (
            <div>
                
                <Jumbotron backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books for Interest</h2>
                </Jumbotron >
            </div>
        );
    }
}

export default Home;