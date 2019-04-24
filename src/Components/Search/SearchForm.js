import React from 'react';
import TextInput from '../common/TextInput';

export default function SearchForm({value, handleChange, handleSubmit, error }) {    
    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
            <TextInput
                name="url"
                label="Page URL"
                placeholder="http://www.google.com"
                handleChange={ (e) => handleChange(e) }
                value={ value }
            />
            <button type="sumbit">Search</button>
            { error && <div className="alert alert-danger">{ error }</div> }
        </form>
    );
}