import React from 'react';

export const Shipping = ({ onContinue }) => (
  <div>
    <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
      <h3 className='fw-regular openSans text_color_1 fs-16'>
        1. Shipping Address
      </h3>
      <hr className='bg_color_1 height1 border-0 mt-mob-2 mb-mob-3 mobile-hidden' />
      <hr className='bg_color_1 mt-mob-2 mb-mob-3 mobile-only ' />
    </div>
    <div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='fName'
            placeholder='First Name'
          />
        </div>

        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='lName'
            placeholder='Last Name'
          />
        </div>

        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='stName'
            placeholder='Street Name'
          />
        </div>

        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='comName'
            placeholder='Company Name (Optional)'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='zipcode'
            placeholder='Zip Code'
          />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='city'
            placeholder='City'
          />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='state'
            placeholder='State / Province'
          />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='country'
            placeholder='Country'
          />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Email Address'
          />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='phone'
            placeholder='Phone Number'
          />
        </div>

        <div className='col-sm-12 pl-0 pr-0 pl-mob-0 pr-mob-0'>
          <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
            <button
              onClick={ () => onContinue('Shipping') }
              className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
            >
              Continue to Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
