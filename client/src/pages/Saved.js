import React, {Component} from "react";
import Hero from "./../components/Hero";
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

    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
    };
  
    render() {
        return (
            <div>
                
                <Hero backgroundImage="./book.jpeg">
                    <h1>Google Book Search</h1>
                    <h2>Saved Books</h2>
                </Hero >

           <br/>
                <div className="container">
                <SaveList bookData={this.state.bookData} handleDeleteButton={this.handleDeleteButton}/>
                </div>
            </div>
        );
    }
}

export default Saved;
