import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/values";

export const ProductTile = ({
  data: {
    id,
    name,
    description,
    thumbnail2x,
  },
}) => (
  <div className='item mb-sm-5'>
    <a
      id='carousel-selector-0'
      className='selected'
      data-slide-to='0'
      data-target='#product_slider1'
    >
      <div className='img_content_grid text-center'>
        <div className='fixed_size_img_1'>
          <img
            src={ thumbnail2x && thumbnail2x.url }
            alt='Tea Bag'
          />
        </div>
        <div className='content_box'>
          <h3 className='mt-3 mb-2'>
            <Link
              to={ `${ROUTES.PRODUCT}/${id}` }
              className='playFairDisplay text_color_2 fs-20 fw-bold'
            >
              { name }
            </Link>
          </h3>
          <p className='lh-22 fw-light fs-16'>
            { description }
          </p>
        </div>
      </div>
    </a>
  </div>
);
