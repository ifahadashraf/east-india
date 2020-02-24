import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/values";

export const ExploreItem = ({
  data: {
    id,
    name,
    description,
    thumbnail,
  },
}) => (
  <div className='col-xs-3'>
    <div className='item'>
      <a
        id='carousel-selector-1'
        className='selected'
        data-slide-to='1'
        data-target='#related_product_slider'
      >
        <div className='img_content_grid'>
          <div className='fixed_size_img_1'>
            <Link to={ `${ROUTES.PRODUCT}/${id}` }>
              <img
                src={ thumbnail.url }
                alt='Product Image'
              />
            </Link>
          </div>
          <div className='content_box pr-lg-2'>
            <h3 className='mt-1 mb-1 lh-30'>
              <Link
                to={ `${ROUTES.PRODUCT}/${id}` }
                className='fw-bold fs-16 playFairDisplay text_color_1'
              >
                { name }
              </Link>
            </h3>
            <p className='fw-light openSans fs-14 lh-20'>
              { description }
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
);
