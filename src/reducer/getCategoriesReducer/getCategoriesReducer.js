import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE
} from '../../action/getCategoriesAction/getCategoriesAction';

const initialState = {
  categories: [],
  categoriesErrors: [],
  isLoading: false
};

const getCategoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES_BEGIN:
      return { ...state, ...payload };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, ...payload };
    case GET_CATEGORIES_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getCategoriesReducer;
