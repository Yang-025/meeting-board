import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import TestImgAndCss from '~~features/TestImgAndCss';


import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest.mock('react-redux', () => ({ connect: jest.fn() }));

// https://github.com/airbnb/enzyme/issues/472 使用WrappedComponent測試container
describe('<TestImgAndCss> /', () => {
  test('contains <TestImgAndCss/> component', () => {
    // This is where we create a mock state/props
    const props = {
      status: 'Nice post!',
      msg: 'Tiffany Wu',
      isPinging: false,
      actions: {
        simpleAction: jest.fn(() => {}),
        anotherSimpleAction: jest.fn(() => {}),
        anotherSimpleAction2: jest.fn(() => {})
      }
    };
    const wrapper = shallow(<TestImgAndCss.WrappedComponent {...props} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('renders TestImgAndCss', () => {
    const props = {
      status: 'Nice post!',
      msg: 'Tiffany Wu',
      isPinging: false,
      actions: {
        simpleAction: jest.fn(() => {}),
        anotherSimpleAction: jest.fn(() => {}),
        anotherSimpleAction2: jest.fn(() => {})
      }
    };
    const wrapper = shallow(<TestImgAndCss.WrappedComponent {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});


describe('<TestImgAndCss> 的截圖/', () => {
  test('大圖hover時，class有改變', () => {
    const props = {
      status: 'Nice post!',
      msg: 'Tiffany Wu',
      isPinging: false,
      actions: {
        simpleAction: jest.fn(() => {}),
        anotherSimpleAction: jest.fn(() => {}),
        anotherSimpleAction2: jest.fn(() => {})
      }
    };
    const component = renderer.create(<TestImgAndCss.WrappedComponent {...props} />);
    // 先截一張看看
    let tree = component.toJSON();
    const [bigImg] = tree.children.filter(o => o.type === 'img' && o.props.alt === 'big');

    // console.log('child', tree.children.filter(o => o.type === 'img' && o.props.alt === 'big'));
    // console.log('tree props', tree.props);
    expect(tree).toMatchSnapshot();

    // 呼叫大圖的onMouseEnter()後再截一張
    bigImg.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // 呼叫大圖的onMouseLeave()後再截一張
    bigImg.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
