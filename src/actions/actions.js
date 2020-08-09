import * as Constants from '../constants/constants';

const updateContactsList = (data) => ({
    type: Constants.UPDATE_CONTACTS_LIST,
    payload: data
})

const updateActiveChatThread = (id) => ({
    type: Constants.UPDATE_ACTIVE_CHAT_THREAD,
    payload: id
})

const pushMessageToActiveThread = (data) => ({
    type: Constants.PUSH_MESSAGE_TO_ACTIVE_THREAD,
    payload: data
})

export {
    updateContactsList,
    updateActiveChatThread,
    pushMessageToActiveThread
}