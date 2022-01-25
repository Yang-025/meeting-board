import { handleActions } from 'redux-actions';
import { actionTypes } from './TestImgAndCssActions';

const initialState = {
  count: 0,
  msg: 'Hi',
  status: 'wait...',
  isPinging: false,
};

export default handleActions({
  [actionTypes.A_SIMPLE_ACTION]: (state, payload) => {
    const { msg } = payload;
    return {
      ...state,
      msg
    };
  },
  [actionTypes.SIMPLE_SAGA_SUCCESS]: (state, payload) => {
    const { status } = payload;
    return {
      ...state,
      status
    };
  },
  [actionTypes.SIMPLE_SAGA_FAILURE]: (state, payload) => {
    const { status } = payload;
    return {
      ...state,
      status
    };
  },
  [actionTypes.OBSERVABLE_PING]: (state) => {
    return {
      ...state,
      isPinging: 'true'
    };
  },
  [actionTypes.OBSERVABLE_PONG]: (state) => {
    return {
      ...state,
      isPinging: false
    };
  }
}, initialState);
