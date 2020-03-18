import { types } from '../actions';

const INITIAL_STATE = {
  data: [],
  categories: [],
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PRODUCTS_SET:
      return {
        ...state,
        data: action.data,
      };
    case types.CATEGORIES_SET:
      return {
        ...state,
        categories: action.data,
      };
    default:
      return state;
  }
};
