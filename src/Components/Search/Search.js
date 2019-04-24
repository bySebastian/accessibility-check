import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateHtml } from '../../redux/actions/validationActions';
import { bindActionCreators } from 'redux';
import SearchForm from './SearchForm';
import Messages from '../validationMessages/Messages';

class Search extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            url: '',
            error: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value,
            error: null
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateUrl(this.state.url)) {
            this.props.validateHtml(this.state.url);
        } else {
            this.setState({ error: 'No valid URL!' });
        }
    }

    validateUrl(url) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+           // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+   // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+                        // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+                    // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+                           // query string
          '(\\#[-a-z\\d_]*)?$','i');                            // fragment locator
        return !!pattern.test(url);
    }

    render() {
        return (
            <div>
                <SearchForm 
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    value={ this.state.url }
                    error={ this.state.error }
                />
                { this.props.validationMessages.length > 0 &&
                    <Messages 
                        values={ this.props.validationMessages }
                    />
                }
            </div>
        );
    }

}

Search.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    url: PropTypes.string,
};

const mapStateToProps = (state) => ({
    validationMessages:  state.validators
})

const mapDispatchToProps = (dispatch) => ({
    validateHtml: (value) => { dispatch(validateHtml(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);