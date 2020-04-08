import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import productImage from '../../img/post-img.jpg';
import { client, queries } from '../../api';
import {getPrice, getPriceRange, isInCart} from '../../utils/common';
import {ExploreItem} from './explore-item';
import useGlobalState from "../global";
import { toast } from 'react-toastify';

export const ProductComponent = () => {
  const {cartCount, setCartCount} = useGlobalState();
  const [qty, setQty] = useState('1');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const { productId } = useParams();
  const [ product, setProduct ] = useState({});
  const [ selectedVariant, setSelectedVariant ] = useState(null);

  useEffect(() => {
    client.query({ query: queries.getProductById(productId) })
      .then(result => setProduct(result.data.product));
  }, [setProduct, productId]);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);
  return (
    <main>
      <div className='container mg-tp-150'>
        {
          Object.keys(product).length
            ? <div className='margin-top-7-lrg sub_container_80'>
              <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5'>
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
                          <span>
                            {
                              selectedVariant
                                ? getPrice(product.variants.find(({ id }) => id === selectedVariant)).join('')
                                : getPriceRange(product)
                            }
                          </span>
                          <div className='pull-mob-right mt-sm-2'>
                            <span>including 20% VAT</span>
                          </div>
                          <div className='clearfix'/>
                        </div>
                        <div className='mob_order_div'>
                          <h3 className='fw-bold openSans text_color_5 mb-2 fs-16 order2'>Size</h3>
                          <div className='radio_selector sizesSelctor pull-left mr-sm-3 mb-2 order3'>
                            {
                              product.variants && product.variants.map(({ id, name }) => (
                                <>
                                  <input
                                    type='radio'
                                    id={ id }
                                    name='productSize'
                                    value={ id }
                                    min={ 1 }
                                    onChange={ () => setSelectedVariant(id) }
                                  />
                                  <label htmlFor={ id }>{ name }</label>
                                </>
                              ))
                            }
                          </div>
                          { /* <div className='radio_selector typeSelector pull-left order1 mb-3'>*/ }
                          { /*  <input*/ }
                          { /*    type='radio'*/ }
                          { /*    id='looseTea'*/ }
                          { /*    name='productType'*/ }
                          { /*    value='Loose Tea'*/ }
                          { /*    checked*/ }
                          { /*  />*/ }
                          { /*  <label htmlFor='looseTea'>Loose Tea</label>*/ }
                          { /*  <input*/ }
                          { /*    type='radio'*/ }
                          { /*    id='teaBags'*/ }
                          { /*    name='productType'*/ }
                          { /*    value='Tea Bags'*/ }
                          { /*  />*/ }
                          { /*  <label htmlFor='teaBags'>Tea Bags</label>*/ }
                          { /* </div>*/ }
                          <div className='clearfix'/>
                          <div className='fw-bold fs-12 lh-30 text_color_5 openSans order4'>
                            <span>
                                SKU: {
                                product.variants.find(({ id }) => id === selectedVariant)
                              && product.variants.find(({ id }) => id === selectedVariant).sku
                              }
                            </span>
                          </div>
                        </div>

                        <div className='mt-3'>
                          <h3 className='fw-bold openSans text_color_5 mb-2 fs-16'>Quantity</h3>
                          <div className='pull-left mr-sm-3 mr-mob-1 mb-mob-1'>
                            <div className='quantity_checker'>
                              <input
                                type='number'
                                className='height39 rounded-10'
                                placeholder='1'
                                value={ qty }
                                onChange={ e => setQty(e.target.value) }
                              />
                            </div>
                          </div>
                          <div className='pull-left btn_1 mt-md-0 mt-lg-0'>
                            <button
                              className='bg_color_3 text-white openSans fw-regular fs-13 rounded-12 border-0 height39'
                              onClick={ () => {
                                setCart([
                                  ...cart,
                                  {
                                    variant: {
                                      ...product.variants.find(({ id }) => id === selectedVariant),
                                      thumbnail: product.thumbnail.url,
                                      description: product.description,
                                      productName: product.name,
                                    },
                                    payload: {
                                      variantId: selectedVariant,
                                      quantity: qty,
                                    },
                                  },
                                ]);
                                setCartCount(cartCount + 1);
                                toast.success('Added to cart successfully !');
                              } }
                              disabled={
                                !selectedVariant
                                  ? true
                                  : isInCart(cart, selectedVariant)
                              }
                            >
                              {
                                isInCart(cart, selectedVariant)
                                  ? 'Added'
                                  : 'Add to Cart'
                              }
                            </button>
                          </div>
                          <div className='clearfix'/>
                        </div>
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
                      {
                        product.description
                      }
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
                                      <p className='fw-light openSans fs-14 lh-20'>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet.
                                      </p>
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
                                  {
                                    product.category.products.edges.map(({ node }) => (
                                      <ExploreItem data={ node } />
                                    ))
                                  }
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
            : <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
              <div className='mb-mob-2 animated fadeInUp'>
                <div >
                  <div className='col-sm-12'>
                    <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24 text-center'>
                      Loading...
                    </h1>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </main>
  );
};
