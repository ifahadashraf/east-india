import React from 'react';

export const ShippingMethod = ({ onContinue }) => (
  <>
    <div
      id='shipping'
      className='col-sm-12 pt-4 pt-md-5 height90'
    />

    <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
      <h3 className='fw-regular openSans text_color_1 fs-16'>
        2. Shipping Method
      </h3>
      <hr className='bg_color_1 height1 border-0 mt-mob-2 mb-mob-3 mobile-hidden' />
      <hr className='bg_color_1 mt-mob-2 mb-mob-3 mobile-only ' />
    </div>
    <div style={ { width: '100%' } }>
      <div className='row'>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <div className='checkBox checkBoxBorder'>
            <input
              type='checkbox'
              id='agreedTerms'
              name='agreedTerms'
              value=''
            /><label
              htmlFor='agreedTerms'
              className='checkbox_label pl-2'
            >DHL Next Day | +£18.46</label>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <div className='checkBox checkBoxBorder'>
            <input
              type='checkbox'
              id='agreedTerms'
              name='agreedTerms'
              value=''
            /><label
              htmlFor='agreedTerms'
              className='checkbox_label pl-2'
            >Free Royal Mail 2nd Class |
            +£0.00</label>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <div className='checkBox checkBoxBorder'>
            <input
              type='checkbox'
              id='agreedTerms'
              name='agreedTerms'
              value=''
            /><label
              htmlFor='agreedTerms'
              className='checkbox_label pl-2'
            >DHL Next Day | +£18.46</label>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <div className='checkBox checkBoxBorder'>
            <input
              type='checkbox'
              id='agreedTerms'
              name='agreedTerms'
              value=''
            /><label
              htmlFor='agreedTerms'
              className='checkbox_label pl-2'
            >DHL Next Day | +£18.46</label>
          </div>
        </div>
        <div className='col-sm-12 pl-0 pr-0 pl-mob-0 pr-mob-0'>
          <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
            <button
              onClick={ () => onContinue() }
              className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
            >Continue to
              Billing</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
