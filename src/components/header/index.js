import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import {Link, NavLink} from 'react-router-dom';
import {ROUTES} from '../../utils/values';
import useGlobalState from '../global';
import AsyncSelect from 'react-select/async';
import {client, queries} from '../../api';

const searchData = (query, callback) => {
  client.query({
    query: queries.search(),
    variables: {
      query,
    },
  })
    .then(resp => {
      callback(resp.data.products.edges.map(
        ({ node }) => ({ label: node.name, value: node.id }),
      ));
    });
};

export const HeaderComponent = ({ history }) => {
  const {cartCount, setCartCount} = useGlobalState();
  const [items] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [timeoutCounter, setTimeoutCounter] = useState(0);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setCartCount(items.length);
  }, []);
  return (
    <div className='navbar-fixed-top'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <NavLink
            className='navbar-brand'
            to='/'
          >
            <img
              src={ logo }
              alt='Logo'
            />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'/>
          </button>
          {/*Asal*/}
          <div className='sub_header'>
            <div className='nav_search pull-left header_search'>
              <AsyncSelect
                isClearable
                cacheOptions
                style={ { minWidth: '30px' } }
                placeholder='Search...'
                value={ search }
                onChange={ option => {
                  setSearch('');
                  history.push(`${ROUTES.PRODUCT}/${option.value}`);
                }  }
                loadOptions={ (input, callback) => {
                  clearTimeout(timeoutCounter);
                  input && setTimeoutCounter(setTimeout(() => {
                    searchData(
                      input,
                      callback,
                    );
                  }, 500));
                } }
              />
            </div>
            <div className='pull-right'>
              <div className='header_cart'>
                <Link
                  className='text_color_1'
                  to={ ROUTES.CART }
                >
                  <i
                    className='fa fa-shopping-cart'
                    aria-hidden='true'
                  />
                  <span
                    className='openSans text_color_1 p-2'
                    style={ { fontSize: '13px' } }
                  >
                    { cartCount ? cartCount : '' }
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className='collapse navbar-collapse nav_menu_grid '
        id='navbarSupportedContent'
      >
        <div className='nav_search pull-left header_nav_search'>
          <AsyncSelect
            cacheOptions
            placeholder='Select'
            onChange={ option => {
              history.push(`${ROUTES.PRODUCT}/${option.value}`);
            }  }
            loadOptions={ (input, callback) => {
              clearTimeout(timeoutCounter);
              input && setTimeoutCounter(setTimeout(() => {
                searchData(
                  input,
                  callback,
                );
              }, 500));
            } }
          />
          <form
            action='#'
            method='post'
          >
            <input
              type='text'
              className='form-control'
              id='search'
              placeholder='Search....'
            />
            <i
              className='fa fa-search'
              aria-hidden='true'
            />
          </form>
        </div>
        <ul
          id='myUL'
          className='navbar-nav ml-auto mr-auto highlightMenu slimScrollMegaMenu'
        >
          <li className='nav-item h_menu hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.ROOT }
              exact
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item proposition_link hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.HISTORY }
            >
              History
            </NavLink>
          </li>
          <li className='nav-item h_menu mega-dropdown hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.SERVICES }
            >
              Services
            </NavLink>
          </li>
          <li className='nav-item h_menu hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.CONTACT }
            >
              Contact
            </NavLink>
          </li>
          <li className='nav-item h_menu hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.NEWS }
            >
              News
            </NavLink>
          </li>
          <li className='nav-item h_menu hide_level_1'>
            <NavLink
              activeClassName='current'
              className='nav-link page-scroll'
              to={ ROUTES.SHOP }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
