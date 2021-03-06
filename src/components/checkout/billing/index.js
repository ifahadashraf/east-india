import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import {client, queries} from "../../../api";
import {CountrySelect} from "../../ui/country-select";
import * as Yup from "yup";

const postBillingData = (checkoutId, values, setSubmitting, onContinue) => {
  const {
    city,
    companyName,
    country,
    firstName,
    lastName,
    phone,
    state,
    streetName,
    zipCode,
  } = values;

  client.mutate({
    mutation: queries.postBillingDetails(),
    variables: {
      checkoutId,
      billingAddress: {
        city,
        country,
        firstName,
        lastName,
        phone,
        postalCode: zipCode,
        streetAddress1: `${companyName} ${streetName}, ${city}, ${state}`,
      },
    },
  })
    .then(() => {
      setSubmitting(false);
      onContinue({
        city,
        country,
        firstName,
        lastName,
        phone,
        postalCode: zipCode,
        streetAddress1: `${companyName} ${streetName}, ${city}, ${state}`,
      });
    });
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  streetName: Yup.string()
    .required(),
  zipCode: Yup.string()
    .required(),
  city: Yup.string()
    .required(),
  state: Yup.string()
    .required(),
  country: Yup.string()
    .required(),
  phone: Yup.string()
    .required(),
});

export const Billing = ({ checkoutId, initialValues, onContinue }) => {
  const [isSame, setIsSame] = useState(localStorage.getItem('isSame') || '');
  useEffect(() => {
    localStorage.setItem('isSame', isSame);
  }, [ isSame ]);
  return (
    <div>
      <div
        id='billing'
        className='col-sm-12 pt-4 pt-md-5 height90'
      />

      <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
        <h3 className='fw-regular openSans text_color_1 fs-16'>
          3. Billing Address
        </h3>
        <hr className='bg_color_1 height1 border-0 mt-mob-2 mb-mob-3 mobile-hidden' />
        <hr className='bg_color_1 mt-mob-2 mb-mob-3 mobile-only ' />
      </div>
      <div>
        <div className='row'>
          <div className='col-sm-12 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
            <div className='checkBox'>
              <input
                type='checkbox'
                id='agreedTerms'
                name='agreedTerms'
                onChange={ () => {
                  setIsSame(isSame ? '' : '1');
                } }
                checked={ isSame === '1' }
              />
              <label
                htmlFor='agreedTerms'
                className='checkbox_label'
              >
                Same as shipping address
              </label>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={
              isSame
                ? initialValues
                : Object.keys(initialValues).reduce((obj, key) => {
                  obj[key] = '';
                  return obj;
                }, {}) }
            onSubmit={ (values, { setSubmitting }) => {
              postBillingData(checkoutId, values, setSubmitting, onContinue);
            } }
            validationSchema={ schema }
          >
            { ({ errors, values, handleChange, handleSubmit, isSubmitting, isValid }) => (
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
                      <CountrySelect
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
                    { Object.keys(errors).length ? <label style={ { color: '#8B1C24'} }>Please fill out the required fields.</label> : '' }
                    <div className='col-sm-12 pl-0 pr-0 pl-mob-0 pr-mob-0'>
                      <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
                        <button
                          className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
                          type='submit'
                          disabled={ !isValid || isSubmitting }
                        >
                          {
                            isSubmitting ? 'Please wait...' : 'Continue to Payment'
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
      </div>
    </div>
  );
}
