import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});

function HookWrapper() {
    return <App />;
}
  
describe('Home', () => {
    test('should render without crashing', () => {
      let wrapper = shallow(<HookWrapper />);
      expect(wrapper.exists()).toBeTruthy();
    });
});