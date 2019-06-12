import { combineReducers } from 'redux';
import layout from './ducks/layout';
import categories from './ducks/categories';

export default combineReducers({
  layout,
  categories
});
