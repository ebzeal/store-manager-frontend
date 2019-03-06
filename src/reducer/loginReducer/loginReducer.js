import decodeJwt from 'jwt-decode';
import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT } from '../../action/loginAction/loginAction';

const token = localStorage.getItem('userToken');
const initialState = {
  isAuthenticated: Boolean(token),
  userPriviledge: token ? decodeJwt(token).userPriviledge : '',
  loginErrors: [],
  isLoading: false
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_BEGIN:
      return { ...state, ...payload };
    case LOGIN_SUCCESS:
      return { ...state, ...payload };
    case LOGIN_FAILURE:
      return { ...state, ...payload };
    case USER_LOGOUT:
      return { ...initialState, isAuthenticated: false };
    default:
      return state;
  }
};

export default loginReducer;
