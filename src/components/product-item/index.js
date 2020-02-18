import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/values';

export const ProductItem = ({ data }) => {
  const { id, name, images } = data;
  return(
    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
      <div className='shadow_box rounded-10 text-center'>
        <div className='grid_box_img pl-4 pr-4 pt-1 pl-mob-2 pr-mob-2'>
          <img
            src={ images[0].url }
            alt='Product Image'
          />
        </div>
        <h2 className='SegoeUI fw-light fs-16 text-center box-txt'>
          <Link
            to={ `${ROUTES.PRODUCT}/${id}` }
            className='text_color_3'
          >
            { name }
          </Link>
        </h2>
      </div>
    </div>
  );
};

