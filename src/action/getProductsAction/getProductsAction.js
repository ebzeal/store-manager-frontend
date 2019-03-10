import makeRequest from '../../Utils/axiosSetup';

export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProductsBegin = () => ({
  type: GET_PRODUCTS_BEGIN,
  payload: { isLoading: true }
});

export const getProductsSuccess = response => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { isLoading: false, products: response }
});

export const getProductsfailure = errors => ({
  type: GET_PRODUCTS_FAILURE,
  payload: { isLoading: false, productsErrors: [{ ...errors }], products: [] }
});

export const getProductsAction = () => async dispatch => {
  dispatch(getProductsBegin());
  try {
    const response = await makeRequest('/products');
    dispatch(getProductsSuccess(response));
  } catch (errors) {
    dispatch(getProductsfailure(errors.response.data));
  }
};
