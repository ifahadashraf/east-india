import React, {useEffect, useState} from 'react';
import {CartItem} from './cart-item';
import {getBasicPrice, getPrice} from '../../utils/common';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../utils/values';
import {client, queries} from '../../api';

const createPaymentAndPlaceOrder = (checkout, setCheckout, setSubmitting, setSuccessStatus) => {
  setSubmitting(true);
  client.mutate({
    mutation: queries.createPayment(),
    variables: {
      checkoutId: checkout.shipping.data.checkout.id,
      input: {
        amount: checkout.payment.data.amount.toFixed(2),
        billingAddress: { ...checkout.billing.data },
        gateway: 'Stripe',
        token: checkout.payment.data.token,
      },
    },
  })
    .then(resp => {
      if(resp.data.checkoutPaymentCreate.errors.length) {
        alert('Oops ! Something went wrong. Try again later.');
        setSubmitting(false);
      } else {
        client.mutate({
          mutation: queries.completeCheckout(),
          variables: {
            checkoutId: checkout.shipping.data.checkout.id,
          },
        })
          .then(() => {
            setCheckout(null);
            setSubmitting(false);
            setSuccessStatus(true);
            localStorage.clear();
          });
      }
    });
};

export const Review = () => {
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  const [checkout, setCheckout] = useState(JSON.parse(localStorage.getItem('checkout')));
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  return (
    <main>
      { isSuccessful && <div className='container mg-tp-150'>
        <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
          <div className='mb-mob-2 animated fadeInUp'>
            <div >
              <div className='col-sm-12'>
                <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24 text-center'>
                  Thank you. Your order has been placed !
                </h1>
                <Link
                  className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10 btn_100 text-center'
                  style={ {
                    padding: '10px',
                  } }
                  type='submit'
                  to={ ROUTES.SHOP }
                >
                  Return to shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {
        checkout && checkout.payment.data &&
        <div className='container mg-tp-150'>
          <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
            <div className='mb-mob-2 animated fadeInUp'>
              <div >
                <div className='col-sm-12'>
                  <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24'>
                    Review & Confirm
                  </h1>
                </div>
                <div className='col-sm-12'>
                  <div className='col-sm-12 tabular_data_grid mobile-hidden pr-md-0 pl-md-0'>
                    <div className='pull-left product_info_col'>
                      <div className='col-head fw-regular openSans text_color_1 fs-16'>Products</div>
                    </div>
                    <div className='pull-left product_price_col'>
                      <div className='col-head fw-regular openSans text_color_1 fs-16'>Price</div>
                    </div>
                    <div className='pull-left product_quantity_col'>
                      <div className='col-head fw-regular openSans text_color_1 fs-16'>Quantity</div>
                    </div>
                    <div className='pull-left product_price_col'>
                      <div className='col-head fw-regular openSans text_color_1 fs-16'>Total Price</div>
                    </div>
                    <div className='pull-right product_cart_col'>
                      <div className='col-head'/>
                    </div>
                    <div className='clearfix'/>
                  </div>
                </div>
                {
                  items.map(cartItem => (
                    <CartItem
                      data={ cartItem }
                    />
                  ))
                }
              </div>
              <div className='clearfix'>
                <div className='col-sm-12 table_footer pull-right mt-4'>
                  <div className='table_footer_data mb-2'>
                    <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-3 pr-mob-1'>
                      SubTotal
                    </div>
                    <div className='pull-left fw-regular openSans fs-16 text_color_1'>
                      {
                        items.length
                          ? `${ getPrice(items[0].variant)[0] }${ items.reduce((sum, item) => {
                            return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                          }, 0) }`
                          : '-'
                      }
                    </div>
                    <div className='clearfix'/>
                  </div>
                  <div className='table_footer_data mb-2'>
                    <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-3 pr-mob-1'>
                      Delivery
                    </div>
                    <div className='pull-left fw-regular openSans fs-16 text_color_1'>
                      { Object.keys(checkout.method.data).length && getBasicPrice(checkout.method.data.price).join('') }
                    </div>
                    <div className='clearfix'/>
                  </div>
                  <div className='table_footer_data sub_total mt-3 pt-3'>
                    <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-3 pr-mob-1'>
                      SubTotal
                    </div>
                    <div className='pull-left fw-regular openSans fs-16 text_color_1'>
                      {
                        items.length
                          ? `${
                            getPrice(items[0].variant)[0]
                          }${(
                            items.reduce((sum, item) => {
                              return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                            }, 0) + (Object.keys(checkout.method.data).length ? getBasicPrice(checkout.method.data.price)[1] : 0)
                          ).toFixed(2)}`
                          : '-'
                      }
                    </div>
                    <div className='clearfix'/>
                  </div>
                  <div className='clearfix'/>
                </div>
                <div className='clearfix'/>
                <div
                  className='col-sm-12 tabular_form_btn btn_1 mt-3 pt-mob-1 pull-right pr-mob-1 pl-mob-1 text-right mob-text-center'
                >
                  <button
                    className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10 btn_100'
                    style={ {
                      padding: '10px',
                    } }
                    type='submit'
                    disabled={ isLoading }
                    onClick={ () => createPaymentAndPlaceOrder(checkout, setCheckout, setIsLoading, setIsSuccessful) }
                  >
                    {
                      !isLoading ? 'Place Order' : 'Placing order...'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  );
};
