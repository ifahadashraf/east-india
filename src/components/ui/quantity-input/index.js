import React, { useState} from "react";

export const QuantityInput = ({ quantity, onChange, className }) => {
  const [qty, setQty] = useState(quantity);
  return (
    <input
      className={ className }
      min='1'
      name='quantity'
      step='1'
      type='number'
      value={ qty }
      onChange={ e => {
        setQty(e.target.value);
        return onChange(e.target.value);
      } }
    />
  );
};

