import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../utils/values';

export const News = () => {
  const [blogs, setBlogs] = useState([]);
  const [bannerBlog, setBannerBlog] = useState(null);
  useEffect(() => {
    fetch('https://api.eastindiatea.com/blogs').then(response => response.json()).then(data => {
      if(data.length) {
        setBannerBlog(data[0]);
        const _blogs = [];
        for(let i = 1; i < data.length; i++) {
          _blogs.push(data[i]);
        }
        setBlogs(_blogs);
      }
    });
  }, []);
  return (
    <main>
      <div className='container mg-tp-150'>
        <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
          <div className='mb-mob-2 animated fadeInUp'>
            <div className='row'>
              <div className='col-sm-12'>
                <h1 className='fw-extraBold openSans text_color_1 mt-4 mb-sm-4 mb-mob-0 pb-sm-3 fs-24'>
                  News
                </h1>
              </div>
            </div>
            <div className='row'>
              {
                bannerBlog ? <div className='col-sm-12'>
                  <div className='item'>
                    <Link
                      id='carousel-selector-0'
                      className='selected'
                      data-slide-to='0'
                      data-target='#news_slider'
                      to={ `${ROUTES.NEWS_SINGLE}/${bannerBlog.slug}` }
                    >
                      <div className=''>
                        <div
                          style={ {
                            width: '100%',
                            height: '300px',
                            border: '1px solid #dcdcdc',
                          } }
                        >
                          <Link to={ `${ROUTES.NEWS_SINGLE}/${bannerBlog.slug}` }>
                            <img
                              src={ bannerBlog.image }
                              alt={ bannerBlog.image_alt_text }
                              style={ {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              } }
                            />
                          </Link>
                        </div>
                        <div className='content_box pr-lg-2'>
                          <h4 className='mt-3 mb-2 lh-30'>
                            <Link
                              to={ `${ROUTES.NEWS_SINGLE}/${bannerBlog.slug}` }
                              className='fw-bold fs-20 openSans text_color_1'
                            >
                              { bannerBlog.title }
                            </Link>
                          </h4>
                          <p className='fw-light openSans fs-14 lh-30'>
                            { bannerBlog.short_description }
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div> : ''
              }
            </div>
            <div className='row'>
              {
                blogs.length ? blogs.map(({ slug, title, short_description, image, image_alt_text }) => (
                  <div className='col-sm-3'>
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
                            <h4 className='mt-3 mb-2 lh-30'>
                              <Link
                                to={ `${ROUTES.NEWS_SINGLE}/${slug}` }
                                className='fw-bold fs-20 openSans text_color_1'
                              >
                                { title }
                              </Link>
                            </h4>
                            <p className='fw-light openSans fs-14 lh-30'>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
