import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/values";

export const News = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://api.eastindiatea.com/blogs').then(response => response.json()).then(data => {
      setBlogs(data);
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
