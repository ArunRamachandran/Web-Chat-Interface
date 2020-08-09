import * as actions from './actions';
import * as Constants from '../constants/constants';
import { exportAllDeclaration } from '@babel/types';

describe('Actions', () => {
    it('should return an action object on updateContactsList action', () => {
        const mockPayload = { data: 'test data' };
        expect(actions.updateContactsList(mockPayload)).toEqual({
            type: Constants.UPDATE_CONTACTS_LIST,
            payload: mockPayload
        })
    })

    it('should return extected action object on updateActiveChatThread action', () => {
        const mockId = '1';
        expect(actions.updateActiveChatThread(mockId)).toEqual({
            type: Constants.UPDATE_ACTIVE_CHAT_THREAD,
            payload: mockId
        })
    })

    it('should return extected action object on pushMessageToActiveThread action', () => {
        const mockData = { test: 'test data' };
        expect(actions.updateActiveChatThread(mockData)).toEqual({
            type: Constants.UPDATE_ACTIVE_CHAT_THREAD,
            payload: mockData
        })
    })
});
