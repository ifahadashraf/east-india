import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../../img/logo.png';
import {CURRENCIES} from "../../../utils/values";

export const Payment = ({ email, amount, currency, onContinue }) => {
  return (
    <div>
      <div
        id='payment'
        className='col-sm-12 pt-4 pt-md-5 height90'
      />

      <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
        <h3 className='fw-regular openSans text_color_1 fs-16'>
          4. Payment Credit/Debit Card
        </h3>
        <hr className='bg_color_1 height1 border-0 mt-mob-2 mb-mob-3 mobile-hidden' />
        <hr className='bg_color_1 mt-mob-2 mb-mob-3 mobile-only ' />
      </div>
      <div>
        <label></label>
        <div className='row'>
          <StripeCheckout
            allowRememberMe={ false }
            amount={ amount * 100 }
            currency={ Object.keys(CURRENCIES).find(key => CURRENCIES[key] === currency) }
            // image='https://stripe.com/img/documentation/checkout/marketplace.png'
            image={ logo }
            locale='auto'
            name='East India'
            // shippingAddress
            stripeKey={ 'pk_test_tmInRLkDVjg2dMdWA20UNcpX00zBa0EiKN' }
            token={ (token) => onContinue(token.id) }
            panelLabel='Pay {{amount}}'
            email={ email }
          >
            {
              <div className='col-sm-12 pl-0 pr-0'>
                <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
                  <button
                    className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
                  >
                    Pay via Credit Card
                  </button>
                </div>
              </div>
            }
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
}
