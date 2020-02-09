import React from 'react';
import {Banner} from '../banner';
import {ProductItem} from '../product-item';
import {Products} from "../../utils/values";

export const Shop = () => (
  <>
    <Banner
      title='The Finest Tea'
    />
    <main>
      <div className='container'>
        <div>
          <div className='pt-5 pt-mob-4 two_column_grid'>
            <div className='mb-5 mb-mob-2'>
              <div className='mob_container'>
                <div className='row'>
                  <div className='sidebar_left sidebar col-lg-3 col-sm-12 col-md-4 text-left pr-lg-0 max-width-20'>
                    <div className='sidebar_nav'>
                      <ul>
                        <li><a href='#'>Black Tea</a></li>
                        <li><a
                          className='active'
                          href='#'
                        >Herbal Infusions</a></li>
                        <li><a href='#'>White Tea</a></li>
                        <li><a href='#'>Green Tea</a></li>
                        <li><a href='#'>Flowering Tea</a></li>
                        <li><a href='#'>Herbal Infusions</a></li>
                        <li><a href='#'>Spa Tea</a></li>
                        <li><a href='#'>Furit/Ice Tea</a></li>
                        <li><a href='#'>Decaffeinated</a></li>
                        <li><a href='#'>Tea Enclosures</a></li>
                        <li><a href='#'>Gift Sets</a></li>
                      </ul>
                      <div className='text-center btn_100'><a
                        href='#'
                        className='bg_color_3 text-white montserrat fw-semiBold fs-9 rounded-12'
                                                           >Private
                        Label Service</a></div>
                    </div>
                  </div>
                  <div
                    className='col-lg-9 col-md-8 col-sm-12 col-xs-12 products_grid mt-mob-3 pl-mob-2 pr-mob-2 pl-lg-4 mt-sm-4 mt-md-0 pad-left-30'
                  >

                    <div className='row mobile-hidden'>
                      <div className='col-lg-7 col-sm-4 text-left'/>
                      <div className='col-lg-5 col-sm-8 text-left pull-right pl-lg-0'>
                        <div className='faq_search inputHeight39'>
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
                      </div>
                      <div className='col-sm-12'>
                        <hr
                          className='mt-sm-3 mb-sm-2 mb-md-0 mt-mob-1 mb-mob-3'
                          style={ {
                            width: '100%',
                            backgroundColor: '#F1F1F1',
                          } }
                        />
                      </div>
                    </div>

                    <div className='row mt-lg-4 pt-lg-2 mt-md-4 mt-sm-4 mt-mob-2'>
                      {
                        Products.map(item => (
                          <ProductItem
                            data={ item }
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);
