import React from 'react';
import {Banner} from "../banner";

export const Contact = () => (
  <>
    <Banner
      title='Contact Us'
    />
    <main>
      <div className='container'>
        <div>
          <div className='mt-mob-3 mt-lg-5 mt-md-5 mt-sm-4 pt-lg-3 mt-md-3 animated fadeInUp contact_info'>
            <div className='mob_container sub_container_75'>
              <div className='row'>
                <div className='col-lg-5 col-sm-12 col-md-12 text-left pr-lg-5 mb-mob-1 pb-mob-1 mb-sm-5'>
                  <h2 className='fw-bold playFairDisplay text_color_1 mb-2 fs-25'>Head Office</h2>
                  <div className='list_box_unstyled mt-lg-4'>
                    <ul>
                      <li className='mb-4'>East India Tea House,<br/>Icone House<br/>Unit 1, Rosslyn Crescent London,
                        Harrow <br/>br>HA1 2SU</li>
                      <li><a href='tel:+44(0)2084279944'>Tel: +44 (0)208 427 9944</a></li>
                      <li>Mon - Fri : 9am - 5pm</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-7 col-sm-12 col-md-12 map_iframe mb-mob-4'>
                  <iframe
                    src='https://www.google.com/maps/embed?
                    pb=!1m18!1m12!1m3!1d2478.8393423031134!2d-0.3322784843826011!3d51.58950777964862
                    !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613829c0e46ed%3A0x7c09efad8fddf4c
                    !2sIcone%20House!5e0!3m2!1sen!2s!4v1577968353965!5m2!1sen!2s'
                    width='469'
                    height='287'
                    frameBorder='0'
                    style={ {
                      border: 0,
                    } }
                    allowFullScreen=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className='mt-lg-4 pt-lg-5 mt-md-5 mt-sm-5 mb-5 mb-lg-5 mt-mob-5 pb-lg-3 pt-mob-3 animated fadeInUp getInTouch mobile-hidden'
          >
            <div className='row'>
              <div className='col-lg-12 title_bar_center'>
                <h2
                  className='fw-bold title_size_40 mob_title_size_40 playFairDisplay text_color_1 mb-3 text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5'
                >Or
                  Message Us..</h2>
              </div>
            </div>
            <div className='mob_container sub_container_75'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0'>
                  <form
                    className='form-inline form_elements field_height66 pr-mob-3 pl-mob-3 mt-md-4 mt-md-5 mt-sm-4'
                    action='#'
                  >
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 pl-lg-0'>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0 grayColor2'
                          id='fName'
                          placeholder='First Name*'
                        /></div>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='lName'
                          placeholder='Last Name*'
                        /></div>
                        <div className='form_field mb-3'><input
                          type='email'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='email'
                          placeholder='Email Address*'
                        /></div>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='phone'
                          placeholder='Phone No.*'
                        /></div>
                      </div>
                      <div className='col-md-6 col-sm-12 pl-lg-3 pr-lg-0'>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='industry'
                          placeholder='Industry*'
                        /></div>
                        <div className='form_field mb-sm-3 mb-mob-0'><textarea
                          className='border-0 gray_light_bg rounded-0 height-web-145 height-mob-83'
                          placeholder='Message*'
                        /></div>
                        <div className='checkBox mt-mob-0 mt-md-4 pt-lg-1'><input
                          type='checkbox'
                          id='agreedTerms'
                          name='agreedTerms'
                          value=''
                        /><label
                          htmlFor='agreedTerms'
                          className='checkbox_label montserrat fw-regular
                          fs-13 text_color_3 mb-0 pr-mob-0 mr-mob-0 text-center'
                        >
                          I understand the Terms of Use of this site & agree to the be contacted by Pouch Shop</label>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-sm-12 form_footer text-center mt-sm-3'>
                        <button
                          type='submit'
                          className='btn btn-primary bg_color_3 border-0 montserrat fw-semiBold fs-14 w-400 py-3 rounded-0 px-5'
                        >
                          <span className='mobile-only'>Agree &amp; </span>Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='clearfix'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);
