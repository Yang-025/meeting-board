// import { createAction } from 'redux-actions';
import Resource from '~~apis/resource';


export const actionTypes = {
  A_SIMPLE_ACTION: 'A_SIMPLE_ACTION',
  ANOTHER_SIMPLE_ACTION: 'ANOTHER_SIMPLE_ACTION',
  SIMPLE_SAGA_SUCCESS: 'SIMPLE_SAGA_SUCCESS',
  SIMPLE_SAGA_FAILURE: 'SIMPLE_SAGA_FAILURE',
  ERROR: 'ERROR',
  OBSERVABLE_PING: 'OBSERVABLE_PING',
  OBSERVABLE_PONG: 'OBSERVABLE_PONG'
};


function callApiTestSuccess(response) {
  // console.log('callApiTestSuccess>>', response);
  return {
    type: actionTypes.ANOTHER_SIMPLE_ACTION,
    api: response.data
  };
}

function callApiTestFailed(error) {
  // console.log('callApiTestFailed>>', error.message);
  return {
    type: actionTypes.ERROR,
    payload: error.message
  };
}

// 好像一定要return axios({}) 才有辦法做測試
export function anotherSimpleAction() {
  return ((dispatch) => {
    const data = {
      title: 'foo222',
      body: 'bar222',
      userId: 1
    };
    return Resource.UserResource.create(data)
    // return User.get()
      .then(response => dispatch(callApiTestSuccess(response)))
      .catch(error => dispatch(callApiTestFailed(error)));
  });
}

export function anotherSimpleAction2() {
  return ((dispatch) => {
    return Resource.UserResource.get2()
      .then(response => dispatch(callApiTestSuccess(response)))
      .catch(error => dispatch(callApiTestFailed(error)));
  });
}

export function simpleAction() {
  return {
    type: actionTypes.A_SIMPLE_ACTION,
    msg: 'KERKERKER'
  };
}


export function ping() {
  return {
    type: actionTypes.OBSERVABLE_PING
  };
}

export function pong() {
  return {
    type: actionTypes.OBSERVABLE_PONG
  };
}
