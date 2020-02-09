import React from 'react';
import { Banner} from '../banner';

import pageBanner from '../../img/banners/page-banner.jpg';
import serviceImg from '../../img/services/service-img.jpg';

export const Services = () => (
  <>
    <Banner
      img={ pageBanner }
      title='Our Service'
    />
    <main>
      <div className='container'>
        <div>

          <div className='mt-mob-3 mt-lg-5 mt-md-5 mt-sm-4 pt-lg-3 mt-md-3 animated fadeInUp services_grid'>
            <div className='mob_container'>
              <div className='row'>

                <div className='col-lg-6 col-sm-12 col-md-12 service_grid_boxes grid_left'>
                  <div className='row diplay_vr_center order_div'>
                    <div className='col-sm-8 text-right text_col pr-lg-5 order2 mt-mob-2 pl-mob-0'>
                      <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2'>Wholesale</h2>
                      <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>A leading manufacturer in flexible
                        packaging, Established for over 40 Years, we're trusted by the biggest consumer brands! A
                        leading manufacturer.</p>
                    </div>
                    <div className='col-sm-4 text-right img_col px-0 order1'>
                      <img
                        src={ serviceImg }
                        alt='Wholesale'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-12 col-md-12 service_grid_boxes grid_right'>
                  <div className='row diplay_vr_center order_div'>
                    <div className='col-sm-4 text-left img_col px-0 order1'>
                      <img
                        src={ serviceImg }
                        alt='Distribution'
                      />
                    </div>
                    <div className='col-sm-8 text-left text_col pl-lg-5 order2 mt-mob-2 pl-mob-0'>
                      <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2'>Distribution</h2>
                      <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>A leading manufacturer in flexible
                        packaging, Established for over 40 Years, we're trusted by the biggest consumer brands! A
                        leading manufacturer.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-12 col-md-12 service_grid_boxes grid_left'>
                  <div className='row diplay_vr_center order_div'>
                    <div className='col-sm-8 text-right text_col pr-lg-5 order2 mt-mob-2 pl-mob-0'>
                      <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2'>Consultancy</h2>
                      <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>A leading manufacturer in flexible
                        packaging, Established for over 40 Years, we're trusted by the biggest consumer brands! A
                        leading manufacturer.</p>
                    </div>
                    <div className='col-sm-4 text-right img_col px-0 order1'>
                      <img
                        src={ serviceImg }
                        alt='Consultancy'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-12 col-md-12 service_grid_boxes grid_right'>
                  <div className='row diplay_vr_center order_div'>
                    <div className='col-sm-4 text-left img_col px-0 order1'>
                      <img
                        src={ serviceImg }
                        alt='Private Label'
                      />
                    </div>
                    <div className='col-sm-8 text-left text_col pl-lg-5 order2 mt-mob-2 pl-mob-0'>
                      <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2'>Private Label</h2>
                      <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>A leading manufacturer in flexible
                        packaging, Established for over 40 Years, we're trusted by the biggest consumer brands! A
                        leading manufacturer.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div
            className='mt-lg-5 pt-lg-5 mt-md-5 mt-sm-5 mb-5 mb-lg-5 mt-mob-0 pb-lg-3 pt-mob-3 animated fadeInUp'
          >
            <div className='row'>
              <div className='col-lg-12 title_bar_center'>
                <h2
                  className='fw-bold title_size_45 mob_title_size_30
                  playFairDisplay text_color_1 mb-3 mb-sm-5 pb-lg-3
                  text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5 pb-mob-2'
                >Our
                  Services</h2>
              </div>
            </div>
            <div className='mob_container'>
              <div className='row order_div margin-bottom-140 mb-sm-5'>
                <div className='col-lg-4 col-md-12 text-left img_col px-0 order1'>
                  <img
                    src={ serviceImg }
                    alt='Wholesale'
                  />
                </div>
                <div
                  className='col-lg-8 col-md-12 text-left text_col pl-0 pr-lg-0 order2 mt-lg-0 mt-sm-4 mb-sm-4 mt-mob-2 mb-mob-4 pb-mob-3'
                >
                  <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2 mb-lg-4'>Wholesale</h2>
                  <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>The demand for both loose tea and specialist tea
                    has grown rapidly over the past decade and is still seeing exponential growth, according to Statista
                    the market is expected to grow 46% to 73 Billion USD by 2024 from a mere 50b in 2017. Therefore if
                    you're in the hospitality or retail sector these states further underline the importance of having
                    the ability to offer a wide platter of tea to your consumers.</p>
                </div>
                <div className='clearfix'/>/
              </div>
              <div className='row order_div margin-bottom-140 mb-sm-5'>
                <div
                  className='col-lg-8 col-md-12 text-right text_col pr-0 pl-lg-0 order2 mt-lg-0 mt-sm-4 mb-sm-4 mt-mob-2 mb-mob-4 pb-mob-3'
                >
                  <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2 mb-lg-4'>Distribution</h2>
                  <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet dui lobortis in. Cras pharetra sed massa
                    in faucibus. Nullam bibendum ipsum ac elit convallis luctus. Maecenas feugiat semper purus in
                    mattis. Donec dignissim turpis viverra risus tristique, eu sagittis felis porta. Maecenas vitae sem
                    id mi consequat euismod. Mauris ac enim et elit auctor fermentum vitae in ipsum. Quisque placerat
                    eleifend arcu, vitae hendrerit est mollis quis. Duis rhoncus dignissim quam, non interdum nisi
                    mattis vitae. Etiam euismod metus non ultricies euismod. Curabitur sollicitudin ullamcorper ante, in
                    efficitur nulla viverra ut. Sed cursus enim elementum purus pellentesque laoreet. Cras malesuada
                    sapien aliquet porttitor tristique. Aliquam ullamcorper volutpat massa. In lobortis hendrerit
                    volutpat.</p>
                </div>
                <div className='col-lg-4 col-md-12 text-right img_col px-0 order1'>
                  <img
                    src={ serviceImg }
                    alt='Distribution'
                  />
                </div>
                <div className='clearfix'/>
              </div>
              <div className='row order_div margin-bottom-140 mb-sm-5'>
                <div className='col-lg-4 col-md-12 text-left img_col px-0 order1'>
                  <img
                    src={ serviceImg }
                    alt='Private Label & Contract Packing'
                  />
                </div>
                <div
                  className='col-lg-8 col-md-12 text-left text_col pl-0 pr-lg-0 order2 mt-lg-0 mt-sm-4 mb-sm-4 mt-mob-2 mb-mob-4 pb-mob-3'
                >
                  <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2 mb-lg-4'>Private Label & Contract
                    Packing</h2>
                  <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet dui lobortis in. Cras pharetra sed massa
                    in faucibus. Nullam bibendum ipsum ac elit convallis luctus. Maecenas feugiat semper purus in
                    mattis. Donec dignissim turpis viverra risus tristique, eu sagittis felis porta. Maecenas vitae sem
                    id mi consequat euismod. Mauris ac enim et elit auctor fermentum vitae in ipsum. Quisque placerat
                    eleifend arcu, vitae hendrerit est mollis quis. Duis rhoncus dignissim quam, non interdum nisi
                    mattis vitae. Etiam euismod metus non ultricies euismod. Curabitur sollicitudin ullamcorper ante, in
                    efficitur nulla viverra ut. Sed cursus enim elementum purus pellentesque laoreet. Cras malesuada
                    sapien aliquet porttitor tristique. Aliquam ullamcorper volutpat massa. In lobortis hendrerit
                    volutpat.</p>
                </div>
                <div className='clearfix'/>
              </div>
              <div className='row order_div margin-bottom-140 mb-sm-5'>
                <div
                  className='col-lg-8 col-md-12 text-right text_col pr-0 pl-lg-0 order2 mt-lg-0 mt-sm-4 mb-sm-4 mt-mob-2 mb-mob-0 pb-mob-0'
                >
                  <h2 className='fw-bold fs-25 playFairDisplay text_color_1 mb-2 mb-lg-4'>Consultancy</h2>
                  <p className='fw-light fs-16 lh-30 text_color_5 mb-0'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla tincidunt dignissim eros, ac laoreet dui lobortis in. Cras pharetra sed massa
                    in faucibus. Nullam bibendum ipsum ac elit convallis luctus. Maecenas feugiat semper purus in
                    mattis. Donec dignissim turpis viverra risus tristique, eu sagittis felis porta. Maecenas vitae sem
                    id mi consequat euismod. Mauris ac enim et elit auctor fermentum vitae in ipsum. Quisque placerat
                    eleifend arcu, vitae hendrerit est mollis quis. Duis rhoncus dignissim quam, non interdum nisi
                    mattis vitae. Etiam euismod metus non ultricies euismod. Curabitur sollicitudin ullamcorper ante, in
                    efficitur nulla viverra ut. Sed cursus enim elementum purus pellentesque laoreet. Cras malesuada
                    sapien aliquet porttitor tristique. Aliquam ullamcorper volutpat massa. In lobortis hendrerit
                    volutpat.</p>
                </div>
                <div className='col-lg-4 col-md-12 text-right img_col px-0 order1'>
                  <img
                    src={ serviceImg }
                    alt='Consultancy'
                  />
                </div>
                <div className='clearfix'/>
              </div>
            </div>
          </div>


          <div
            className='mt-lg-4 pt-lg-3 mt-md-5 pt-md-4 mt-sm-5
            mb-5 mb-lg-5 mt-mob-5 pb-lg-5 pb-md-4 pb-sm-3 pt-mob-3
            pb-mob-2 getInTouch animated fadeInUp'
          >
            <div className='row'>
              <div className='col-lg-12 title_bar_center'>
                <h2
                  className='fw-bold title_size_45 mob_title_size_30 playFairDisplay
                  text_color_1 mb-3 text-center pl-sm-3 pr-sm-3 pl-md-5 pr-md-5'
                >Ready
                  to talk?</h2>
              </div>
            </div>
            <div className='mob_container sub_container_75'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-12 text-left pl-mob-0 pr-mob-0'>
                  <form
                    className='form-inline form_elements field_height66 mt-md-4 mt-md-5 mt-sm-4'
                    action='#'
                  >
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 pl-lg-0'>
                        <div className='form_field mb-3'>
                          <input
                            type='text'
                            className='form-control border-0 gray_light_bg rounded-0 grayColor2'
                            id='fName'
                            placeholder='First Name*'
                          />
                        </div>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='lName'
                          placeholder='Last Name*'
                        /></div>
                        <div className='form_field mb-3'><input
                          type='email'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='email'
                          placeholder='Email Address*'
                        /></div>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='phone'
                          placeholder='Phone No.*'
                        /></div>
                      </div>
                      <div className='col-md-6 col-sm-12 pl-lg-3 pr-lg-0'>
                        <div className='form_field mb-3'><input
                          type='text'
                          className='form-control border-0 gray_light_bg rounded-0'
                          id='industry'
                          placeholder='Industry*'
                        /></div>
                        <div className='form_field mb-sm-3 mb-mob-0'>
                          <textarea
                            className='border-0 gray_light_bg rounded-0 height-web-145 height-mob-83'
                            placeholder='Message*'
                          />
                        </div>
                        <div className='checkBox mt-mob-1 mb-mob-3 mt-md-4 pt-lg-1'>
                          <input
                            type='checkbox'
                            id='agreedTerms'
                            name='agreedTerms'
                            value=''
                          />
                          <label
                            htmlFor='agreedTerms'
                            className='checkbox_label montserrat fw-regular fs-13
                            text_color_3 mb-0 pr-mob-0 mr-mob-0 text-center'
                          >
                            I understand the Terms of Use of this site & agree to the be contacted by Pouch Shop
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12 form_footer text-center mt-sm-3'>
                        <button
                          type='submit'
                          className='btn btn-primary bg_color_3 border-0 montserrat fw-semiBold fs-14 w-400 py-3 rounded-0 px-5'
                        >
                          <span className='mobile-only'>Agree &amp; </span>Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='clearfix'/>
              </div>
            </div>
          </div>


        </div>
      </div>
    </main>
  </>
);
