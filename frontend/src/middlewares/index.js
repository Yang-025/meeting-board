import reduxThunkMiddleware from 'redux-thunk';
import sagaMiddleware from './SagaMiddleware';
import epicMiddleware from './EpicMiddleware';

export default {
  reduxThunkMiddleware,
  sagaMiddleware,
  epicMiddleware
};

