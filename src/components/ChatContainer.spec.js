import React from 'react';
import { mount } from 'enzyme';
import { ChatContainer } from './ChatContainer';

describe('ChatContainer', () => {
    const wrapper = mount(<ChatContainer/>);

    it('should render the component without failure', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should render the parent wrapper and child components', () => {
        expect(wrapper.exists('.chat-web-container')).toEqual(true);
    })
});
