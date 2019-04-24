import React from 'react';
import * as types from '../../redux/actions/actionTypes';

function SimpleMessage({ type, description, example }) {
    return (
        <div className="card card-primary">
            <div className="card-header">
                <h2>{ type }</h2>
            </div>
            <div className="card-body">
                <p>{ description }</p>
                <pre>
                    <code>
                        {example}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default function Messages({ values }) {

    const messages = [];

    values.map( action => {
        switch(action.type) {
            case types.VALIDATE_HTML:
                
                action.value.messages.map( (message, key) => {
                    messages.push(
                        <SimpleMessage
                            key={key}
                            type={message.type}
                            description={message.message}
                            example={message.extract}
                        />
                    );
                })
                
                break;
            default:
                messages.push(<div>No messages available. Sorry, something went wrong!</div>)
                break;
        }
    })

    return (
        <div>{messages}</div>
    );
}