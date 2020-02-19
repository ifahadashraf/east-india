import * as types from './types';

export const setProducts = data => ({
  type: types.PRODUCTS_SET,
  data,
});

export const setCategories = data => ({
  type: types.CATEGORIES_SET,
  data,
});
