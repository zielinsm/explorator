import { combineReducers } from 'redux';

import nodeReducer from './nodeReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  searchReducer,
  nodeReducer
});

export default rootReducer;
