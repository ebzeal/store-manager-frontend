import {
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from '../../action/deleteProductAction/deleteProductAction';

const initialState = {
  productErrors: {},
  deleteLoading: false,
  response: {}
};

const deleteProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PRODUCT_BEGIN:
      return { ...state, ...payload };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, ...payload };
    case DELETE_PRODUCT_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default deleteProductReducer;
