import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/values";

export const Footer = () => (
  <footer
    id='footer'
    className='footer'
  >
    <div className='container'>
      <div className='row mobile-hidden'>
        <div className='col-lg-2 col-md-3 col-sm-4'>
          <div className='footer_col_head'>Contact</div>
          <ul className='content_box_left_icon'>
            <li>
              <span className='pull-left'>+44 (0)208 427 9944</span>
            </li>
            <li>
              <span className='pull-left'><a href='mailto:info@eih.co.uk'>info@eih.co.uk</a></span>
            </li>
            <li>
              <span>Icone House<br/>Unit 1, Rosslyn Crescent<br/>London, Harrow<br/>HA1 2SU</span>
            </li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-3 col-sm-4'>
          <div className='footer_col_head'>Customer Service</div>
          <ul className='f_menu highlightMenu'>
            <li className='h_menu'><a href='contact.html'>Contact</a></li>
            <li className='h_menu'><a href='#'>Payment & Orders</a></li>
            <li className='h_menu'><a href='delivery.html'>Delivery</a></li>
            <li className='proposition_link'><Link to={ ROUTES.FAQ }>FAQ</Link></li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-3 col-sm-4'>
          <div className='footer_col_head'>Information</div>
          <ul className='f_menu highlightMenu'>
            <li><a href='about.html'>About Us</a></li>
            <li><a href='#'>Work With Us</a></li>
            <li><a href='policy.html'> Privacy Policy </a></li>
            <li><Link to={ ROUTES.COOKIE }> Cookie Policy</Link></li>
            <li><Link to={ ROUTES.TERMS }>Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6'>
          <div className='footer_col_head'>TEA's</div>
          <ul className='f_menu highlightMenu'>
            <li><a href='#'> English Tea</a></li>
            <li><a href='#'> Black Tea</a></li>
            <li><a href='#'> White Tea</a></li>
            <li><a href='#'> Fruit Tea</a></li>
            <li><a href='#'> Herbal Tea</a></li>
            <li><a href='#'> Green Tea</a></li>
            <li><a href='#'> Heat Sealers</a></li>
            <li><a href='#'> Coffee Bags</a></li>
            <li><a href='#'> Jerky Bags</a></li>
            <li><a href='#'>Scoops</a></li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-6 newsletter_form'>
          <div className='footer_col_head'>Subscribe to East India Tea House</div>
          <p className='pr-lg-5'>Sign up to our monthly newsletter! Packed with industry trends (We will only send 1
            email a month!)</p>
          <form className='form-inline'>
            <div className='form-group'>
              <input
                className='form-control input-style'
                placeholder='Email Address'
                type='text'
              />
            </div>
            <button className='sub-btn'>SUBSCRIBE</button>
          </form>
          <div className='footer_col_sub_head'>Contact with Us</div>
          <div className='footer_social_links'>
            <a
              href='#'
              className='linkedin'
              target='_blank'
            ><i className='fa fa-linkedin-square'/></a>
            <a
              href='#'
              className='facebook'
              target='_blank'
            ><i className='fa fa-facebook-square'/></a>
            <a
              href='#'
              className='instagram'
              target='_blank'
            ><i className='fa fa-instagram'/></a>
          </div>
        </div>
      </div>
      <div
        id='footer_accordion'
        className='accordion_style1 mobile-only'
      >
        <div className='number-btn'><a href='tel:+44(0)2084279944'><i className='fa fa-phone pull-left'/> +44 (0) 208
          427 9944</a></div>
        <div className='card newsletter_form'>
          <div
            className='card-header'
            id='headingOne'
          >
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                Contact Us <i
                  className='fa fa-plus pull-right'
                  aria-hidden='true'
                />
                <i
                  className='fa fa-minus rotate-icon pull-right'
                /></button>
            </h5>
          </div>
          <div
            id='collapseOne'
            className='collapse'
            aria-labelledby='headingOne'
            data-parent='#footer_accordion'
          >
            <div className='card-body'>
              <p>Sign up to our monthly newsletter! Packed with industry trends (We will only send 1 email a month!)</p>
              <form className='form-inline'>
                <div className='form-group'>
                  <input
                    className='form-control input-style'
                    placeholder='Email Address'
                    type='text'
                  />
                </div>
                <button className='sub-btn'>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <div className='card'>
          <div
            className='card-header'
            id='headingfour'
          >
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                data-toggle='collapse'
                data-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Customer Service
                <i
                  className='fa fa-plus pull-right'
                  aria-hidden='true'
                />
                <i
                  className='fa fa-minus rotate-icon pull-right'
                /></button>
            </h5>
          </div>
          <div
            id='collapseFour'
            className='collapse'
            aria-labelledby='headingfour'
            data-parent='#footer_accordion'
          >
            <div className='card-body'>
              <ul className='f_menu highlightMenu'>
                <li className='h_menu'><a href='contact.html'>Contact</a></li>
                <li className='h_menu'><a href='#'>Payment & Orders</a></li>
                <li className='h_menu'><a href='delivery.html'>Delivery</a></li>
                <li className='proposition_link'><a href='faq.html'>FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div
            className='card-header'
            id='headingThree'
          >
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                data-toggle='collapse'
                data-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Product Categories <i
                  className='fa fa-plus pull-right'
                  aria-hidden='true'
                />
                <i
                  className='fa fa-minus rotate-icon pull-right'
                /></button>
            </h5>
          </div>
          <div
            id='collapseThree'
            className='collapse'
            aria-labelledby='headingThree'
            data-parent='#footer_accordion'
          >
            <div className='card-body'>
              <ul className='f_menu highlightMenu'>
                <li><a href='#'> ECO Packing</a></li>
                <li><a href='#'> Chocolate Bar Pack</a></li>
                <li><a href='#'> Flat Bottom Pouches</a></li>
                <li><a href='#'> Stand Up Pouches</a></li>
                <li><a href='#'> Spout Pouches</a></li>
                <li><a href='#'> Tine Tie Bags </a></li>
                <li><a href='#'> Heat Sealers </a></li>
                <li><a href='#'> Coffee Bags</a></li>
                <li><a href='#'> Jerky Bags</a></li>
                <li><a href='#'> Scoops</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div
            className='card-header'
            id='headingFive'
          >
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                data-toggle='collapse'
                data-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                More Information
                <i
                  className='fa fa-plus pull-right'
                  aria-hidden='true'
                />
                <i
                  className='fa fa-minus rotate-icon pull-right'
                /></button>
            </h5>
          </div>
          <div
            id='collapseFive'
            className='collapse'
            aria-labelledby='headingFive'
            data-parent='#footer_accordion'
          >
            <div className='card-body'>
              <ul className='content_box_left_icon'>
                <li><span className='pull-left'>+44 (0)208 427 9944</span></li>
                <li><span className='pull-left'><a href='mailto:info@eih.co.uk'>info@eih.co.uk</a></span></li>
                <li><span>Icone House<br/>Unit 1, Rosslyn Crescent<br/>London, Harrow<br/>HA1 2SU</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div
            className='card-header'
            id='headingTwo'
          >
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Web Store
                <i
                  className='fa fa-plus pull-right'
                  aria-hidden='true'
                />
                <i className='fa fa-minus rotate-icon pull-right' />
              </button>
            </h5>
          </div>
          <div
            id='collapseTwo'
            className='collapse'
            aria-labelledby='headingTwo'
            data-parent='#footer_accordion'
          >
            <div className='card-body'>
              <ul className='f_menu highlightMenu'>
                <li><a href='#'> Downloads</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer_social_links'>
          <a
            href='#'
            className='linkedin'
            target='_blank'
          ><i className='fa fa-linkedin-square'/></a>
          <a
            href='#'
            className='facebook'
            target='_blank'
          ><i className='fa fa-facebook-square'/></a>
          <a
            href='#'
            className='instagram'
            target='_blank'
          ><i className='fa fa-instagram'/></a>
        </div>
      </div>
    </div>
    <div className='container copyright_bar'>
      <div className='row'>
        <div className='col-md-12 footer_copyright text-center'>
          <p>Copyright 2019 East India | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);
