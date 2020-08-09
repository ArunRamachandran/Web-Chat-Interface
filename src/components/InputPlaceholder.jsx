import React, { useState } from 'react';
import { TextField } from './TextField';
import { Button } from './Button';
 
export const InputPlaceholder = (props) => {
    const [userInput, updateText] = useState('');

    const _onChangeHandler = (value) => {
        updateText(value);
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            userInput && props.onClick && props.onClick(userInput);
            updateText('');
        } 
    }

    const _onClickHandler = () => {
        if (userInput && props.onClick) {
            props.onClick(userInput);
            updateText('');
        }
    }

    const {
        placeholder,
        context,
        customBtnClassName
    } = props;

    return (
        <div className="input-placeholder-wrapper">
            <TextField 
                placeholder={placeholder} 
                value={userInput} 
                onChange={_onChangeHandler}
                onKeyDown={_handleKeyDown}
            />
            <Button 
                context={context} 
                customClassName={customBtnClassName} 
                onClick={_onClickHandler}
            />
        </div>
    )
}