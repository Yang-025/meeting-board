import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Header from '../Header';


configure({ adapter: new Adapter() });

describe('<App> /', () => {
  it('should contains an <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  // it('should render child components', () => {
  //   const wrapper = shallow(<App><div>test</div></App>);
  //   expect(wrapper.contains(<div>test</div>)).to.be.true;
  // });
});
