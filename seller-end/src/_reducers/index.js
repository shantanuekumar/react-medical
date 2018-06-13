import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { getProduct } from './getProduct.reducer';
import { uploading } from './uploading.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  getProduct,
  uploading
});

export default rootReducer;