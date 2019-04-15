import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // handle submit
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="websiteUrl">Page URL</label>
                <input type="text" id="websiteUrl" name="websiteUrl" placeholder="https://www.google.com" defaultValue={ this.state.value } />
                <button type="sumbit">Search</button>
            </form>
            );
    }

}

export default Search;