import React, { createContext, useReducer, useContext } from 'react';

/* Action Types */
const SET_CART_COUNT = 'SET_CART_COUNT';
const SET_SELECTED_CAT = 'SET_SELECTED_CAT';

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const initialState = {
  cartCount: 0,
  selectedCat: null,
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    case SET_SELECTED_CAT:
      return {
        ...state,
        selectedCat: action.payload,
      };
    default:
      return state;
  }
};

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    globalStateReducer,
    initialState,
  );

  return (
    <GlobalStateContext.Provider value={ [state, dispatch] }>
      { children }
    </GlobalStateContext.Provider>
  );
};

/*
Default export is a hook that provides a simple API for updating the global state.
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const setCartCount = count => {
    dispatch({
      type: SET_CART_COUNT,
      payload: count,
    });
  };

  const setSelectedCategory = cat => {
    dispatch({
      type: SET_SELECTED_CAT,
      payload: cat,
    });
  };

  return {
    setCartCount,
    setSelectedCategory,
    cartCount: state.cartCount,
    selectedCategory: state.selectedCat,
  };
};

export default useGlobalState;
