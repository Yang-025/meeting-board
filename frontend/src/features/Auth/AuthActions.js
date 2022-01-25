import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';

import types from './AuthActionTypes';


// 登入跳轉有兩種方式可以做到，一個是在這裡直接利用react-router-redux的push，一驗證成功就直接跳頁，
// 另一個方法是更新reducer，在login page意識到props改變重新render的時候發現自己已經登入，在使用<Redirect/>跳轉
// 還不知道哪種方式比較適合，目前兩種都做了
export function login(fromPath, value) {
  return ((dispatch) => {
    // 確認登入成功
    const { username, password } = value;
    if (username === 'winwin' && password === '1234') {
      // 寫到localstorage
      localStorage.setItem('token', '1234!@#$');
      // 導頁
      dispatch(push(fromPath));
      dispatch({
        type: types.LOGIN
      });
    } else {
      throw new SubmissionError({ _error: 'Login failed!' });
    }
  });
}


export function logout() {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT
  };
}
