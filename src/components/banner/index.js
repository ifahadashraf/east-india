import React from 'react';
import banner from '../../img/banners/page-banner.jpg';

export const Banner = ({ img, title }) => (
  <>
    <div className='page_banner'>
      <div className='banner_img'>
        <img
          src={ img || banner }
          alt='Page Banner'
        />
      </div>
      <div className='banner_caption container pr-lg-0 pl-lg-0'>
        <div>
          <h1 className='text_color_4 fw-bold playFairDisplay'>{ title }</h1>
          <p className='openSans fw-regular text_color_4'>From a family farm to supplying the worlds largest trade
            empire, We place 5 Centuries of experience in a cup.</p>
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
  </>
);
