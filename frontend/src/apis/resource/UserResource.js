// 測試用

import ApiService from '../ApiService';


const UserResource = {
  get: () => ApiService.get(
    'http://jsonplaceholder.typicode.com/posts',
    { withToken: true, params: { a: 1 } }
  ),
  get2: () => ApiService.get(
    'http://jsonplaceholder.typicode.com/posts',
    { withToken: false }
  ),
  fetch: userId => ApiService.get(`http://jsonplaceholder.typicode.com/posts/${userId}`),
  // success example: 201 ok
  create: ({ title, body, userId }) => ApiService.post(
    'http://jsonplaceholder.typicode.com/posts',
    {
      withToken: true,
      data: { title, body, userId },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }),

  testHeader: () => {
    return ApiService.instance({
      method: 'get',
      url: 'http://jsonplaceholder.typicode.com/posts'
    });
  }
  // failure example: 401
  // create: () => ApiService.post('https://api.imgur.com/3/account/me/comments/newest/2 '),
};

export default UserResource;
