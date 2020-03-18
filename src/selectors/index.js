export const selectProductsFromState = state => state.ui.data || [];
export const selectCategoriesFromState = state => state.ui.categories || [];

export const selectCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

