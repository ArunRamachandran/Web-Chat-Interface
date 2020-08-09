import React from 'react';
import { mount } from 'enzyme';
import { ChatContainer } from './ChatContainer';
import { SettingsPanel } from './SettingsPanel';
import { ChatWindow } from './ChatWindow';
import { NavigationBar } from './NavigationBar';

jest.mock('./ChatWindow', () => 'ChatWindow');

describe('ChatContainer', () => {
    const wrapper = mount(<ChatContainer/>);

    it('should render the component without failure', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists('.chat-web-container')).toEqual(true);
    })
});
