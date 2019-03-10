import {
  CREATE_CATEGORY_BEGIN,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE
} from '../../action/createCategoryAction/createCategoryAction';

const initialState = {
  category: [],
  categoryErrors: {},
  isLoading: false,
  response: {}
};

const createCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CATEGORY_BEGIN:
      return { ...state, ...payload };
    case CREATE_CATEGORY_SUCCESS:
      return { ...state, ...payload };
    case CREATE_CATEGORY_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default createCategoryReducer;
