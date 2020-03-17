import React, {useEffect, useState} from 'react';
import {Shipping } from './shipping';
import {ShippingMethod} from './shipping-method';
import {Billing} from './billing';
import {Payment} from './payment';
import {getBasicPrice, getPrice} from "../../utils/common";
import {ROUTES} from "../../utils/values";
import {Link} from "react-router-dom";

export const Checkout = ({ history }) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('checkout')) ||
    {
      method: {
        visibility: false,
        data: {},
      },
      billing: {
        visibility: false,
        data: '',
      },
      payment: {
        visibility: false,
        data: '',
      },
      shipping: {
        data: '',
      },
    });
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  useEffect(() => {
    localStorage.setItem('checkout', JSON.stringify(state));
  }, [ state ]);
  return (
    <main>
      <div className='container'>
        <div className='sub_container_98 pl-mob-1 pr-mob-1'>
          <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
            <div className='mb-mob-2 animated fadeInUp'>
              <div>
                <div>
                  <Link
                    className='text_color_1 openSans fw-bold fs-14 rounded-10 text-center'
                    type='submit'
                    to={ ROUTES.SHOP }
                  >
                    { '< Return to shopping' }
                  </Link>
                  <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24'>
                    Checkout
                  </h1>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  <div className='row mob_order_div'>
                    <div className='col-md-8 col-lg-8 col-sm-12 pr-lg-5 order2 mt-mob-5 pt-mob-2'>
                      <div
                        className='form-inline form_elements field_height40 signInForm checkBoxForm pr-lg-4'
                      >
                        <Shipping
                          initialValues={ state.shipping.data.values || {} }
                          onContinue={ (checkout, values) => {
                            setState({
                              ...state,
                              shipping: {
                                ...state.shipping,
                                data: {
                                  checkout,
                                  values,
                                },
                              },
                              method: {
                                ...state.method,
                                visibility: true,
                              },
                            });
                          } }
                        />
                        {
                          state.method.visibility && <ShippingMethod
                            shippingMethods={ state.shipping.data.checkout.availableShippingMethods }
                            checkoutId={ state.shipping.data.checkout.id }
                            checked={ state.method.data }
                            onContinue={ method => {
                              setState({
                                ...state,
                                method: {
                                  ...state.method,
                                  data: method,
                                },
                                billing: {
                                  ...state.billing,
                                  visibility: true,
                                },
                              });
                            } }
                          />
                        }
                        {
                          state.billing.visibility && <Billing
                            initialValues={ state.shipping.data.values }
                            checkoutId={ state.shipping.data.checkout.id }
                            onContinue={ billingAddress => {
                              setState({
                                ...state,
                                billing: {
                                  ...state.billing,
                                  data: billingAddress,
                                },
                                payment: {
                                  ...state.payment,
                                  visibility: true,
                                },
                              });
                            } }
                          />
                        }
                        {
                          state.payment.visibility && <Payment
                            email={ state.shipping.data.values.email }
                            onContinue={ token => {
                              setState({
                                ...state,
                                payment: {
                                  ...state.payment,
                                  data: {
                                    token,
                                    amount: items.reduce((sum, item) => {
                                      return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                                    }, 0) + (Object.keys(state.method.data).length ? getBasicPrice(state.method.data.price)[1] : 0),
                                  },
                                },
                              });
                              history.push(ROUTES.REVIEW);
                            } }
                            currency={ getPrice(items[0].variant)[0] }
                            amount={
                              items.reduce((sum, item) => {
                                return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                              }, 0) + (Object.keys(state.method.data).length ? getBasicPrice(state.method.data.price)[1] : 0)
                            }
                          />
                        }
                      </div>
                    </div>

                    <div className='col-md-4 col-lg-4 order1 mt-mob-4'>
                      <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
                        <h3 className='fw-extraBold openSans text_color_1 fs-16'>
                          Cart Summary
                        </h3>
                        <hr className='bg_color_1 height1 border-0 mt-4 mb-3 opacity3' />
                      </div>
                      {
                        items.map(item => (
                          <div className='col-sm-12 tabular_data_grid px-0'>
                            <div className='pull-left product_info_col mt-mob-2 w-100'>
                              <div className='col-data pl-mob-0 pr-mob-0 px-0 pb-3 pt-2'>
                                <div className='product_img pull-left mr-4'>
                                  <img
                                    src={ item.variant.thumbnail }
                                    alt='Product Image'
                                  />
                                </div>

                                <div className='pull-left product_desc'>
                                  <span className='fw-regular openSans text_color_1 fs-16 mb-1'>{ getPrice(item.variant).join('') }</span>
                                  <h3 className='fw-regular openSans text_color_1 fs-16 mb-1'>
                                    { `${item.variant.productName} - ${item.variant.name}` }
                                  </h3>
                                  <p className='fw-regular openSans fs-14 lh-20 text_color_5'>
                                    { item.variant.description }
                                  </p>
                                  <div className='fw-regular openSans fs-14 lh-20 text_color_5'>
                                    Qty: <span>{ item.payload.quantity }</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='clearfix'></div>
                          </div>
                        ))
                      }
                      <div className='col-sm-12 w-100 mt-3 px-0'>
                        <div className='table_footer_data mb-2'>
                          <div className='pull-left fw-regular openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            SubTotal
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            {
                              items.length
                                ? `${
                                  getPrice(items[0].variant)[0]
                                }${
                                  items.reduce((sum, item) => {
                                    return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                                  }, 0)
                                }`
                                : '-'
                            }
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <hr className='bg_color_1 height1 border-0 mt-3 mb-3 opacity3' />
                        <div className='table_footer_data mb-2'>
                          <div className='pull-left fw-regular openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            Delivery
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            { Object.keys(state.method.data).length && getBasicPrice(state.method.data.price).join('') }
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <div className='table_footer_data sub_total mt-3 pt-3'>
                          <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            Grand Total
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            {
                              items.length
                                ? `${
                                  getPrice(items[0].variant)[0]
                                }${(
                                  items.reduce((sum, item) => {
                                    return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                                  }, 0) + (Object.keys(state.method.data).length ? getBasicPrice(state.method.data.price)[1] : 0)
                                ).toFixed(2)}`
                                : '-'
                            }
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <div className='clearfix'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
