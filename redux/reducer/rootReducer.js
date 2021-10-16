import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';

const rootReducers = combineReducers({
  userLogin: userReducer,
  loader: loaderReducer,
});

export default rootReducers;
