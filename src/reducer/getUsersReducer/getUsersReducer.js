import { GET_USERS_BEGIN, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../../action/getUsersAction/getUsersAction';

const initialState = {
  users: [],
  usersErrors: [],
  isLoading: false
};

const getusersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_BEGIN:
      return { ...state, ...payload };
    case GET_USERS_SUCCESS:
      return { ...state, ...payload };
    case GET_USERS_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getusersReducer;
