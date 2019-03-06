import { combineReducers } from 'redux';
import loginReducer from './loginReducer/loginReducer';

const reducers = combineReducers({
  auth: loginReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};
export default rootReducer;
