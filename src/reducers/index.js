import itemsReducer from './items';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  items: itemsReducer
});

export default allReducers;
