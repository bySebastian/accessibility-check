import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({name, label, handleChange, placeholder, value}) {
    
    let wrapperClass = 'form-group';

    return (
        <div className={ wrapperClass }>
            <label htmlFor={ name }>{ label }</label>
            <div className="field">
                <input
                    type="text"
                    id={ name }
                    name={ name }
                    className="form-control"
                    placeholder={ placeholder }
                    defaultValue={ value }
                    onChange={ (e) => handleChange(e) }
                />
            </div>
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
}