import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import UseFormField from './UseFormField';

configure({adapter: new Adapter()});

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}

/* Test implementation details */
describe('useFormField', () => {
    it('should render', () => {
        let wrapper = shallow(<HookWrapper />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should set a US Number', () => {
        let wrapper = shallow(<HookWrapper hook={() => UseFormField('')} />);

        let { hook } = wrapper.find('div').props();
        let [mobileNumber, onHandleSubmit] = hook;
        expect(mobileNumber).toEqual('');

        wrapper = shallow(<HookWrapper hook={() => UseFormField('541-754-3010')} />);

        ({ hook } = wrapper.find('div').props());
        [mobileNumber, onHandleSubmit] = hook;
        expect(mobileNumber).toEqual('541-754-3010');
    });
});
