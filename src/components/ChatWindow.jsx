import React, { Component } from 'react';
import { ContactsList } from '../containers/ContactsList';
import { MessagePanel } from '../containers/MessagePanel';

export const ChatWindow = () => {

    return (
        <div className="app-chat-window">
            <div className="app-left-panel">
                <ContactsList/>
            </div>
            <div className="app-right-panel">
                <MessagePanel/>
            </div>
        </div>
    )
}