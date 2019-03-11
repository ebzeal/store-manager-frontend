// import FormData from 'form-data';
// import Axios from 'axios';
// import makeRequest from '../../Utils/axiosSetup';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export const addToCart = ({ productId, category, image, price, spec, name, product }) => ({
  product: {
    productId,
    category,
    image,
    price,
    spec,
    name
  },
  type: ADD_TO_CART,
  payload: {
    products: [
      {
        productId,
        category,
        image,
        price,
        spec,
        name
      }
    ]
  }
});

// export const createCategorySuccess = response => ({
//   type: CREATE_CATEGORY_SUCCESS,
//   payload: { isLoading: false, category: response }
// });

// export const createCategoryfailure = errors => ({
//   type: CREATE_CATEGORY_FAILURE,
//   payload: { isLoading: false, categoryErrors: [{ ...errors }], category: [] }
// });
// export const createCategoryAction = ({ categoryName, categoryDetails }) => async dispatch => {
//   dispatch(createCategoryBegin());
//   try {
//     const response = await makeRequest('/categories', {
//       method: 'post',
//       body: {
//         categoryName,
//         categoryDetails
//       }
//     });
//     dispatch(createCategorySuccess(response));
//     console.log('TCL: response', response);
//   } catch (errors) {
//     dispatch(createCategoryfailure(errors.response.data));
//     console.log('TCL: }catch -> errors.response.data', errors);
//   }
// };
