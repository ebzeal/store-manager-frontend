import { combineReducers } from 'redux';

const reducers = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};
export default rootReducer;
