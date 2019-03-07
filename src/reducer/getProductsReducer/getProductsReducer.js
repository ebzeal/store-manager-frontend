import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from '../../action/getProductsAction/getProductsAction';

const initialState = {
  products: [],
  productsErrors: [],
  isLoading: false
};

const getProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, ...payload };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, ...payload };
    case GET_PRODUCTS_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getProductsReducer;
