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

export const createProductAction = inputFieldsData => async dispatch => {
  dispatch(createProductBegin());
  try {
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'j6ig61vg');
    // const imageResponse = await Axios({
    //   method: 'post',
    //   url: 'https://api.cloudinary.com/v1_1/ebzeal/image/upload',
    //   data: formData,
    //   config: { headers: { 'Content-Type': 'multipart/form-data', 'X-Requested-With': 'XMLHttpRequest' } }
    // });
    // const upload = await Axios({
    //   method: 'post',
    //   url: 'https://api.cloudinary.com/v1_1/jesseinit/image/upload',
    //   data: formData,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // });
    // console.log('TCL: imageResponse', imageResponse);
    const response = await makeRequest('/products', {
      method: 'POST',
      body: inputFieldsData,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    dispatch(createProductSuccess(response));
    console.log('TCL: response', response);
  } catch (errors) {
    dispatch(createProductfailure(errors.response.data));
    console.log('TCL: }catch -> errors.response.data', errors);
  }
};
