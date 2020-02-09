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
            <h1>History</h1>
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
            <h1>CONTACT</h1>
          </Route>
          <Route
            path={ ROUTES.SERVICES }
            exact
          >
            <h1>SERVICES</h1>
          </Route>
          <Route
            path={ ROUTES.SHOP }
            exact
          >
            <h1>SHOP</h1>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
