import React from 'react';
import { mount } from 'enzyme';
import { TextField } from './TextField';

describe('TextField', () => {
    const wrapper = mount(<TextField/>);

    it('should render the component without failure', () => {
        expect(wrapper).toBeTruthy();
    })
});
