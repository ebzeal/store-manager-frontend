// import FormData from 'form-data';
import Axios from 'axios';
import makeRequest from '../../Utils/axiosSetup';

export const EDIT_PRODUCT_BEGIN = 'EDIT_PRODUCT_BEGIN';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';

export const editProductBegin = () => ({
  type: EDIT_PRODUCT_BEGIN,
  payload: { editLoading: true }
});

export const editProductSuccess = response => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: { editLoading: false, EditProduct: response }
});

export const editProductfailure = errors => ({
  type: EDIT_PRODUCT_FAILURE,
  payload: { editLoading: false, editProductErrors: [{ ...errors }], editProduct: [] }
});

export const editProductAction = ({
  categories_id,
  productName,
  productImage,
  productDetails,
  productSpec,
  productPrice,
  productQuantity,
  productLimit,
  productId,
  history
}) => async dispatch => {
  dispatch(editProductBegin());
  try {
    console.log('TCL: productId', productId);
    const response = await makeRequest(`/products/${productId}`, {
      method: 'PUT',
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
    dispatch(editProductSuccess(response));
    history.push('/');
    history.push('/products');
  } catch (errors) {
    dispatch(editProductfailure(errors.response.data));
  }
};
