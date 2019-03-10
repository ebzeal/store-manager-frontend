// import FormData from 'form-data';
import Axios from 'axios';
import makeRequest from '../../Utils/axiosSetup';

export const CREATE_PRODUCT_BEGIN = 'CREATE_PRODUCT_BEGIN';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const createProductBegin = () => ({
  type: CREATE_PRODUCT_BEGIN,
  payload: { isLoading: true }
});

export const createProductSuccess = response => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: { isLoading: false, product: response }
});

export const createProductfailure = errors => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: { isLoading: false, productErrors: [{ ...errors }], product: [] }
});

export const createProductAction = ({
  categories_id,
  productName,
  productImage,
  productDetails,
  productSpec,
  productPrice,
  productQuantity,
  productLimit,
  history
}) => async dispatch => {
  dispatch(createProductBegin());
  try {
    const response = await makeRequest('/products', {
      method: 'POST',
      body: {
        categories_id,
        productName,
        productImage,
        productDetails,
        productSpec,
        productPrice,
        productQuantity,
        productLimit
      },
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    dispatch(createProductSuccess(response));
    history.push('/');
    history.push('/products');
  } catch (errors) {
    dispatch(createProductfailure(errors.response.data));
  }
};
