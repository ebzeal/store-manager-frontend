import { GET_SALES_BEGIN, GET_SALES_SUCCESS, GET_SALES_FAILURE } from '../../action/getSalesAction/getSalesAction';

const initialState = {
  sales: [],
  salesErrors: [],
  isLoading: false
};

const getsalesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SALES_BEGIN:
      return { ...state, ...payload };
    case GET_SALES_SUCCESS:
      return { ...state, ...payload };
    case GET_SALES_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getsalesReducer;
