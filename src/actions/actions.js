import * as types from './types';

export const setProducts = data => ({
  type: types.PRODUCTS_SET,
  data,
});
