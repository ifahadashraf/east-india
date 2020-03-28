import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/animate.min.css';
import './css/owl.carousel.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route, withRouter,
} from 'react-router-dom';

import { Header } from './components/header/container';
import { Home } from './components/home/container';
import { Footer } from './components/footer';
import { History } from './components/history';
import { Services } from './components/services';
import { Contact } from './components/contact';
import { Shop } from './components/shop/container';
import { Product } from './components/product/container';
import {MAIN_ROUTES, ROUTES} from './utils/values';
import { Cart } from './components/cart';
import {Checkout} from './components/checkout';
import {Review} from "./components/review";
import {TermsConditions} from "./components/footer/terms-conditions";
import {CookiePolicy} from "./components/footer/cookie-policy";
import {FAQ} from "./components/footer/faq/faq";
import {News} from "./components/news";
import {NewsSingle} from "./components/news/news-single";


class App extends Component {
  render() {
    return (
      <div
        className={
          `page-wraper ${
            MAIN_ROUTES
              .findIndex( (route) =>
                this.props.location.pathname.split('/')[1].includes(route)
              ) > -1 &&
            'page_without_banner'
          }`
        }>
        <Header
          history={ this.props.history }
        />
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
            <News/>
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
          <Route
            path={ ROUTES.CHECKOUT }
            exact
          >
            <Checkout
              history={ this.props.history }
            />
          </Route>
          <Route
            path={ ROUTES.REVIEW }
            exact
          >
            <Review/>
          </Route>
          <Route
            path={ ROUTES.TERMS }
            exact
          >
            <TermsConditions/>
          </Route>
          <Route
            path={ ROUTES.COOKIE }
            exact
          >
            <CookiePolicy/>
          </Route>
          <Route
            path={ ROUTES.FAQ }
            exact
          >
            <FAQ/>
          </Route>
          <Route
            path={ `${ROUTES.NEWS_SINGLE}/:blogSlug` }
            exact
          >
            <NewsSingle/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
