import React from 'react';
import { mount } from 'enzyme';
import { InputPlaceholder } from './InputPlaceholder';
import { TextField } from './TextField';
import { Button } from './Button';

describe('InputPlaceholder', () => {
    const mockOnClick = jest.fn();

    const wrapper = mount(<InputPlaceholder 
        placeholder="test-placeholder"
        context="test-context"
        customBtnClassName="test-class"
        onClick={mockOnClick}/>)

    it('should render the component', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should render its child components', () => {
        expect(wrapper.find(TextField)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
    })
});
