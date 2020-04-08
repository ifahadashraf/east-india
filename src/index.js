import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {GlobalStateProvider} from "./components/global";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <GlobalStateProvider>
        <App />
        <ToastContainer />
      </GlobalStateProvider>
    </Router>
  </Provider>
  ,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
