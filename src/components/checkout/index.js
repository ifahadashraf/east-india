import React, { useState } from 'react';
import {Shipping } from "./shipping";
import {ShippingMethod} from "./shipping-method";
import {Billing} from "./billing";
import {Payment} from "./payment";

export const Checkout = () => {
  const [visibility, setVisibility] = useState({
    method: false,
    billing: false,
    payment: false,
  });
  return (
    <main>
      <div className='container'>
        <div className='sub_container_98 pl-mob-1 pr-mob-1'>
          <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
            <div className='mb-mob-2 animated fadeInUp'>
              <div>
                <div>
                  <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24'>
                    Check Out
                  </h1>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  <div className='row mob_order_div'>
                    <div className='col-md-8 col-lg-8 col-sm-12 pr-lg-5 order2 mt-mob-5 pt-mob-2'>
                      <div
                        className='form-inline form_elements field_height40 signInForm checkBoxForm pr-lg-4'
                      >
                        <Shipping
                          onContinue={ data => {
                            setVisibility({
                              ...visibility,
                              method: true,
                            });
                          } }
                        />
                        {
                          visibility.method && <ShippingMethod
                            onContinue={ data => {
                              setVisibility({
                                ...visibility,
                                billing: true,
                              });
                            } }
                          />
                        }
                        {
                          visibility.billing && <Billing
                            onContinue={ data => {
                              setVisibility({
                                ...visibility,
                                payment: true,
                              });
                            } }
                          />
                        }
                        {
                          visibility.payment && <Payment
                            onContinue={ data => console.log(data) }
                          />
                        }
                      </div>
                    </div>

                    <div className='col-md-4 col-lg-4 order1 mt-mob-4'>
                      <div className='col-sm-12 mb-2 px-lg-1 pl-mob-0 pr-mob-0'>
                        <h3 className='fw-extraBold openSans text_color_1 fs-16'>
                          Cart Summary
                        </h3>
                        <hr className='bg_color_1 height1 border-0 mt-4 mb-3 opacity3' />
                      </div>
                      <div className='col-sm-12 tabular_data_grid px-0'>
                        <div className='pull-left product_info_col mt-mob-2 w-100'>
                          <div className='col-data pl-mob-0 pr-mob-0 px-0 pb-3 pt-2'>
                            <div className='product_img pull-left mr-4'>
                              <img
                                src='img/products/product.png'
                                alt='Product Image'
                              />
                            </div>

                            <div className='pull-left product_desc'>
                              <span className='fw-regular openSans text_color_1 fs-16 mb-1'>£9.99</span>
                              <h3 className='fw-regular openSans text_color_1 fs-16 mb-1'>
                                Black Tea
                              </h3>
                              <p className='fw-regular openSans fs-14 lh-20 text_color_5'>
                                This is a short product description
                              </p>
                              <div className='fw-regular openSans fs-14 lh-20 text_color_5'>
                                Qty: <span>1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='clearfix'></div>
                      </div>

                      <div className='col-sm-12 w-100 mt-3 px-0'>
                        <div className='table_footer_data mb-2'>
                          <div className='pull-left fw-regular openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            SubTotal
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            £8.00
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <hr className='bg_color_1 height1 border-0 mt-3 mb-3 opacity3' />
                        <div className='table_footer_data mb-2'>
                          <div className='pull-left fw-regular openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            Delivery
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            £15.00
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <div className='table_footer_data sub_total mt-3 pt-3'>
                          <div className='pull-left fw-extraBold openSans fs-16 text_color_1 mr-4 mr-mob-3 pl-0 pr-mob-1'>
                            Grand Total
                          </div>
                          <div className='pull-right fw-regular openSans fs-16 text_color_1'>
                            £15.00
                          </div>
                          <div className='clearfix'></div>
                        </div>
                        <div className='clearfix'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
