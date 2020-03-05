import React from 'react';

export const Payment = ({ onContinue }) => (
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
      <div className='row'>
        <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
          <input
            type='text'
            className='form-control'
            id='crdNumber'
            placeholder='Card Number'
          />
        </div>

        <div className='clearfix'></div>
        <div className='row'>
          <div className='col-sm-6 px-lg-0 pl-mob-0 pr-mob-0'>
            <div className='row'>
              <div className='col-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-1'>
                <input
                  type='text'
                  className='form-control'
                  id='cvc'
                  placeholder='CVC'
                />
              </div>

              <div className='col-6 form_field mb-2 pr-lg-1 pl-lg-1 pr-mob-0 pl-mob-1'>
                <input
                  type='text'
                  className='form-control'
                  id='cardDate'
                  placeholder='01/04'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 pl-0 pr-0'>
          <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
            <button
              onClick={ () => onContinue() }
              className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
            >
              Continue to Review & Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
