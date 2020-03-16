import React from 'react';

class QueryForm extends React.Component {

    render() {
        return (
            <div>
                <form className="query-form" onSubmit={this.props.handleSearch}>
                    <label> Enter Search Query:
                        <input type="text" onChange={this.props.handleChange}placeholder="title/author/subject"/>
                        <input readOnly type="text" value="X" onClick={this.props.handleClear}/>
                       
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    };
}

export default QueryForm;