import * as Constants from '../constants/constants';

const initialChatState = {
    contacts: [],
    activeChatThread: undefined,
    messageStore: {},
    draft: {} // { _id1: "as asd", _id2: "sdfsdfsd" }
}

const chatData = (state = initialChatState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Constants.UPDATE_CONTACTS_LIST:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                activeChatThread: state.activeChatThread ? state.activeChatThread : payload._id,
                draft: {
                    ...state.draft,
                    [payload._id]: ''
                }
            }

        case Constants.UPDATE_ACTIVE_CHAT_THREAD:
            return {
                ...state,
                activeChatThread: payload
            }

        case Constants.PUSH_MESSAGE_TO_ACTIVE_THREAD:
            const chatHistory = state.messageStore[state.activeChatThread] ? state.messageStore[state.activeChatThread] : [];
            return {
                ...state,
                messageStore: {
                    ...state.messageStore,
                    [state.activeChatThread]: [
                        ...chatHistory,
                        payload
                    ]
                }
            }

        case Constants.UPDATE_DRAFT_MESSAGE:
            return {
                ...state,
                draft: {
                    ...state.draft,
                    [payload.activeUserID]: payload.message
                }
            }

        default:
            return state;
    }
}

export default chatData;