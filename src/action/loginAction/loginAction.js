import decodeJwt from 'jwt-decode';
import makeRequest from '../../Utils/axiosSetup';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const logout = () => {
  localStorage.removeItem('userToken');
  return { type: USER_LOGOUT, payload: {} };
};

export const loginBegin = () => ({
  type: LOGIN_BEGIN,
  payload: { isLoading: true }
});

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: { isLoading: false, isAuthenticated: true, userPriviledge: decodeJwt(response.token).userPriviledge }
});

export const loginfailure = errors => ({
  type: LOGIN_FAILURE,
  payload: { isLoading: false, loginErrors: [{ ...errors.data }], userPriviledge: '', isAuthenticated: false }
});

export const loginAction = ({ userEmail, password, history }) => async dispatch => {
  dispatch(loginBegin());
  try {
    const response = await makeRequest('/auth/login', {
      method: 'POST',
      body: {
        userEmail,
        password
      }
    });
    localStorage.setItem('userToken', response.token);
    dispatch(loginSuccess(response));
    history.push('/dashboard');
  } catch (errors) {
    dispatch(loginfailure(errors.response));
  }
};
