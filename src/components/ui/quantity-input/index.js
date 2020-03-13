import React, { useState} from 'react';

export const QuantityInput = ({ quantity, onChange, className }) => {
  const [qty, setQty] = useState(parseInt(quantity));
  const id = `${new Date().getTime()}inp`;
  return (
    <>
      <input
        className='button-minus'
        data-field='quantity'
        type='button'
        value='-'
        onClick={ () => {
          if(qty > 1) {
            setQty(parseInt(qty - 1));
            onChange(parseInt(qty - 1));
          }
        } }
      />
      <input
        id={ `${id}inp` }
        className={ className }
        min='1'
        name='quantity'
        step='1'
        type='number'
        value={ qty }
        onChange={ e => {
          setQty(parseInt(e.target.value));
          onChange(parseInt(e.target.value));
        } }
      />
      <input
        className='button-minus'
        data-field='quantity'
        type='button'
        value='+'
        onClick={ () => {
          setQty(parseInt(qty + 1));
          onChange(parseInt(qty + 1));
        } }
      />
    </>
  );
};

