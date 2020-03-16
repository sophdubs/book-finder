import React from 'react';

import QueryForm from "./QueryForm";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Book Finder</h1>
                <br/>
                <QueryForm/>
            </div>
        );
    };
}

export default App;