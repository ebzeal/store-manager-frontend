import makeRequest from '../../Utils/axiosSetup';

export const GET_USERS_BEGIN = 'GET_USERS_BEGIN';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsersBegin = () => ({
  type: GET_USERS_BEGIN,
  payload: { isLoading: true }
});

export const getUsersSuccess = response => ({
  type: GET_USERS_SUCCESS,
  payload: { isLoading: false, users: response }
});

export const getUsersfailure = errors => ({
  type: GET_USERS_FAILURE,
  payload: { isLoading: false, usersErrors: [{ ...errors }], users: [] }
});

export const getUsersAction = () => async dispatch => {
  dispatch(getUsersBegin());
  try {
    const response = await makeRequest('/users');
    dispatch(getUsersSuccess(response));
  } catch (errors) {
    dispatch(getUsersfailure(errors.response));
  }
};
