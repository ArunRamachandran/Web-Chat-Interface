import chatReducer  from './chatReducer';
import * as Constants from '../constants/constants';
import { createStore } from 'redux';

describe('chatReducer', () => {
    var store, defaultState;

    beforeEach(() => {
        store = createStore(chatReducer);
        defaultState = {
            contacts: [],
            activeChatThread: undefined,
            messageStore: {}
        }
    })

    it('should return the default state', () => {
        const expectedState = {
            ...defaultState
        };
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle the UPDATE_CONTACTS_LIST', () => {
        const spyAction = {
            type: Constants.UPDATE_CONTACTS_LIST,
            payload: { _id: 1, name: 'Arun' }
        }

        store.dispatch(spyAction);
        expect(store.getState().contacts).toEqual([spyAction.payload])
        expect(store.getState().activeChatThread).toEqual(spyAction.payload._id)
    })

    it('should handle UPDATE_ACTIVE_CHAT_THREAD', () => {
        const spyAction = {
            type: Constants.UPDATE_ACTIVE_CHAT_THREAD,
            payload: 123
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual({
            ...defaultState,
            activeChatThread: spyAction.payload
        })
    })

    it('should handle PUSH_MESSAGE_TO_ACTIVE_THREAD', () => {
        const spyActionChatThread = {
            type: Constants.UPDATE_ACTIVE_CHAT_THREAD,
            payload: 123
        };

        store.dispatch(spyActionChatThread);

        const spyActionMessage = {
            type: Constants.PUSH_MESSAGE_TO_ACTIVE_THREAD,
            payload: {
                message: 'test message'
            }
        }

        store.dispatch(spyActionMessage);
        expect(store.getState()).toEqual({
            ...defaultState,
            activeChatThread: 123,
            messageStore: {
                '123': [{ message: 'test message' }]
            }
        })

    })
});
