import React, { createContext, useReducer, useContext } from 'react';

/* Action Types */
const SET_CART_COUNT = 'SET_CART_COUNT';

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const initialState = {
  cartCount: 0,
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
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

  return {
    setCartCount,
    cartCount: state.cartCount,
  };
};

export default useGlobalState;
