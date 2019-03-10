import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE
} from '../../action/createProductAction/createProductAction';

const initialState = {
  product: [],
  productErrors: {},
  isLoading: false,
  response: {}
};

const createProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT_BEGIN:
      return { ...state, ...payload };
    case CREATE_PRODUCT_SUCCESS:
      return { ...state, ...payload };
    case CREATE_PRODUCT_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default createProductReducer;
