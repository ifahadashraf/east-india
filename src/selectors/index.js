export const selectProductsFromState = state => state.products.data || [];
export const selectCategoriesFromState = state => state.products.categories || [];

export const selectCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

