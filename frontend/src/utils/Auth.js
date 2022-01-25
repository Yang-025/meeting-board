
export function checkAuth() {
  return !!localStorage.getItem('token');
}

export default {};


/**
  JWT 驗證

import jwt from 'jsonwebtoken';
import appcfg from '~~config';

export function checkAuth() {
  const token = sessionStorage.getItem('token') || null;
  const { secretKey, prefix } = appcfg.jwtSetting;
  let isValid = false;
  try {
    jwt.verify(token.replace(prefix, ''), secretKey);
    isValid = true;
  } catch (err) {
    isValid = false;
  }
  return isValid;
}

 */
