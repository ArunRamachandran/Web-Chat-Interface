import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../components/Button';
import { InputPlaceholder } from '../components/InputPlaceholder';
import { updateContactsList, updateActiveChatThread } from '../actions/actions';

export const ContactsList = (props) => {

    const [isContactFieldEnabled, toggleContactField] = useState(false)
    const data = useSelector(state => state.chatData.contacts);
    const activeChatThread = useSelector(state => state.chatData.activeChatThread);

    const dispatch = useDispatch();

    /**
     * @param {String}
     * @description Function accept the customer input and dispatch an action
     * to update the existing contacts list the given input data.
     */
    const _addNewContact = (value) => {
        toggleContactField(false)

        dispatch(updateContactsList({
            _id: new Date().getTime(),
            name: value,
        }))
    }

    const _enableContactField = () => {
        toggleContactField(true);
    }

    const _renderContactsList = (data) => {
        return data.map((contact, index) => (
            <div className={`list-item ${activeChatThread === contact._id ? 'active-thread' : ''}`} key={index} onClick={() => dispatch(updateActiveChatThread(contact._id))}>
                <p>{contact.name}</p>
            </div>
        ))
    }

    return (
        <div className="contacts-list-wrapper">
            { 
                data && data.length ? 
                    <div className="list-wrapper">{_renderContactsList(data)}</div>
                    : <div/>
            }
            { 
                isContactFieldEnabled && <InputPlaceholder 
                    placeholder="Add contact name" 
                    context="Update" 
                    customBtnClassName="placeholder-btn-field"
                    onClick={_addNewContact}
                /> 
            }
            <Button 
                context="Add a new contact" 
                customClassName="add-contact-btn" 
                onClick={_enableContactField}
            />
        </div>
    )
}