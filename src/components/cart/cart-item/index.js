import React from 'react';
import {getNetTotal, getPrice} from '../../../utils/common';
import {QuantityInput} from "../../ui/quantity-input";

export const CartItem = ({ data }) => {
  const {
    id,
    productName,
    name,
    thumbnail,
    description,
    payload,
  } = data.variant;
  return (
    <div className='col-sm-12 tabular_data_grid mt-mob-4'>
      <div className='row mobile-only'>
        <div className='col-sm-12 tabular_data_grid'>
          <div className='pull-left product_info_col'>
            <div className='col-head fw-regular openSans text_color_1 fs-16'>Products</div>
          </div>
          <div className='pull-left product_price_col mob-justify-center'>
            <div className='col-head fw-regular openSans text_color_1 fs-16'>Price</div>
          </div>
          <div className='clearfix'/>
        </div>
      </div>
      <div className='pull-left product_info_col mt-mob-2'>
        <div className='col-data border-mob-0 pl-mob-0 pr-mob-0'>
          <div className='product_img pull-left mobile-hidden'>
            <img
              src={ thumbnail }
              alt='Product Image'
            />
          </div>
          <div className='pull-left product_desc'>
            <h3 className='fw-regular openSans text_color_1 fs-16 mb-1'>{ `${productName} - ${name}` }</h3>
            <p className='fw-regular openSans fs-14 lh-20 text_color_5'>{ description }</p>
          </div>
        </div>
      </div>
      <div className='pull-left product_price_col mt-mob-2'>
        <div className='col-data border-mob-0 pr-mob-0 mob-justify-center'>
          <div className='fw-regular openSans fs-16 text_color_1'>{ getPrice(data.variant).join('') }</div>
        </div>
      </div>
      <div className='pull-left product_quantity_col'>
        <div className='col-data'>
          <div
            className='pull-right fw-regular openSans text_color_1 fs-16 mobile-only mb-mob-1 mt-mob-1'
          >
            Quantity
          </div>
          <div className='quantity_counter pull-mob-right mb-mob-1 mt-mob-1 pl-sm-1'>
            <div className='input-group'>
              <input
                className='button-minus'
                data-field='quantity'
                type='button'
                value='-'
              />
              <QuantityInput
                className='quantity-field'
                quantity={ data.payload.quantity }
                onChange={ value => {
                  const items = JSON.parse(localStorage.getItem('cart')) || [];
                  const cartItem = items
                    .findIndex(item => item.payload.variantId === id);
                  items[cartItem].payload.quantity = value;
                  localStorage.setItem('cart', JSON.stringify(items));
                } }
              />
              <input
                className='button-minus'
                data-field='quantity'
                type='button'
                value='+'
              />
            </div>
            <div className='clearfix'/>
          </div>
          <div className='clearfix'/>
        </div>
      </div>
      <div className='pull-left product_price_col col_display_block'>
        <div className='col-data'>
          <div className='fw-regular openSans fs-16 text_color_1 mob-text-right w-100 pl-sm-2'>
            { getNetTotal(data.variant, data.payload.quantity) }
          </div>
        </div>
      </div>
      <div className='pull-right product_cart_col col_display_block'>
        <div className='col-data'>
          <div className='product_del bg_color_1 rounded-100 text-white'>
            <i
              className='fa fa-trash'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
      <div className='clearfix'/>
    </div>
  );
};
