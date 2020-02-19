import React, {useEffect} from 'react';
import logo from '../../img/logo.png';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../utils/values';
import {client, queries} from '../../api';

export const HeaderComponent = () => {
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
          <div className='sub_header'>
            <div className='nav_search pull-left header_search'>
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
            <div className='pull-right'>
              <div className='header_cart'>
                <span className='text_color_1'>
                  <i
                    className='fa fa-shopping-cart'
                    aria-hidden='true'
                  />
                </span>
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
