import { types } from '../actions';

const INITIAL_STATE = {
  data: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === types.PRODUCTS_SET) {
    return {
      ...state,
      data: action.data,
    };
  }
  return state;
};
