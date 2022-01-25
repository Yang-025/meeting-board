import reducer from '~~features/TestImgAndCss/TestImgAndCssReducer';
import types from '~~features/TestImgAndCss/TestImgAndCssActionTypes';

describe('TestImgAndCss Reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      count: 0,
      msg: 'Hi',
      status: 'wait...',
      isPinging: false,
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle A_SIMPLE_ACTION', () => {
    const data = reducer(initialState, {
      type: types.A_SIMPLE_ACTION,
      msg: 'some msg'
    });
    expect(data).toMatchObject({
      ...initialState,
      msg: 'some msg'
    });
  });

  it('should handle SIMPLE_SAGA_SUCCESS', () => {
    const data = reducer(initialState, {
      type: types.SIMPLE_SAGA_SUCCESS,
      status: 'you success'
    });
    expect(data).toMatchObject({
      ...initialState,
      status: 'you success'
    });
  });

  it('should handle SIMPLE_SAGA_FAILURE', () => {
    const data = reducer(initialState, {
      type: types.SIMPLE_SAGA_FAILURE,
      status: 'you fail'
    });
    expect(data).toMatchObject({
      ...initialState,
      status: 'you fail'
    });
  });
});
