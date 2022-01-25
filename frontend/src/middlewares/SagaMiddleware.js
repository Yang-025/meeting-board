import createSagaMiddleware from 'redux-saga';
import rootSaga from '~~sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


export default sagaMiddleware;
