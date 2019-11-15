import { combineReducers } from 'redux';

import auth from './modules/auth';
import ui from './modules/ui';
import bet from './modules/bet';

const rootReducer = combineReducers({
  auth,
  ui,
  bet,
});

export default rootReducer;
