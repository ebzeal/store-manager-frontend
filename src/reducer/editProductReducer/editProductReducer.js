import {
  EDIT_PRODUCT_BEGIN,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE
} from '../../action/editProductAction/editProductAction';

const initialState = {
  editProduct: [],
  editProductErrors: {},
  editLoading: false,
  editresponse: {}
};

const editProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_PRODUCT_BEGIN:
      return { ...state, ...payload };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, ...payload };
    case EDIT_PRODUCT_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default editProductReducer;
