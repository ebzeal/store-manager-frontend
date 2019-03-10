// import FormData from 'form-data';
// import Axios from 'axios';
import makeRequest from '../../Utils/axiosSetup';

export const CREATE_CATEGORY_BEGIN = 'CREATE_CATEGORY_BEGIN';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export const createCategoryBegin = () => ({
  type: CREATE_CATEGORY_BEGIN,
  payload: { isLoading: true }
});

export const createCategorySuccess = response => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: { isLoading: false, category: response }
});

export const createCategoryfailure = errors => ({
  type: CREATE_CATEGORY_FAILURE,
  payload: { isLoading: false, categoryErrors: [{ ...errors }], category: [] }
});
export const createCategoryAction = ({ categoryName, categoryDetails }) => async dispatch => {
  dispatch(createCategoryBegin());
  try {
    const response = await makeRequest('/categories', {
      method: 'post',
      body: {
        categoryName,
        categoryDetails
      }
    });
    dispatch(createCategorySuccess(response));
    console.log('TCL: response', response);
  } catch (errors) {
    dispatch(createCategoryfailure(errors.response.data));
    console.log('TCL: }catch -> errors.response.data', errors);
  }
};
