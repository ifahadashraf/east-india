import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productImage from '../../img/post-img.jpg';
import { client, queries } from "../../api";

export const ProductComponent = () => {
  const { productId } = useParams();
  const [ product, setProduct ] = useState({});
  useEffect(() => {
    client.query({ query: queries.getProductById(productId) })
      .then(result => setProduct(result.data.product));
  }, [setProduct, productId]);
  return (
    <>
      <main>
        <div className='container'>
          <div className='sub_container_80'>
            <div
              className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5'
              style={ { marginTop: '150px' } }
            >
              <div className='mb-mob-2'>
                <div className='mob_container animated fadeInUp'>
                  <div className='row'>
                    <div className='col-lg-6 col-sm-12 col-md-6 product_thumb pl-mob-0 pr-mob-0'>
                      <div>
                        <img
                          src={ product.images && product.images[0].url }
                          alt='Product Large Image'
                        />
                      </div>
                    </div>
                    <div
                      className='col-lg-6 col-sm-12 col-md-6 product_details pl-lg-0 mt-sm-3 mt-mob-2 pl-mob-0 pr-mob-0'
                    >
                      <h2 className='fw-bold playFairDisplay text_color_1 mb-3 fs-25'>
                        { product.name }
                      </h2>
                      <div className='fw-light fs-16 lh-30 text_color_5 mb-3'>
                        <span>$30.00</span>
                        <br/>
                        <div className='pull-mob-left'>
                          <span>= £23.10</span>
                        </div>
                        <div className='pull-mob-right mt-sm-2'>
                          <span>including 20% VAT</span>
                        </div>
                        <div className='clearfix'/>
                      </div>
                      <form
                        method='post'
                        action='cart.html'
                      >
                        <div className='mob_order_div'>
                          <h3 className='fw-bold openSans text_color_5 mb-2 fs-16 order2'>Size</h3>
                          <div className='radio_selector sizesSelctor pull-left mr-sm-3 mb-2 order3'>
                            {
                              product.variants && product.variants.map(({ name }) => (
                                <>
                                  <input
                                    type='radio'
                                    id='250g'
                                    name='productSize'
                                    value='250g'
                                  />
                                  <label htmlFor='250g'>{ name }</label>
                                </>
                              ))
                            }
                          </div>
                          <div className='radio_selector typeSelector pull-left order1 mb-3'>
                            <input
                              type='radio'
                              id='looseTea'
                              name='productType'
                              value='Loose Tea'
                              checked
                            />
                            <label htmlFor='looseTea'>Loose Tea</label>
                            <input
                              type='radio'
                              id='teaBags'
                              name='productType'
                              value='Tea Bags'
                            />
                            <label htmlFor='teaBags'>Tea Bags</label>
                          </div>
                          <div className='clearfix'/>
                          <div className='fw-bold fs-12 lh-30 text_color_5 openSans order4'><span>SKU: EI100595</span>
                          </div>
                        </div>

                        <div className='mt-3'>
                          <h3 className='fw-bold openSans text_color_5 mb-2 fs-16'>Quantity</h3>
                          <div className='pull-left mr-sm-3 mr-mob-1 mb-mob-1'>
                            <div className='quantity_checker'>
                              <input
                                type='number'
                                className='height39 rounded-10'
                                placeholder='10'
                              />
                            </div>
                          </div>
                          <div className='pull-left btn_1 mt-md-0 mt-lg-0'>
                            <button
                              className='bg_color_3 text-white openSans fw-regular fs-13 rounded-12 border-0 height39'
                            >Add
                              to Cart
                            </button>
                          </div>
                          <div className='clearfix'/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='mt-lg-0 pt-lg-3 mt-md-3 mt-sm-3 mb-0 mb-lg-0 mt-mob-5 pb-lg-2 pt-mob-3 animated fadeInUp mobile-hidden'
            >
              <div>
                <div className='col-lg-12 title_bar_center pl-lg-0 pr-lg-0'>
                  <h2
                    className='fw-bold title_size_25 tab_title_size_25 mob_title_size_30
                    playFairDisplay text_color_1 mt-2 mb-3 pb-2 mb-lg-4 text-center pl-sm-3
                    pr-sm-3 pl-md-5 pr-md-5'
                  >
                    Description
                  </h2>
                  <p className='text-left text_color_5 fs-16 fw-light lh-30'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet dui lobortis in.
                    Cras pharetra sed massa in faucibus. Nullam bibendum ipsum ac elit convallis luctus. Maecenas feugiat semper purus in mattis.
                    Donec dignissim turpis viverra risus tristique, eu sagittis felis porta. Maecenas vitae sem id mi
                    consequat euismod. Mauris ac enim et elit auctor fermentum vitae in ipsum. Quisque placerat eleifend
                    arcu, vitae hendrerit est mollis quis.
                  </p>
                </div>
              </div>
              <div className='product_features'>
                <div className='col-lg-9 pl-lg-0 pr-lg-0 mt-md-4 pt-lg-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2'>
                      <h2 className='fw-bold fs-20 playFairDisplay text_color_1'>Brewing Time</h2>
                      <p className='text_color_5 fs-16 fw-light lh-30'>3-5 Mins</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2'>
                      <h2 className='fw-bold fs-20 playFairDisplay text_color_1'>Origin</h2>
                      <p className='text_color_5 fs-16 fw-light lh-30'>Europe</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2 px-lg-0'>
                      <h2 className='fw-bold fs-20 playFairDisplay text_color_1'>Caffine</h2>
                      <p className='text_color_5 fs-16 fw-light lh-30'>Yes</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 mt-4 mt-sm-2 px-lg-0'>
                      <h2 className='fw-bold fs-20 playFairDisplay text_color_1'>Temperature</h2>
                      <p className='text_color_5 fs-16 fw-light lh-30'>Yes</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'/>
              </div>
            </div>
            <div
              className='mt-lg-3 pt-lg-0 mt-md-3 mt-sm-3 mb-5 mb-lg-5 mt-mob-5 pb-lg-3 pt-mob-3 animated fadeInUp mobile-hidden'
            >
              <div>
                <div className='col-lg-12 title_bar_center'>
                  <h2
                    className='fw-bold title_size_25 tab_title_size_25 mob_title_size_30
                    playFairDisplay text_color_1 mt-2 mb-0 text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5'
                  >
                    Explore..
                  </h2>
                </div>
              </div>
              <div className='mob_container'>
                <div className='row'>
                  <div className='col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0'>
                    <div>

                      <div className='thumbnail_slider3 colm-4 mt-mob-3 mt-sm-4 mt-md-4 pt-md-2'>
                        <div className='sub_container_89'>
                          <div>
                            <div
                              id='related_product_slider'
                              className='carousel slide mobImgHeight174 webExploreProducts'
                            >

                              <div className='carousel-inner'>
                                <div
                                  className='img_content_grid active carousel-item'
                                  data-slide-number='0'
                                >
                                  <div className='fixed_size_img_1'><a href='#'><img
                                    src={ productImage }
                                    alt='Product Image'
                                  /></a></div>
                                  <div className='content_box mob-text-left'>
                                    <h3 className='mt-1 mb-1 lh-30'><a
                                      href='#'
                                      className='fw-bold fs-16 playFairDisplay text_color_1'
                                    >Best
                                      Tea in London</a></h3>
                                    <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='1'
                                >
                                  <div className='fixed_size_img_1'><a href='#'><img
                                    src={ productImage }
                                    alt='Product Image'
                                  /></a></div>
                                  <div className='content_box mob-text-left'>
                                    <h3 className='mt-1 mb-1 lh-30'><a
                                      href='#'
                                      className='fw-bold fs-16 playFairDisplay text_color_1'
                                    >Best
                                      Tea in London</a></h3>
                                    <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='2'
                                >
                                  <div className='fixed_size_img_1'><a href='#'><img
                                    src={ productImage }
                                    alt='Product Image'
                                  /></a></div>
                                  <div className='content_box mob-text-left'>
                                    <h3 className='mt-1 mb-1 lh-30'><a
                                      href='#'
                                      className='fw-bold fs-16 playFairDisplay text_color_1'
                                    >Best
                                      Tea in London</a></h3>
                                    <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='3'
                                >
                                  <div className='fixed_size_img_1'><a href='#'><img
                                    src={ productImage }
                                    alt='Product Image'
                                  /></a></div>
                                  <div className='content_box mob-text-left'>
                                    <h3 className='mt-1 mb-1 lh-30'><a
                                      href='#'
                                      className='fw-bold fs-16 playFairDisplay text_color_1'
                                    >Best
                                      Tea in London</a></h3>
                                    <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                  </div>
                                </div>
                                <a
                                  className='carousel-control-prev'
                                  href='#related_product_slider'
                                  role='button'
                                  data-slide='prev'
                                >
                                  <span
                                    className='carousel-control-prev-icon'
                                    aria-hidden='true'
                                  />
                                  <span className='sr-only'>Previous</span>
                                </a>
                                <a
                                  className='carousel-control-next'
                                  href='#related_product_slider'
                                  role='button'
                                  data-slide='next'
                                >
                                  <span
                                    className='carousel-control-next-icon'
                                    aria-hidden='true'
                                  />
                                  <span className='sr-only'>Next</span>
                                </a>
                              </div>


                              <div className='carousel-indicators'>
                                <div>
                                  <div className='col-xs-3'>
                                    <div className='item'>
                                      <a
                                        id='carousel-selector-0'
                                        className='selected'
                                        data-slide-to='0'
                                        data-target='#related_product_slider'
                                      >
                                        <div className='img_content_grid'>
                                          <div className='fixed_size_img_1'><a href='#'><img
                                            src={ productImage }
                                            alt='Product Image'
                                          /></a></div>
                                          <div className='content_box pr-lg-2'>
                                            <h3 className='mt-1 mb-1 lh-30'><a
                                              href='#'
                                              className='fw-bold fs-16 playFairDisplay text_color_1'
                                            >Black
                                              Tea Recipe</a></h3>
                                            <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className='col-xs-3'>
                                    <div className='item'>
                                      <a
                                        id='carousel-selector-1'
                                        className='selected'
                                        data-slide-to='1'
                                        data-target='#related_product_slider'
                                      >
                                        <div className='img_content_grid'>
                                          <div className='fixed_size_img_1'><a href='#'><img
                                            src={ productImage }
                                            alt='Product Image'
                                          /></a></div>
                                          <div className='content_box pr-lg-2'>
                                            <h3 className='mt-1 mb-1 lh-30'><a
                                              href='#'
                                              className='fw-bold fs-16 playFairDisplay text_color_1'
                                            >Green
                                              Tea</a></h3>
                                            <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className='col-xs-3'>
                                    <div className='item'>
                                      <a
                                        id='carousel-selector-0'
                                        className='selected'
                                        data-slide-to='2'
                                        data-target='#related_product_slider'
                                      >
                                        <div className='img_content_grid'>
                                          <div className='fixed_size_img_1'><a href='#'><img
                                            src={ productImage }
                                            alt='Product Image'
                                          /></a></div>
                                          <div className='content_box pr-lg-2'>
                                            <h3 className='mt-1 mb-1 lh-30'><a
                                              href='#'
                                              className='fw-bold fs-16 playFairDisplay text_color_1'
                                            >Best
                                              Tea in London</a></h3>
                                            <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className='col-xs-3'>
                                    <div className='item'>
                                      <a
                                        id='carousel-selector-0'
                                        className='selected'
                                        data-slide-to='3'
                                        data-target='#related_product_slider'
                                      >
                                        <div className='img_content_grid'>
                                          <div className='fixed_size_img_1'><a href='#'><img
                                            src={ productImage }
                                            alt='Product Image'
                                          /></a></div>
                                          <div className='content_box pr-lg-2'>
                                            <h3 className='mt-1 mb-1 lh-30'><a
                                              href='#'
                                              className='fw-bold fs-16 playFairDisplay text_color_1'
                                            >Tea
                                              Etiquettes</a></h3>
                                            <p className='fw-light openSans fs-14 lh-20'>Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.</p>
                                          </div>
                                        </div>
                                      </a>
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
                  <div className='clearfix'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
