import React from 'react';
import { mount } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
    const mockProps = {
        customClassName: 'test-class',
        context: 'test-context',
        onClick: jest.fn()
    }
    const wrapper = mount(<Button {...mockProps}/>);

    it('should render the component & render expected classses to gain the styling', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists('.button-item')).toEqual(true);
        expect(wrapper.exists('.test-class')).toEqual(true);
    })

    it('should invoke callback function onClick on sortById element with respective param', () => {
        wrapper.find('.button-item').simulate('click');
        expect(mockProps.onClick).toHaveBeenCalled();
    })

});
