import { ADD_TO_CART } from '../../action/cartAction/cartAction';

const initialState = {
  products: [],
  response: {},
  Quantity: 0,
  Amount: 0
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default cartReducer;
