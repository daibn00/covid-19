import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/rootReducer';
import rootSaga from '../sagas/index';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducers, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
