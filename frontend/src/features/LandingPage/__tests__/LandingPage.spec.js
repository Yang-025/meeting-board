import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LandingPage from '../LandingPage';
import LocalStorageMock from '../../../../test/unit/jest/__mocks__/LocalStorageMock';

global.localStorage = LocalStorageMock;

configure({ adapter: new Adapter() });

describe('<LandingPage> /', () => {
  test('contains an <LandingPage/> component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('h1')).toHaveLength(1);
    wrapper.find('Button').simulate('click');
  });
});
