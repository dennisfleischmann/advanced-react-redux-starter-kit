import { createStore, combineReducers } from 'redux';
import sampleReducer from './reducers/sampleReducer';

const reducers = {
  sampleReducer,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
   combineReducers(reducers), /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
