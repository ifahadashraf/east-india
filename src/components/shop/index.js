import React, {useEffect, useState} from 'react';
import { Banner } from '../banner';
import { ProductItem } from '../product-item';
import { client, queries } from '../../api';
import useGlobalState from "../global";

export const ShopComponent = ({ categories, setCategories }) => {
  const { selectedCategory, setSelectedCategory } = useGlobalState();
  const [selectedCat, setSelectedCat] = useState(selectedCategory);
  const [products, setProducts] = useState([]);
  const [after, setAfter] = useState('');
  const [loadMore, setLoadMore] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [search, setSearch] = useState('');
  useEffect(() => {
    client.query({ query: queries.getNCategories(10) })
      .then(categoryResults => {
        setCategories(categoryResults.data.categories.edges);
        selectedCat || setSelectedCat(categoryResults.data.categories.edges[0].node.id);
      });
  }, [ setCategories ]);
  useEffect(() => {
    if(selectedCat) {
      setLoading(true);
      client.query({ query: queries.getNProducts(6, selectedCat, after, search) })
        .then(productResult => {
          setLoading(false);
          let newState = [];
          if(!after) {
            newState.push(...productResult.data.products.edges);
          } else {
            newState = newState.concat([
              ...products,
              ...productResult.data.products.edges,
            ]);
          }
          if(productResult.data.products.pageInfo.hasNextPage) {
            setAfter(productResult.data.products.pageInfo.endCursor);
            setLoadMore(true);
          } else {
            setLoadMore(false);
          }
          setProducts(newState);
        });
    }
  }, [ setProducts, selectedCat, refresh ]);
  useEffect(() => { setSelectedCat(selectedCategory); }, [selectedCategory]);
  useEffect(() => () => { setSelectedCategory(null); }, []);
  return(
    <>
      <Banner
        title='The Finest Tea'
      />
      <main>
        <div className='container'>
          <div>
            <div className='pt-5 pt-mob-4 two_column_grid'>
              <div className='mb-5 mb-mob-2'>
                <div className='mob_container'>
                  <div className='row'>
                    <div className='sidebar_left sidebar col-lg-3 col-sm-12 col-md-4 text-left pr-lg-0 max-width-20'>
                      <div className='sidebar_nav'>
                        <ul>
                          {
                            categories.map(({node: { id, name }}) => (
                              <li>
                                <a
                                  style={ { cursor: 'pointer' } }
                                  className={ selectedCat === id && 'active' }
                                  onClick={ () => {
                                    setSelectedCat(id);
                                    setProducts([]);
                                    setAfter('');
                                  } }
                                >
                                  { name }
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                        <div className='text-center btn_100'>
                          <a
                            href='#'
                            className='bg_color_3 text-white montserrat fw-semiBold fs-9 rounded-12'
                          >
                            Private Label Service
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-9 col-md-8 col-sm-12 col-xs-12 products_grid mt-mob-3 pl-mob-2 pr-mob-2 pl-lg-4 mt-sm-4 mt-md-0 pad-left-30'
                    >

                      <div className='row mobile-hidden'>
                        <div className='col-lg-7 col-sm-4 text-left'/>
                        <div className='col-lg-5 col-sm-8 text-left pull-right pl-lg-0'>
                          <div className='faq_search inputHeight39'>
                            <form
                              onSubmit={ e => {
                                e.preventDefault();
                                setAfter('');
                                setRefresh(!refresh);
                              } }
                            >
                              <input
                                type='text'
                                className='form-control'
                                id='search'
                                placeholder='Search....'
                                value={ search }
                                onChange={ e => setSearch(e.target.value) }
                              />
                              <i
                                className='fa fa-search'
                                aria-hidden='true'
                                onClick={ () => {
                                  setAfter('');
                                  setRefresh(!refresh);
                                } }
                              />
                            </form>
                          </div>
                        </div>
                        <div className='col-sm-12'>
                          <hr
                            className='mt-sm-3 mb-sm-2 mb-md-0 mt-mob-1 mb-mob-3'
                            style={ {
                              width: '100%',
                              backgroundColor: '#F1F1F1',
                            } }
                          />
                        </div>
                      </div>
                      <div className='row mt-lg-4 pt-lg-2 mt-md-4 mt-sm-4 mt-mob-2'>
                        {
                          (products.length) ? products.map(({ node }) => (
                            <ProductItem
                              data={ node }
                            />
                          ))
                            : 'Loading...'
                        }
                      </div>
                      {
                        products.length ? <button
                          className='bg_color_3 text-white openSans fw-regular fs-14 rounded-10'
                          onClick={ () => setRefresh(!refresh) }
                          style={ {
                            display: loadMore ? 'block' : 'none',
                          } }
                        >
                          {
                            !isLoading ? 'Load More' : 'Loading...'
                          }
                        </button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

