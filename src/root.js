import React from 'react';
import { Provider } from 'react-redux';
import SampleContainer from './container/sampleContainer';
import store from './configureStore';
/* eslint-enable */

export default () => (
  <Provider store={store}>
    <SampleContainer />
  </Provider>
);
