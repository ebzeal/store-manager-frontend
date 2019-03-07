import makeRequest from '../../Utils/axiosSetup';

export const GET_SALES_BEGIN = 'GET_SALES_BEGIN';
export const GET_SALES_SUCCESS = 'GET_SALES_SUCCESS';
export const GET_SALES_FAILURE = 'GET_SALES_FAILURE';

export const getSalesBegin = () => ({
  type: GET_SALES_BEGIN,
  payload: { isLoading: true }
});

export const getSalesSuccess = response => ({
  type: GET_SALES_SUCCESS,
  payload: { isLoading: false, sales: response }
});

export const getSalesfailure = errors => ({
  type: GET_SALES_FAILURE,
  payload: { isLoading: false, salesErrors: [{ ...errors }], users: [] }
});

export const getSalesAction = () => async dispatch => {
  dispatch(getSalesBegin());
  try {
    const response = await makeRequest('/sales');
    dispatch(getSalesSuccess(response));
  } catch (errors) {
    dispatch(getSalesfailure(errors.response));
  }
};
