// import FormData from 'form-data';
import Axios from 'axios';
import makeRequest from '../../Utils/axiosSetup';

export const DELETE_PRODUCT_BEGIN = 'DELETE_PRODUCT_BEGIN';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const deleteProductBegin = () => ({
  type: DELETE_PRODUCT_BEGIN,
  payload: { isLoading: true }
});

export const deleteProductSuccess = response => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: { isLoading: false, product: response }
});

export const deleteProductfailure = errors => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: { isLoading: false, productErrors: [{ ...errors }], product: [] }
});

export const deleteProductAction = (productId, history) => async dispatch => {
  dispatch(deleteProductBegin());
  try {
    const response = await makeRequest(`/products/${productId}`, {
      method: 'DELETE',
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    dispatch(deleteProductSuccess(response));
    history.push('/');
    history.push('/products');
  } catch (errors) {
    dispatch(deleteProductfailure(errors.response.data));
  }
};
