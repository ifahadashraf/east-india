import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/animate.min.css';
import './css/owl.carousel.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header } from './components/header';
import { Home } from './components/home';
import { Footer } from './components/footer';
import {ROUTES} from "./utils/values";
import {History} from "./components/history";
import {Services} from "./components/services";
import {Contact} from "./components/contact";
import {Shop} from "./components/shop";
import {Product} from "./components/product";

function App() {
  return (
    <Router>
      <div className='page-wraper'>
        <Header/>
        <Switch>
          <Route
            path={ ROUTES.ROOT }
            exact
          >
            <Home />
          </Route>
          <Route
            path={ ROUTES.HISTORY }
            exact
          >
            <History/>
          </Route>
          <Route
            path={ ROUTES.NEWS }
            exact
          >
            <h1>NEWS</h1>
          </Route>
          <Route
            path={ ROUTES.CONTACT }
            exact
          >
            <Contact/>
          </Route>
          <Route
            path={ ROUTES.SERVICES }
            exact
          >
            <Services/>
          </Route>
          <Route
            path={ ROUTES.SHOP }
            exact
          >
            <Shop/>
          </Route>
          <Route
            path={ ROUTES.PRODUCT }
            exact
          >
            <Product/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
