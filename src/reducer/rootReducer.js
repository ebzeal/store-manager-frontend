import { combineReducers } from 'redux';
import loginReducer from './loginReducer/loginReducer';
import getProductsReducer from './getProductsReducer/getProductsReducer';
import getCategoriesReducer from './getCategoriesReducer/getCategoriesReducer';
import getUsersReducer from './getUsersReducer/getUsersReducer';
import getSalesReducer from './getSalesReducer/getSalesReducer';
import createProductReducer from './createProductReducer/createProductReducer';

const reducers = combineReducers({
  auth: loginReducer,
  products: getProductsReducer,
  categories: getCategoriesReducer,
  users: getUsersReducer,
  sales: getSalesReducer,
  addProduct: createProductReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};
export default rootReducer;
