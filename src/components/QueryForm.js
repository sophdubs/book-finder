import React from 'react';

class QueryForm extends React.Component {

    constructor() {
        super();
        this.state = {
            searchParam: 'null'
        }
    }
    handleSearch = (e) => {
        e.preventDefault();
        console.log('searching');
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
                <form className="query-form" onSubmit={this.handleSearch}>
                    <label> Enter Search Query:
                        <input type="text" onChange={this.handleChange}placeholder="title/author/subject"/>
                        <input readOnly type="text" value="X" onClick={this.handleClear}/>
                       
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    };
}

export default QueryForm;