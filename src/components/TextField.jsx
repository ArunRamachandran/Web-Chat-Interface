import React, { useState } from 'react';

export const TextField = (props) => {

    const {
        placeholder,
        value
    } = props;

    return (
        <div className="message-text-field">
            <input type="text" 
                className="input-text" 
                placeholder={placeholder} 
                value={value}
                onChange={(event) => props.onChange(event.target.value)}
                onKeyDown={(event) => props.onKeyDown && props.onKeyDown(event)}
            />
        </div>
    )
}