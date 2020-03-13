import React, {useEffect, useState} from 'react';
import {CartItem} from './cart-item';
import {getPrice} from '../../utils/common';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/values";

export const Cart = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(items)); }, [items]);
  return (
    <main>
      <div className='container mg-tp-150'>
        <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
          <div className='mb-mob-2 animated fadeInUp'>
            <div
            >
              <div className='col-sm-12'>
                <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24'>
                  Shopping Bag
                </h1>
              </div>
              <div className='col-sm-12'>
                <div className='col-sm-12 tabular_data_grid mobile-hidden pr-md-0 pl-md-0'>
                  <div className='pull-left product_info_col'>
                    <div className='col-head fw-regular openSans text_color_1 fs-16'>Products</div>
                  </div>
                  <div className='pull-left product_price_col'>
                    <div className='col-head fw-regular openSans text_color_1 fs-16'>Price</div>
                  </div>
                  <div className='pull-left product_quantity_col'>
                    <div className='col-head fw-regular openSans text_color_1 fs-16'>Quantity</div>
                  </div>
                  <div className='pull-left product_price_col'>
                    <div className='col-head fw-regular openSans text_color_1 fs-16'>Total Price</div>
                  </div>
                  <div className='pull-right product_cart_col'>
                    <div className='col-head'/>
                  </div>
                  <div className='clearfix'/>
                </div>
              </div>
              {
                items.map(cartItem => (
                  <CartItem
                    data={ cartItem }
                    onDelete={ () => setItems(items.filter(({ variant }) => variant.id !== cartItem.variant.id)) }
                    onQuantityChange={ newQty => {
                      const newItems = [ ...items ];
                      const changedItem = newItems.findIndex(({ variant }) => variant.id === cartItem.variant.id);
                      newItems[changedItem].payload.quantity = newQty;
                      setItems(newItems);
                    } }
                  />
                ))
              }
            </div>
            <div className='clearfix'>
              <div className='col-sm-12 table_footer pull-right mt-4'>
                <div className='table_footer_data mb-2'>
                  <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-3 pr-mob-1'>
                    SubTotal
                  </div>
                  <div className='pull-left fw-regular openSans fs-16 text_color_1'>
                    {
                      items.length
                        ? `${
                          getPrice(items[0].variant)[0]
                        }${
                          items.reduce((sum, item) => {
                            return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                          }, 0)
                        }`
                        : '-'
                    }
                  </div>
                  <div className='clearfix'/>
                </div>
                <div className='table_footer_data sub_total mt-3 pt-3'>
                  <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-3 pr-mob-1'>
                    SubTotal
                  </div>
                  <div className='pull-left fw-regular openSans fs-16 text_color_1'>
                    {
                      items.length
                        ? `${
                          getPrice(items[0].variant)[0]
                        }${
                          items.reduce((sum, item) => {
                            return sum + (item.payload.quantity * getPrice(item.variant)[1]);
                          }, 0)
                        }`
                        : '-'
                    }
                  </div>
                  <div className='clearfix'/>
                </div>
                <div className='clearfix'/>
              </div>
              <div className='clearfix'/>
              <div
                className='col-sm-12 tabular_form_btn btn_1 mt-3 pt-mob-1 pull-right pr-mob-1 pl-mob-1 text-right mob-text-center'
              >
                <Link
                  className='bg_color_3 text-white openSans fw-regular fs-14 rounded-10'
                  to={ ROUTES.CHECKOUT }
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
