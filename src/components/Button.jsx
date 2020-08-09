import React from 'react';

export const Button = (props) => {

    const {
        customClassName,
        context
    } = props;

    return (
        <div className={`button-item placeholder-btn-field ${customClassName}`} onClick={props.onClick}>
            <p>{context}</p>
        </div>
    )
}