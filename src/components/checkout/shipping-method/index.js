import React, {useState} from 'react';
import {MethodCheckBoxGroup} from "./method-checkbox";
import {client, queries} from "../../../api";

const postShippingMethodDetails = (checkoutId, shippingMethodId, setSubmitting, onContinue, selectedMethod) => {
  client.mutate({
    mutation: queries.postShippingMethodDetails(),
    variables: {
      checkoutId,
      shippingMethodId,
    },
  })
    .then(() => {
      setSubmitting(false);
      onContinue(selectedMethod);
    });
};

export const ShippingMethod = ({ checkoutId, shippingMethods, checked, onContinue }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isLoading, setLoading] = useState(false);
  return (
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
          <MethodCheckBoxGroup
            checked={ checked }
            methods={ shippingMethods }
            onChange={ method => setSelectedMethod(method) }
          />
          <div className='col-sm-12 pl-0 pr-0 pl-mob-0 pr-mob-0'>
            <div className='btn_2 mt-3 mt-mob-3 pt-mob-1 mob-text-center'>
              <button
                onClick={ () => {
                  postShippingMethodDetails(checkoutId, selectedMethod, setLoading, onContinue, selectedMethod);
                } }
                className='text-white bg_color_3 openSans fw-regular fs-14 rounded-10'
                disabled={ isLoading }
              >
                {
                  isLoading ? 'Please wat...' : 'Continue to Billing'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
