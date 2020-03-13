import React from 'react';
import {client, queries} from '../../../api';
import {Formik} from 'formik';

const postShippingData = (values, setSubmitting, onContinue) => {
  const {
    city,
    companyName,
    country,
    email,
    firstName,
    lastName,
    phone,
    state,
    streetName,
    zipCode,
  } = values;
  const cart = (JSON.parse(localStorage.getItem('cart')) || []).map(item => item.payload);

  if(cart.length) {
    client.mutate({
      mutation: queries.postShippingDetails(),
      variables: {
        checkoutInput: {
          email,
          lines: cart,
          shippingAddress: {
            city,
            country,
            firstName,
            lastName,
            phone,
            postalCode: zipCode,
            streetAddress1: `${companyName} ${streetName}, ${city}, ${state}`,
          },
        },
      },
    })
      .then(resp => {
        setSubmitting(false);
        onContinue(resp.data.checkoutCreate.checkout, values);
      });
  } else {
    alert('No items');
  }
};

export const Shipping = ({ initialValues, onContinue }) => {
  return (
    <div>
      <Formik
        initialValues={ initialValues }
        onSubmit={ (values, { setSubmitting }) => {
          postShippingData(values, setSubmitting, onContinue);
        } }
      >
        { ({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={ handleSubmit }>
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
                    className='form-control'
                    name='firstName'
                    onChange={ handleChange }
                    placeholder='First Name'
                    type='text'
                    value={ values.firstName }
                  />
                </div>

                <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    className='form-control'
                    name='lastName'
                    onChange={ handleChange }
                    placeholder='Last Name'
                    type='text'
                    value={ values.lastName }
                  />
                </div>

                <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    className='form-control'
                    name='streetName'
                    onChange={ handleChange }
                    placeholder='Street Name'
                    type='text'
                    value={ values.streetName }
                  />
                </div>
                <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    name='companyName'
                    placeholder='Company Name (Optional)'
                    onChange={ handleChange }
                    value={ values.companyName }
                  />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    name='zipCode'
                    placeholder='Zip Code'
                    onChange={ handleChange }
                    value={ values.zipCode }
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    id='city'
                    placeholder='City'
                    onChange={ handleChange }
                    value={ values.city }
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    id='state'
                    placeholder='State / Province'
                    onChange={ handleChange }
                    value={ values.state }
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    id='country'
                    placeholder='Country'
                    onChange={ handleChange }
                    value={ values.country }
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email Address'
                    onChange={ handleChange }
                    value={ values.email }
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    placeholder='Phone Number'
                    onChange={ handleChange }
                    value={ values.phone }
                  />
                </div>
                <div className='col-sm-12 pl-0 pr-0 pl-mob-0 pr-mob-0'>
                  <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
                    <button
                      className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
                      type='submit'
                      disabled={ isSubmitting }
                    >
                      {
                        isSubmitting ? 'Please wait...' : 'Continue to Shipping'
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) }
      </Formik>
    </div>
  );
};
