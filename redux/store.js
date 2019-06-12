import { createStore } from 'redux';

import reducer from './reducer';

export default function initializeStore(initialState) {
  return createStore(reducer, initialState);
}
