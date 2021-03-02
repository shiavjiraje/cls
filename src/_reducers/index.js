import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { vendor } from './section1.reducer';


const rootReducer = combineReducers({
  authentication,
  vendor
});

export default rootReducer;
