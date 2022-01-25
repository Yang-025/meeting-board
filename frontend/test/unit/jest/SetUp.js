
import Rx from 'rxjs';
import configureMockStore from 'redux-mock-store';

import middlewares from '~~middlewares';

import LocalStorageMock from './__mocks__/LocalStorageMock';
import SessionStorageMock from './__mocks__/BeforeTestSetUp';

// enzyme
require('./EnzymeSetUp');
// 多國語系
require('./IntlSetUp');

// export const sagaMiddleware = middlewares[1];
// export const epicMiddleware = middlewares[2];
export default {};
// export default configureMockStore(middlewares);


// # 假的LocalStorage和SessionStorage
global.localStorage = LocalStorageMock;
global.sessionStorage = SessionStorageMock;
global.mockStore = configureMockStore([middlewares.reduxThunkMiddleware, middlewares.sagaMiddleware, middlewares.epicMiddleware]);
