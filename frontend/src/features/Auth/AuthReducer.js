import { handleActions } from 'redux-actions';
import types from './AuthActionTypes';

const initialState = {
  isLoggedin: false
};

export default handleActions({
  [types.LOGIN]: (state) => {
    console.log('LOGIN Reducer');
    return {
      ...state,
      isLoggedin: true
    };
  },
  [types.LOGOUT]: (state) => {
    console.log('LOGOUT Reducer');
    return {
      ...state,
      isLoggedin: false
    };
  }
}, initialState);
