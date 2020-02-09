import React from 'react';
import banner from '../../img/banners/page-banner.jpg';
import timeline1 from '../../img/timeline-1.png';
import timeline2 from '../../img/timeline-2.png';
import timeline3 from '../../img/timeline-3.png';
import {Banner} from "../banner";

export const History = () => (
  <>
    <Banner
      img={ banner }
      title='History'
    />
    <main>
      <div className='container'>
        <div>
          <div className='mt-mob-3 mt-lg-5 mt-md-5 mt-sm-4 pt-lg-3 mt-md-3 animated fadeInUp'>
            <div className='sub_container_3'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h2 className='fw-bold fs-16 openSans text_color_5 text-center'>Our Origins</h2>
                  <div className='fw-light fs-16 openSans text_color_5 text-center'>
                    <p>The world famous East India Tea House has been perhaps one of the best-kept secrets in the Food
                      and Beverage Industry.<br/>
                      As an established supplier and blender of premium loose-leaf teas, teabags and accessories, the
                      company has built exceptional reputation for the quality of its blends and its uncompromising
                      services.<br/>
                      The company has been a pioneer in introducing the tea sommelier training courses in the UK and has
                      made a significant impact in bringing fine quality tea’s into the mainstream and onto the high
                      street.<br/>
                      Currently under the stewardship of Shamir Shah, the family owned company has worked tirelessly to
                      provide a one-stop shop for all your tea requirements.</p>
                    <p>Inspired by the rich history, The East India Tea house has travelled to great lands as Africa,
                      India, Sri Lanka, China, Japan, South America, Europe and the Middle East in search of the finest
                      global tea blends. By directly dealing exclusively with tea gardens and artisan tea growers, there
                      is a great amount of assurance that the tea is of the highest quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='mt-lg-4 pt-lg-4 mt-md-5 mt-sm-5 mb-5 mb-lg-5 mt-mob-2 pb-lg-3 pt-mob-3 animated fadeInUp'
          >
            <div className='row'>
              <div className='col-lg-12 title_bar_center'>
                <h2
                  className='fw-bold title_size_35 mob_title_size_30
                    playFairDisplay text_color_1 mb-3 mb-sm-5 pb-lg-3 text-center
                    pl-sm-3 pr-sm-3 pl-md-5 pr-md-5 pb-mob-2'
                >
                  OurTimeline
                </h2>
              </div>
            </div>
            <div className='mob_container'>
              <div className='row'>
                <div className='col-lg-9 col-md-8 vertical_timeline mt-mob-2'>
                  <ul className='timeline'>
                    <li className='timeline-event hvr-sweep-to-right'>
                      <label className='timeline-event-icon'/>
                      <div className='timeline-event-copy'>
                        <p className='timeline-event-thumbnail'>1704</p>
                        <h3
                          className='fw-bold fs-25 mob_title_size_30 playFairDisplay text_color_1 mb-sm-1 mt-3 mt-lg-0 mb-mob-2'
                        >Founded</h3>
                        <p className='fw-light fs-16 lh-30 openSans'>A family farm officially incorporated by our
                          forefathers as a primary supplier to one of the largest trade empires the world has seen to
                          date.</p>
                      </div>
                    </li>
                    <li className='timeline-event hvr-sweep-to-right'>
                      <label className='timeline-event-icon'/>
                      <div className='timeline-event-copy'>
                        <p className='timeline-event-thumbnail'>1760</p>
                        <h3
                          className='fw-bold fs-25 mob_title_size_30 playFairDisplay text_color_1 mb-sm-1 mt-3 mt-lg-0 mb-mob-2'
                        >Our
                          Growth</h3>
                        <p className='fw-light fs-16 lh-30 openSans'>After recognising our dependency on a single buyer
                          we reinvested our earnings and became an independent exporter and retailer of tea across
                          Europe.</p>
                      </div>
                    </li>
                    <li className='timeline-event hvr-sweep-to-right'>
                      <label className='timeline-event-icon'/>
                      <div className='timeline-event-copy'>
                        <p className='timeline-event-thumbnail'>1850</p>
                        <h3
                          className='fw-bold fs-25 mob_title_size_30 playFairDisplay text_color_1 mb-sm-1 mt-3 mt-lg-0 mb-mob-2'
                        >Our
                          Decline</h3>
                        <p className='fw-light fs-16 lh-30 openSans'>A number of environmental factors led to our
                          decline and eventual fall including the first industrial revolution the world had seen. This
                          was followed by the Indian rebellion & start of the British Raj which led to the abolishment
                          of our primary buyer and bringing our exports to a halt. Consecutively the company faced
                          falling demand due to the growing demand for Chinese Tea accompanied with opium.</p>
                      </div>
                    </li>
                    <li className='timeline-event hvr-sweep-to-right'>
                      <label className='timeline-event-icon'/>
                      <div className='timeline-event-copy'>
                        <p className='timeline-event-thumbnail'>1920</p>
                        <h3
                          className='fw-bold fs-25 mob_title_size_30 playFairDisplay text_color_1 mb-sm-1 mt-3 mt-lg-0 mb-mob-2'
                        >Our
                          Rebirth</h3>
                        <p className='fw-light fs-16 lh-30 openSans'>After political and economical stabilisation, the
                          company began trading again solely as a exporter of tea leaves.</p>
                      </div>
                    </li>
                    <li className='timeline-event hvr-sweep-to-right'>
                      <label className='timeline-event-icon'/>
                      <div className='timeline-event-copy'>
                        <p className='timeline-event-thumbnail'>2000</p>
                        <h3
                          className='fw-bold fs-25 mob_title_size_30 playFairDisplay text_color_1 mb-sm-1 mt-3 mt-lg-0 mb-mob-2'
                        >Our
                          Rise</h3>
                        <p className='fw-light fs-16 lh-30 openSans'>With our rich heritage and experience in Tea, we
                          developed ourselves as Tea specialists for luxury hotel chains, high end restaurants and
                          private label service for many supermarket brands in the Middle East, Asia & Europe.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-3 col-md-4 timeline_img_grid pl-lg-0 pr-lg-0 mobile-hidden'>
                  <div className='timeline_img_box'>
                    <img
                      src={ timeline1 }
                      alt='History Image'
                    />
                  </div>
                  <div className='timeline_img_box'>
                    <img
                      src={ timeline2 }
                      alt='History Image'
                    />
                  </div>
                  <div className='timeline_img_box'>
                    <img
                      src={ timeline3 }
                      alt='History Image'
                    />
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
