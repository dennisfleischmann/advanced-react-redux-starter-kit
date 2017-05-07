import { createStore, combineReducers } from 'redux';
import sampleReducer from './reducers/sampleReducer';

/* eslint-disable no-underscore-dangle */

const reducers = {
  sampleReducer,
};

const store = createStore(
   combineReducers(reducers), /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
