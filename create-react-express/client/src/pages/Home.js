import React, {Component} from "react";
import ButtonAppBar from "./../components/Navbar";
import FullWidthGrid from "./../components/Jumbotron"
import Search from "./../components/Search";
// import Search from "./../components/Search";
// import Card from "./../components/Card";


class Home extends Component {
    render() {
        return (
            <div>
            <ButtonAppBar />

            <br />

            <FullWidthGrid />

            
            <Search/>
            </div>
        );
    }
}

export default Home;