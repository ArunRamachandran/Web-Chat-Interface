import React, { useState } from 'react';
import { TextField } from './TextField';
import { Button } from './Button';
 
export const InputPlaceholder = (props) => {
    const [userInput, updateText] = useState('');

    const _onChangeHandler = (value) => {
        updateText(value);
        props.onChange && props.onChange(value);
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            (userInput || draftMessage) && props.onClick && props.onClick(draftMessage ? draftMessage : userInput);
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
        customBtnClassName,
        draftMessage,
        showDraft
    } = props;

    return (
        <div className="input-placeholder-wrapper">
            <TextField 
                placeholder={placeholder} 
                value={showDraft ? draftMessage : userInput} 
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