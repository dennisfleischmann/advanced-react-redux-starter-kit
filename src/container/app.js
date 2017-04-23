import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SampleContainer from './sampleContainer';
import sampleReducer from '../reducers/sampleReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
   sampleReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
/* eslint-enable */

export default () => (
  <Provider store={store}>
    <SampleContainer />
  </Provider>
);
