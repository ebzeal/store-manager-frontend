import makeRequest from '../../Utils/axiosSetup';

export const GET_CATEGORIES_BEGIN = 'GET_CATEGORIES_BEGIN';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const getCategoriesBegin = () => ({
  type: GET_CATEGORIES_BEGIN,
  payload: { isLoading: true }
});

export const getCategoriesSuccess = response => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { isLoading: false, categories: response }
});

export const getCategoriesfailure = errors => ({
  type: GET_CATEGORIES_FAILURE,
  payload: { isLoading: false, categoriesErrors: [{ ...errors }], categories: [] }
});

export const getCategoriesAction = () => async dispatch => {
  dispatch(getCategoriesBegin());
  try {
    const response = await makeRequest('/categories');
    dispatch(getCategoriesSuccess(response));
  } catch (errors) {
    dispatch(getCategoriesfailure(errors.response));
  }
};
