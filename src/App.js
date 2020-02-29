import React, from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/animate.min.css';
import './css/owl.carousel.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header } from './components/header/container';
import { Home } from './components/home/container';
import { Footer } from './components/footer';
import { History } from './components/history';
import { Services } from './components/services';
import { Contact } from './components/contact';
import { Shop } from './components/shop/container';
import { Product } from './components/product/container';
import { ROUTES } from './utils/values';
import { Cart } from './components/cart';

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
            path={ `${ROUTES.PRODUCT}/:productId` }
            exact
          >
            <Product/>
          </Route>
          <Route
            path={ ROUTES.CART }
            exact
          >
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
