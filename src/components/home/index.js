import React, {useEffect, useState} from 'react';
import titleBar from '../../img/title-bar.jpg';
import heritageQuality from '../../img/heritage-quality.png';
import servingMasonry from '../../img/serving-masonry.png';
import homeBanner from '../../img/banners/home-banner.jpg';
import wholeSale from '../../img/wholesale.png';
import consultancy from '../../img/consultancy.png';
import privateLabel from '../../img/private-label.png';
import storageDistribution from '../../img/storage-distribution.png';
import postImage from '../../img/post-img.jpg';
import { client, queries } from '../../api';
import {ProductTile} from "./product-tile";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/values";

export const HomeComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client.query({ query: queries.getNProducts(8) })
      .then(productResult => {
        setProducts(productResult.data.products.edges);
      });
  }, [ setProducts ]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://api.eastindiatea.com/blogs').then(response => response.json()).then(data => {
      data.reverse();
      const _blogs = [];
      for(let i = 0; i<3; i++) {
        if(i === data.length) {
          break;
        }
        _blogs.push(data[i]);
      }
      setBlogs(_blogs);
    });
  }, []);
  return(
    <>
      <div className='home_banner'>
        <div className='banner_img'>
          <img
            src={ homeBanner }
            alt='Home Banner'
          />
        </div>
        <div className='banner_caption'>
          <div>
            <h1 className='text-white  fw-bold playFairDisplay'>
              A Taste In Demand since 1704
            </h1>
            <p className='openSans fw-regular text-white'>
              Tantalise your taste buds with the taste of pure tea directly from
              the fields of India. This is dummy text what do you think...
            </p>
            <div className='banner_btn mt-4'>
              <a
                className='bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15'
                href='#'
              >
                View Ranges
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className='container'>
          <div>
            <div className='margin-top-7-lrg mt-mob-4'>
              <div>
                <div>
                  <div className='col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0'>
                    <div>
                      <div className='thumbnail_slider3 colm-4 mt-mob-0 mt-4 mt-md-0 mt-lg-0'>
                        <div>
                          <div id='slider'>
                            <div
                              id='product_slider1'
                              className='carousel slide imgHeight141'
                            >
                              <div className='carousel-inner'>
                                <div
                                  className='img_content_grid active carousel-item text-center'
                                  data-slide-number='0'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Black Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='1'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ titleBar }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Herbal Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='2'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Green Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='3'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Fruit Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='4'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Fruit Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='5'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        White Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='6'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Green Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className='img_content_grid carousel-item'
                                  data-slide-number='7'
                                >
                                  <div className='fixed_size_img_1'>
                                    <img
                                      src={ postImage }
                                      alt='Tea Bag'
                                    />
                                  </div>
                                  <div className='content_box pl-mob-2 pr-mob-2'>
                                    <h3 className='mt-3 mb-2'>
                                      <a
                                        href='#'
                                        className='playFairDisplay text_color_2 fs-20 fw-bold'
                                      >
                                        Fruit Tea
                                      </a>
                                    </h3>
                                    <p className='lh-22 fw-light fs-16'>
                                      A leading manufacturer in flexible
                                      packaging, Established for over 40 Years,
                                      we're trusted by the biggest consumer
                                      brands!
                                    </p>
                                  </div>
                                </div>
                                <a
                                  className='carousel-control-prev'
                                  href='#product_slider1'
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
                                  href='#product_slider1'
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
                              {
                                products.length
                                  ? <div className='carousel-indicators'>
                                    <div className='row'>
                                      {
                                        products.map(({ node }) => (
                                          <div className='col-xs-3'>
                                            <ProductTile
                                              data={ node }
                                            />
                                          </div>
                                        ))
                                      }
                                      <div className='clearfix'/>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-mob-4 mt-lg-5 pt-lg-3 mt-md-3 animated fadeInUp'>
              <div className='mob_container'>
                <div className='row diplay_vr_center order_div'>
                  <div className='col-lg-5 col-sm-12 col-md-6 text-left pr-lg-5 mb-mob-4 pb-mob-1 mb-sm-5 order1'>
                    <div className='title_arrow mb-3'>
                      <img
                        src={ titleBar }
                        alt='Title Bar'
                      />
                    </div>
                    <h2 className='fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30'>
                      A Heritage of Quality since 1700
                    </h2>
                    <p className='openSans fs-16 fw-light lh-30 text_color_5 pr-lg-2'>
                      Once the largest supplier of tea to the world the East India
                      Tea House has been perhaps one of the best kept secrets in
                      the Food & Beverage Industry with its historical past
                      shaping the continents we live in today there no is company
                      that can match our quality & experience.
                    </p>
                    <div className='btn_1 mt-4'>
                      <a
                        className='bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15'
                        href='#'
                      >
                        Our History
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-7 col-sm-12 col-md-6 img_sqaure text-lg-right order2'>
                    <img
                      src={ heritageQuality }
                      alt='Heritage of Quality'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-mob-5 pt-mob-4 mt-lg-5 pt-lg-3 mt-md-3 mt-sm-5 animated fadeInUp'>
              <div className='mob_container'>
                <div className='row diplay_vr_center order_div'>
                  <div className='col-lg-7 col-sm-12 col-md-6 img_sqaure pl-lg-0 text-lg-left order2'>
                    <img
                      src={ servingMasonry }
                      alt='Servings'
                    />
                  </div>
                  <div className='col-lg-5 col-sm-12 col-md-6 pl-lg-5 mb-mob-4 pb-mob-1 order1 mb-sm-5 mob-text-right'>
                    <div className='title_arrow mb-3'>
                      <img
                        src={ titleBar }
                        alt='Title Bar'
                      />
                    </div>
                    <h2 className='fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30'>
                      However you're serving..
                    </h2>
                    <p className='openSans fs-16 fw-light lh-30 text_color_5 pl-lg-0'>
                      We supply tea in all shapes and forms from around the world
                      to match every ambience possible. Whether you're serving tea
                      at 5000ft in the air, or in a boutique hotel we have
                      something for you!
                    </p>
                    <div className='btn_1 mt-4'>
                      <a
                        className='bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15'
                        href='#'
                      >
                        Recipes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-mob-5 pt-mob-4 mt-lg-5 pt-lg-5 mt-md-3 mt-sm-5 animated fadeInUp'>
              <div className='mob_container'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <div className='title_arrow mb-3'>
                      <img
                        src={ titleBar }
                        alt='Title Bar'
                      />
                    </div>
                    <h2 className='fw-bold title_size_40 playFairDisplay text_color_1 mb-2 mob_title_size_30'>
                      A Platter of our Trade Services
                    </h2>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-7 col-sm-12 mb-mob-4 pb-mob-1 mb-sm-5'>
                    <p className='openSans fs-16 fw-light lh-30 text_color_5 pr-lg-0'>
                      Give your hospitality experience the edge with any one of
                      our specialised services ranging from the wholesale of the
                      widest range of tea's, or opt for our consultancy services
                      which includes sourcing, tea training, flavour development,
                      compliance auditing and brand & experience development. We
                      also offer a complete private label service for brands
                      looking for a more end to end service for their tea.
                    </p>
                    <div className='btn_1 mt-4'>
                      <a
                        className='bg_color_1 text-white playFairDisplay fw-regular fs-15 rounded-12 ls-15'
                        href='#'
                      >
                        Our History
                      </a>
                    </div>
                  </div>
                  <div className='col-sm-12 img_masongry_style1 pl-lg-0 pr-lg-0'>
                    <div className='img_box pull-left img01'>
                      <img
                        src={ wholeSale }
                        alt='Wholesale'
                      />
                      <div className='overlay_text'>
                        <h4>
                          <a
                            className='playFairDisplay fw-bold text-white'
                            href='#'
                          >
                            Wholesale
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className='img_box pull-left img02'>
                      <img
                        src={ consultancy }
                        alt='Consultancy'
                      />
                      <div className='overlay_text'>
                        <h4>
                          <a
                            className='playFairDisplay fw-bold text-white'
                            href='#'
                          >
                            Consultancy
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className='img_box pull-left img03'>
                      <img
                        src={ privateLabel }
                        alt='Private Label'
                      />
                      <div className='overlay_text'>
                        <h4>
                          <a
                            className='playFairDisplay fw-bold text-white'
                            href='#'
                          >
                            Private Label
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className='img_box pull-left img04'>
                      <img
                        src={ storageDistribution }
                        alt='Storage & Distribution'
                      />
                      <div className='overlay_text'>
                        <h4>
                          <a
                            className='playFairDisplay fw-bold text-white'
                            href='#'
                          >
                            Storage & Distribution
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-lg-5 pt-lg-5 mt-md-5 mt-sm-5 mb-5 mb-lg-5 mt-mob-5 pb-lg-3 pt-mob-3 animated fadeInUp'>
              <div className='row'>
                <div className='col-lg-12 title_bar_center'>
                  <h2
                    className='fw-bold title_size_40 mob_title_size_30 playFairDisplay text_color_1 mb-3
                    text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5'
                  >
                    Latest News & Articles
                  </h2>
                  <p className='text-center text_color_5 fs-16 fw-light lh-30 sub_container_60'>
                    A leading manufacturer in flexible packaging, Established for
                    over 40 Years, we're trusted by the biggest consumer brands! A
                    leading manufacturer in flexible packaging
                  </p>
                </div>
              </div>
              <div className='mob_container'>
                <div className='row'>
                  <div className='col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0'>
                    <div>
                      <div className='thumbnail_slider3 colm-4 mt-mob-3 mt-sm-4 mt-md-5'>
                        <div>
                          <div>
                            <div
                              id='news_slider'
                              className='carousel slide mobImgHeight174'
                            >
                              <div className='carousel-inner'>
                                {
                                  blogs.length ? blogs.map(({ slug, title, short_description, image, image_alt_text }) => (
                                    <div className='col-sm-4'>
                                      <div className='item'>
                                        <Link
                                          id='carousel-selector-0'
                                          className='selected'
                                          data-slide-to='0'
                                          data-target='#news_slider'
                                          to={ `${ROUTES.NEWS_SINGLE}/${slug}` }
                                        >
                                          <div className='img_content_grid'>
                                            <div className='fixed_size_img_1'>
                                              <Link to={ `${ROUTES.NEWS_SINGLE}/${slug}` }>
                                                <img
                                                  src={ image }
                                                  alt={ image_alt_text }
                                                />
                                              </Link>
                                            </div>
                                            <div className='content_box pr-lg-2'>
                                              <h3 className='mt-3 mb-2 lh-30'>
                                                <Link
                                                  to={ `${ROUTES.NEWS_SINGLE}/${slug}` }
                                                  className='fw-bold fs-22 openSans text_color_1'
                                                >
                                                  { title }
                                                </Link>
                                              </h3>
                                              <p className='fw-light openSans fs-16 lh-30'>
                                                { short_description }
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  )) : <div className='col-sm-12'>
                                    <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24 text-center'>
                                      Loading...
                                    </h1>
                                  </div>
                                }
                                {/*<div*/}
                                {/*  className='img_content_grid active carousel-item'*/}
                                {/*  data-slide-number='0'*/}
                                {/*>*/}
                                {/*  <div className='fixed_size_img_1'>*/}
                                {/*    <a href='#'>*/}
                                {/*      <img*/}
                                {/*        src={ postImage }*/}
                                {/*        alt='Post Image'*/}
                                {/*      />*/}
                                {/*    </a>*/}
                                {/*  </div>*/}
                                {/*  <div className='content_box mob-text-left'>*/}
                                {/*    <h3 className='mt-4 mb-2 lh-30'>*/}
                                {/*      <a*/}
                                {/*        href='#'*/}
                                {/*        className='fw-bold fs-25 openSans text_color_1'*/}
                                {/*      >*/}
                                {/*        Our tea is now available in all Hilton*/}
                                {/*        Hotels in the UK!*/}
                                {/*      </a>*/}
                                {/*    </h3>*/}
                                {/*    <p className='fw-light openSans fs-16 lh-30'>*/}
                                {/*      A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands! A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands!*/}
                                {/*    </p>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                                {/*<div*/}
                                {/*  className='img_content_grid carousel-item'*/}
                                {/*  data-slide-number='1'*/}
                                {/*>*/}
                                {/*  <div className='fixed_size_img_1'>*/}
                                {/*    <a href='#'>*/}
                                {/*      <img*/}
                                {/*        src={ postImage }*/}
                                {/*        alt='Post Image'*/}
                                {/*      />*/}
                                {/*    </a>*/}
                                {/*  </div>*/}
                                {/*  <div className='content_box mob-text-left'>*/}
                                {/*    <h3 className='mt-4 mb-2 lh-30'>*/}
                                {/*      <a*/}
                                {/*        href='#'*/}
                                {/*        className='fw-bold fs-25 openSans text_color_1'*/}
                                {/*      >*/}
                                {/*        Our tea is now available in all Hilton*/}
                                {/*        Hotels in the UK!*/}
                                {/*      </a>*/}
                                {/*    </h3>*/}
                                {/*    <p className='fw-light openSans fs-16 lh-30'>*/}
                                {/*      A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands! A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands!*/}
                                {/*    </p>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                                {/*<div*/}
                                {/*  className='img_content_grid carousel-item'*/}
                                {/*  data-slide-number='2'*/}
                                {/*>*/}
                                {/*  <div className='fixed_size_img_1'>*/}
                                {/*    <a href='#'>*/}
                                {/*      <img*/}
                                {/*        src={ postImage }*/}
                                {/*        alt='Post Image'*/}
                                {/*      />*/}
                                {/*    </a>*/}
                                {/*  </div>*/}
                                {/*  <div className='content_box mob-text-left'>*/}
                                {/*    <h3 className='mt-4 mb-2 lh-30'>*/}
                                {/*      <a*/}
                                {/*        href='#'*/}
                                {/*        className='fw-bold fs-25 openSans text_color_1'*/}
                                {/*      >*/}
                                {/*        Our tea is now available in all Hilton*/}
                                {/*        Hotels in the UK!*/}
                                {/*      </a>*/}
                                {/*    </h3>*/}
                                {/*    <p className='fw-light openSans fs-16 lh-30'>*/}
                                {/*      A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands! A leading manufacturer in flexible*/}
                                {/*      packaging, Established for over 40 Years,*/}
                                {/*      we're trusted by the biggest consumer*/}
                                {/*      brands!*/}
                                {/*    </p>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                                {/*<a*/}
                                {/*  className='carousel-control-prev'*/}
                                {/*  href='#news_slider'*/}
                                {/*  role='button'*/}
                                {/*  data-slide='prev'*/}
                                {/*>*/}
                                {/*  <span*/}
                                {/*    className='carousel-control-prev-icon'*/}
                                {/*    aria-hidden='true'*/}
                                {/*  />*/}
                                {/*  <span className='sr-only'>Previous</span>*/}
                                {/*</a>*/}
                                {/*<a*/}
                                {/*  className='carousel-control-next'*/}
                                {/*  href='#news_slider'*/}
                                {/*  role='button'*/}
                                {/*  data-slide='next'*/}
                                {/*>*/}
                                {/*  <span*/}
                                {/*    className='carousel-control-next-icon'*/}
                                {/*    aria-hidden='true'*/}
                                {/*  />*/}
                                {/*  <span className='sr-only'>Next</span>*/}
                                {/*</a>*/}
                              </div>
                              <div className='carousel-indicators'>
                                <div className='row'>
                                  {
                                    blogs.length ? blogs.map(({ slug, title, short_description, image, image_alt_text }) => (
                                      <div className='col-sm-4'>
                                        <div className='item'>
                                          <Link
                                            id='carousel-selector-0'
                                            className='selected'
                                            data-slide-to='0'
                                            data-target='#news_slider'
                                            to={ `${ROUTES.NEWS_SINGLE}/${slug}` }
                                          >
                                            <div className='img_content_grid'>
                                              <div className='fixed_size_img_1'>
                                                <Link to={ `${ROUTES.NEWS_SINGLE}/${slug}` }>
                                                  <img
                                                    src={ image }
                                                    alt={ image_alt_text }
                                                  />
                                                </Link>
                                              </div>
                                              <div className='content_box pr-lg-2'>
                                                <h3 className='mt-3 mb-2 lh-30'>
                                                  <Link
                                                    to={ `${ROUTES.NEWS_SINGLE}/${slug}` }
                                                    className='fw-bold fs-22 openSans text_color_1'
                                                  >
                                                    { title }
                                                  </Link>
                                                </h3>
                                                <p className='fw-light openSans fs-16 lh-30'>
                                                  { short_description }
                                                </p>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    )) : <div className='col-sm-12'>
                                      <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24 text-center'>
                                        Loading...
                                      </h1>
                                    </div>
                                  }
                                  <div className='clearfix'></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='clearfix'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
