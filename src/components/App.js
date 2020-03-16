import React from 'react';

import QueryForm from "./QueryForm";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchParam: 'null'
        }
    }
    
    handleSearch = (e) => {
        e.preventDefault();
        console.log(this.state.searchParam);
    }

    handleClear = (e) => {
        document.querySelector('.query-form').reset();
    }

    handleChange = (e) => {
        this.setState({searchParam : e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Book Finder</h1>
                <br/>
                <QueryForm handleSearch={this.handleSearch} handleClear={this.handleClear} handleChange={this.handleChange}/>
            </div>
        );
    };
}

export default App;