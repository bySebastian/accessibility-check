import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            websiteUrl: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ websiteUrl: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateUrl(this.state.websiteUrl)) {
            console.log('url', this.state.websiteUrl);
        } else {
            console.log('No valid URL!')
        }
    }

    validateUrl(url) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+           // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+   // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+                        // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+                    // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+                           // query string
          '(\\#[-a-z\\d_]*)?$','i');                            // fragment locator
        return !!pattern.test(url);
      }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="websiteUrl">Page URL</label>
                <input type="text" id="websiteUrl" name="websiteUrl" placeholder="https://www.google.com" defaultValue={ this.state.websiteUrl } onChange={ this.handleInputChange } />
                <button type="sumbit">Search</button>
            </form>
            );
    }

}

export default Search;