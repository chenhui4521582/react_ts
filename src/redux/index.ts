import {createStore, combineReducers, applyMiddleware } from 'redux'
import user from './reducer/user_reduces'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootState from '@/redux/saga/rootSaga'
const reducers = combineReducers({
  user
});
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootState);

export default store;