import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { InputPlaceholder } from '../components/InputPlaceholder';
import { pushMessageToActiveThread, updateDraftMessage } from '../actions/actions';

export const MessagePanel = () => {

    const activeChatThread = useSelector(state => state.chatData.activeChatThread);
    const messageStore = useSelector(state => state.chatData.messageStore);
    const contactsList = useSelector(state => state.chatData.contacts);
    const draftData = useSelector(state => state.chatData.draft);

    const dispatch = useDispatch();

    const _handleOnChange = (value) => {

        dispatch(updateDraftMessage({
            activeUserID: activeChatThread,
            message: value
        }))
    }

    const _messageHandler = (text) => {
        draftData[activeChatThread] && dispatch(pushMessageToActiveThread({
            _id: new Date().getTime(),
            sendBy: 'self',
            sendTo: activeChatThread,
            content: draftData[activeChatThread],
            channel: 'web',
            isReacted: false
        }))

        dispatch(updateDraftMessage({
            activeUserID: activeChatThread,
            message: ''
        }))
    }

    const _renderChatHistory = (messages) => {
        return (
            <div className="chat-history-container">
                {
                    messages ? 
                        <div>
                            {messages.map((message, id) => (
                                <div key={id} className={`single-message-field ${message.sendBy === 'self' ? 'own-message' : 'received-message'}`}>
                                    <p>{message.content}</p>
                                </div>
                            ))}
                        </div>
                    :   <div className="static-message-container empty-panel">
                            Break the silence. Drop a message to your friend. 
                        </div>
                }
            </div>
        )
    }

    const _renderStaticDisplay = () => {
        return (
            <div className="static-message-container">
                <p>Add a friend to start talking with them</p>
            </div>
        )
    }

    const _isChatListisEmpty = () => {
        return contactsList.length ? false: true;
    }

    return (
        <div className={`message-panel-wrapper ${ _isChatListisEmpty() ? 'empty-panel' : '' }`}>
            <div className="web-chat-box">
                { activeChatThread ? _renderChatHistory(messageStore[activeChatThread]) : _renderStaticDisplay()}
            </div>
            <div className="new-message-section">
                { !_isChatListisEmpty() && <InputPlaceholder
                        placeholder="Type your message here"
                        context="Send"
                        customBtnClassName="chat-message-btn"
                        draftMessage={draftData[activeChatThread]}
                        showDraft={true}
                        onClick={_messageHandler}
                        onChange={_handleOnChange}
                    />
                }
            </div>
        </div>
    )
}