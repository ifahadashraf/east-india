import React, {useState} from 'react';
import {getBasicPrice} from '../../../../utils/common';

export const MethodCheckBoxGroup = ({checked, methods, onChange}) => {
  const [selectedMethod, setSelectedMethod] = useState(checked.id || null);
  return (
    <>
      {
        methods.map(method => (
          <div className='col-sm-12 col-md-6 form_field mb-2 pr-lg-1 pl-lg-1 pl-mob-0 pr-mob-0'>
            <div className='checkBox checkBoxBorder'>
              <input
                type='checkbox'
                name='selectedOption'
                id='selectedOption'
                value={ method.id }
                onChange={ () => {
                  setSelectedMethod(method.id);
                  onChange(method);
                } }
                checked={ selectedMethod === method.id }
              />
              <label
                htmlFor='selectedOption'
                className='checkbox_label pl-2'
              >
                { method.name }
                { ' | ' }
                { getBasicPrice(method.price).join('') }
              </label>
            </div>
          </div>
        ))
      }
    </>
  );
};
