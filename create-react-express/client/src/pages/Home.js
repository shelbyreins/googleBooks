import React, {Component} from "react";
import ButtonAppBar from "./../components/Navbar";
import Jumbotron from "./../components/Jumbotron";
// import Search from "./../components/Search";
// import Card from "./../components/Card";


class Home extends Component {
    render() {
        return (
            <div>
            <ButtonAppBar />

            <br />

            <Jumbotron />
            </div>
        );
    }
}

export default Home;