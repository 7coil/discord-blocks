import { combineReducers } from 'redux';

import document from './document';
import toasts from './toasts';

export default combineReducers({
  document,
  toasts
});
