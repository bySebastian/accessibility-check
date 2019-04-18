import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as validationActions from '../../redux/actions/validationActions';
import { bindActionCreators } from 'redux';

class Search extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            siteUrl: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ siteUrl: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateUrl(this.state.siteUrl)) {
            this.props.actions.validateHtml(this.state.siteUrl);
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

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="siteUrl">Page URL</label>
                <input 
                    type="text" 
                    id="siteUrl" 
                    name="siteUrl" 
                    placeholder="https://www.google.com" 
                    defaultValue={ this.state.siteUrl } 
                    onChange={ this.handleInputChange }
                />
                <button type="sumbit">Search</button>
            </form>
        );
    }

}

Search.propTypes = {
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    siteUrl: PropTypes.string,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        siteUrl:  state.siteUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(validationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);