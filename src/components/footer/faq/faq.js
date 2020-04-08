import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../utils/values';

export const FAQ = () => (
  <main>
    <div className='container'>
      <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 '>
        <div className='mb-mob-2'>
          <div className='mob_container animated fadeInUp'>
            <div className='row'>

              <div
                className='sidebar_left sidebar col-lg-3 col-sm-12 col-md-4 text-left mb-sm-5 mb-mob-4 vtab_to_accordion mobile-hidden'
              >

                <div className='breadcrumb_section mobile-hidden '>
                  <ul className='hr_nav font-italic clearfix'>
                    <li>
                      <Link to={ ROUTES.ROOT }>Home </Link>
                      <i
                        className='fa fa-angle-right'
                        aria-hidden='true'
                      />
                    </li>
                    <li className='strong'>FAQs</li>
                  </ul>
                </div>
              </div>


              <div className='col-sm-12'>
                <div className='data_grid'>
                  <div className='row mobile-hidden'>
                    <div className='col-lg-5 col-sm-4 text-left'>
                      <div className='section_sub_title mb-mob-2 mt-lg-2'><h2
                        className='fw-extraBold fs-25 openSans text_color_1'
                                                                          >FAQ's</h2></div>
                    </div>
                    {/*<div className='col-lg-7 col-sm-8 text-left'>*/}
                    {/*  <div className='faq_search'>*/}
                    {/*    <form*/}
                    {/*      action='#'*/}
                    {/*      method='post'*/}
                    {/*    >*/}
                    {/*      <input*/}
                    {/*        type='text'*/}
                    {/*        className='form-control'*/}
                    {/*        id='search'*/}
                    {/*        placeholder='Search....'*/}
                    {/*      /><i*/}
                    {/*        className='fa fa-search'*/}
                    {/*        aria-hidden='true'*/}
                    {/*        ></i>*/}
                    {/*    </form>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>


                  <div className='tab-content border-top-1 mt-3 pt-4 accordion-lg-pad tab_content_outer bt-mob-0'>


                    <div
                      className='tab-pane active'
                      id='delivery_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#deliveryAccordion'
                              aria-expanded='false'
                            >
                              Delivery <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                            ></i>
                            </a>
                          </div>
                          <div
                            id='deliveryAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='deliveryAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faqOne'
                                    >
                                      Do you ship your products to EU? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                       ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faqOne'
                                    className='collapse'
                                    data-parent='#deliveryAccordionChild'
                                  >
                                    <div className='card-body'>
                                      No, currently we do not support EU shipping.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faqTwo'
                                    >
                                      What are the shipping options? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                     ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faqTwo'
                                    className='collapse'
                                    data-parent='#deliveryAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat non.
                                      <div><a href='#'>Read More</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faqThree'
                                    >
                                      What are the international taxes, duties, etc. that I have to pay? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                      ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                                                                                              ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faqThree'
                                    className='collapse'
                                    data-parent='#deliveryAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Facilisis leo vel fringilla est ullamcorper. Venenatis lectus magna fringilla urna
                                      porttitor rhoncus dolor purus. Nulla at volutpat diam ut venenatis tellus in metus
                                      vulputate. Faucibus pulvinar elementum integer enim neque volutpat ac. Consequat
                                      interdum varius sit amet mattis vulputate enim. Pharetra massa massa ultricies mi
                                      quis hendrerit dolor magna eget.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faqFour'
                                    >
                                      When will I receive my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                    ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faqFour'
                                    className='collapse'
                                    data-parent='#deliveryAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Odio tempor orci dapibus ultrices in iaculis nunc sed augue, that you can read
                                      here.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faqFive'
                                    >
                                      What do I do if I never received my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                                 ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faqFive'
                                    className='collapse'
                                    data-parent='#deliveryAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque gravida in
                                      fermentum et sollicitudin. Rhoncus urna neque viverra justo nec ultrices dui
                                      sapien.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='products_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#productsAccordion'
                              aria-expanded='false'
                            >
                              Products <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                            ></i>
                            </a>
                          </div>
                          <div
                            id='productsAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='productsAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq6'
                                    >
                                      What are the international taxes, duties, etc. that I have to pay? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                      ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                                                                                              ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq6'
                                    className='collapse'
                                    data-parent='#productsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Facilisis leo vel fringilla est ullamcorper. Venenatis lectus magna fringilla urna
                                      porttitor rhoncus dolor purus. Nulla at volutpat diam ut venenatis tellus in metus
                                      vulputate. Faucibus pulvinar elementum integer enim neque volutpat ac. Consequat
                                      interdum varius sit amet mattis vulputate enim. Pharetra massa massa ultricies mi
                                      quis hendrerit dolor magna eget.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq7'
                                    >
                                      When will I receive my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                    ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq7'
                                    className='collapse'
                                    data-parent='#productsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Odio tempor orci dapibus ultrices in iaculis nunc sed augue, that you can read
                                      here.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq8'
                                    >
                                      What do I do if I never received my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                                 ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq8'
                                    className='collapse'
                                    data-parent='#productsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque gravida in
                                      fermentum et sollicitudin. Rhoncus urna neque viverra justo nec ultrices dui
                                      sapien.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='moq_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#moqAccordion'
                              aria-expanded='false'
                            >
                              MOQ's <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                         ></i>
                            </a>
                          </div>
                          <div
                            id='moqAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='moqAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq9'
                                    >
                                      What are the shipping options? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                     ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq9'
                                    className='collapse'
                                    data-parent='#moqAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat non.
                                      <div><a href='#'>Read More</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq10'
                                    >
                                      What are the international taxes, duties, etc. that I have to pay? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                      ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                                                                                              ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq10'
                                    className='collapse'
                                    data-parent='#moqAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Facilisis leo vel fringilla est ullamcorper. Venenatis lectus magna fringilla urna
                                      porttitor rhoncus dolor purus. Nulla at volutpat diam ut venenatis tellus in metus
                                      vulputate. Faucibus pulvinar elementum integer enim neque volutpat ac. Consequat
                                      interdum varius sit amet mattis vulputate enim. Pharetra massa massa ultricies mi
                                      quis hendrerit dolor magna eget.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq11'
                                    >
                                      Do you ship your products to EU? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                       ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq11'
                                    className='collapse'
                                    data-parent='#moqAccordionChild'
                                  >
                                    <div className='card-body'>
                                      No, currently we do not support EU shipping.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div
                      className='tab-pane'
                      id='order_issues_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#orderissuesAccordion'
                              aria-expanded='false'
                            >
                              Order Issues <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                                ></i>
                            </a>
                          </div>
                          <div
                            id='orderissuesAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='orderissuesAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq12'
                                    >
                                      What do I do if I never received my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                                 ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq12'
                                    className='collapse'
                                    data-parent='#orderissuesAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque gravida in
                                      fermentum et sollicitudin. Rhoncus urna neque viverra justo nec ultrices dui
                                      sapien.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='payments_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#paymentsAccordion'
                              aria-expanded='false'
                            >
                              Payments <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                            ></i>
                            </a>
                          </div>
                          <div
                            id='paymentsAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='paymentsAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq13'
                                    >
                                      Do you ship your products to EU? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                       ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq13'
                                    className='collapse'
                                    data-parent='#paymentsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      No, currently we do not support EU shipping.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq14'
                                    >
                                      What are the shipping options? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                     ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq14'
                                    className='collapse'
                                    data-parent='#paymentsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat non.
                                      <div><a href='#'>Read More</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='return_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#returnsAccordion'
                              aria-expanded='false'
                            >
                              Returns & Refunds <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                                     ></i>
                            </a>
                          </div>
                          <div
                            id='returnsAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='returnsAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq15'
                                    >
                                      What are the shipping options? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                     ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq15'
                                    className='collapse'
                                    data-parent='#returnsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat non.
                                      <div><a href='#'>Read More</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq16'
                                    >
                                      When will I receive my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                    ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq16'
                                    className='collapse'
                                    data-parent='#returnsAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Odio tempor orci dapibus ultrices in iaculis nunc sed augue, that you can read
                                      here.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='artwork_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#artworkAccordion'
                              aria-expanded='false'
                            >
                              Artwork <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                            </a>
                          </div>
                          <div
                            id='artworkAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='artworkAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq17'
                                    >
                                      When will I receive my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                    ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq17'
                                    className='collapse'
                                    data-parent='#artworkAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Odio tempor orci dapibus ultrices in iaculis nunc sed augue, that you can read
                                      here.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq18'
                                    >
                                      What do I do if I never received my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                                 ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq18'
                                    className='collapse'
                                    data-parent='#artworkAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque gravida in
                                      fermentum et sollicitudin. Rhoncus urna neque viverra justo nec ultrices dui
                                      sapien.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div
                      className='tab-pane'
                      id='custom_print_tab'
                      role='tabpanel'
                    >

                      <div
                        id='accordionOuter'
                        className='accordion_outer2'
                      >
                        <div className='card'>
                          <div className='card-header'>
                            <a
                              className='collapsed card-link'
                              data-toggle='collapse'
                              href='#customPrintAccordion'
                              aria-expanded='false'
                            >
                              Custom Print <i
                                className='fa fa-plus pull-right'
                                aria-hidden='true'
                              ></i><i
                                className='fa fa-minus rotate-icon pull-right'
                                                ></i>
                            </a>
                          </div>
                          <div
                            id='customPrintAccordion'
                            className='collapse'
                            data-parent='#accordionOuter'
                          >
                            <div className='card-body'>

                              <div
                                id='customPrintAccordionChild'
                                className='accordion_inner_content'
                              >
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq19'
                                    >
                                      What are the shipping options? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                     ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq19'
                                    className='collapse'
                                    data-parent='#customPrintAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat cupidatat non.
                                      <div><a href='#'>Read More</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq20'
                                    >
                                      What are the international taxes, duties, etc. that I have to pay? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                      ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                                                                                              ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq20'
                                    className='collapse'
                                    data-parent='#customPrintAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Facilisis leo vel fringilla est ullamcorper. Venenatis lectus magna fringilla urna
                                      porttitor rhoncus dolor purus. Nulla at volutpat diam ut venenatis tellus in metus
                                      vulputate. Faucibus pulvinar elementum integer enim neque volutpat ac. Consequat
                                      interdum varius sit amet mattis vulputate enim. Pharetra massa massa ultricies mi
                                      quis hendrerit dolor magna eget.
                                    </div>
                                  </div>
                                </div>
                                <div className='card'>
                                  <div className='card-header'>
                                    <a
                                      className='collapsed card-link'
                                      data-toggle='collapse'
                                      href='#faq21'
                                    >
                                      What do I do if I never received my order? <i
                                        className='fa fa-plus pull-right'
                                        aria-hidden='true'
                                                                                 ></i><i
                                        className='fa fa-minus rotate-icon pull-right'
                                           ></i>
                                    </a>
                                  </div>
                                  <div
                                    id='faq21'
                                    className='collapse'
                                    data-parent='#customPrintAccordionChild'
                                  >
                                    <div className='card-body'>
                                      Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque gravida in
                                      fermentum et sollicitudin. Rhoncus urna neque viverra justo nec ultrices dui
                                      sapien.
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

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
