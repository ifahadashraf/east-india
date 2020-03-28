import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const NewsSingle = () => {
  const { blogSlug } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`http://209.97.138.32:8000/blogs/${blogSlug}`).then(response => response.json()).then(data => {
      setBlog(data);
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
            {
              Object.keys(blog).length ? <div className='row'>
                <div className='col-sm-12'>
                  <div className='item'>
                    <div
                      id='carousel-selector-0'
                      className='selected'
                      data-slide-to='0'
                      data-target='#news_slider'
                    >
                      <div className='img_content_grid'>
                        <div className='fixed_size_img_1' style={{
                          textAlign: 'center',
                        }} >
                          <img
                            src={ blog.image }
                            alt={ blog.image_alt_text }
                          />
                        </div>
                        <div className='content_box pr-lg-2'>
                          <h3 className='mt-3 mb-2 lh-30'>
                            { blog.title }
                          </h3>
                          <div
                            className='fw-light openSans fs-16 lh-30'
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : <div className='pt-mob-4 two_column_grid pb-sm-5 pt-sm-5 pt-5 mb-mob-5 mb-sm-3 mb-md-4'>
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
    </main>
  );
};
