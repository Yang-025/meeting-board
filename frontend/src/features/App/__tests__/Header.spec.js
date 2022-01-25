import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavLink } from 'react-router-dom';
import Header from '../Header';


configure({ adapter: new Adapter() });

describe('<Header> /', () => {
  it('contains <Link/> component', () => {
    const wrapper = shallow(<Header />);
    console.log(wrapper.find(NavLink));
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });

  it('contains className: header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.header')).toHaveLength(1);
  });
});
