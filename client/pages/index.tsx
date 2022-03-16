import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Layout from '@/layout/Layout'
import { MdApartment } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { ImOffice } from 'react-icons/im'
import { BiRestaurant } from 'react-icons/bi'
import { SiReasonstudios } from 'react-icons/si'
import { MdVilla } from 'react-icons/md'
import { GoSettings } from "react-icons/go";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Layout title="Home">
        <div className="landing-page">
          <div className="landing-page-background"></div>
          <div className="landing-page-content">
            <h2 className="landing-page-content__title">
              Find the perfect place to
              <br /> Live with your family
            </h2>
            <div className="landing-page-content-filter">
              <form className="landing-page-content-filter-form">
                <div className="landing-page-content-filter-form-buttons">
                  <ul className="landing-page-content-filter-form-buttons-lists">
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span className="active">
                          <MdApartment />
                        </span>
                        Apartments
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <GiCommercialAirplane />
                        </span>
                        Commercial
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <ImOffice />
                        </span>
                        Office
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <BiRestaurant />
                        </span>
                        Restaurant
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <SiReasonstudios />
                        </span>
                        Studio Home
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <MdVilla />
                        </span>
                        Villa
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="landing-page-content-filter-form-search">
                  <div>
                    <input type="text" placeholder="Enter Keyword Here..." />
                  </div>
                  <div>
                    <select placeholder="Select Type">
                      <option value="">Sell</option>
                      <option value="">Buy</option>
                      <option value="">Rent</option>
                    </select>
                  </div>
                  <div>
                    <select placeholder="Select Location">
                      <option value="">New York</option>
                      <option value="">California</option>
                      <option value="">United States</option>
                    </select>
                  </div>
                  <button className='landing-page-content-filter-form-search__setting-button'>
                      <GoSettings />
                    </button>
                  <button className='landing-page-content-filter-form-search__search-button'>Search</button>
                </div>
                <div className='landing-page-content-filter-form-search-info'>
                  <h3>We’ve more than <span>54,000</span> apartments, place & plot.​</h3>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='landing-page-content-clients'>
              <div className='landing-page-content-clients-left'>
                <span className='landing-page-content-clients-left__sub-title'>OUR CLIENTS</span>
                <h2 className='landing-page-content-clients-left__title'>
                  We're going to became partners for the long run
                </h2>
                <p className='landing-page-content-clients-left__description'>Ghen an unknown printer took a galley of type andscr ambledit to make a type specimen book has survived not only five centuries but also.</p>
              </div>
              <div className='landing-page-content-clients-left-right'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div className='landing-page-content-properties'>
              <div>
                <div>
                  <span className='landing-page-content-properties__sub-title'>
                    OUR PROPERTIES
                  </span>
                  <h2 className='landing-page-content-properties__title'>Latest Properties</h2>
                </div>
                <div>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
              <div className='landing-page-content-properties-cards'>
                <div className='landing-page-content-properties-cards-card'>
                  <img className='landing-page-content-properties-cards-card__image' src="" alt="" />
                  <div className='landing-page-content-properties-cards-card-content'>
                    <h2 className='landing-page-content-properties-cards-card-content__title'></h2>
                    <p className='landing-page-content-properties-cards-card-content__description'></p>
                  </div>
                  <div className='landing-page-content-properties-cards-card-content-properties'>
                    <div className='landing-page-content-properties-cards-card-content-properties-beds'></div>
                    <div className='landing-page-content-properties-cards-card-content-properties-baths'></div>
                    <div className='landing-page-content-properties-cards-card-content-properties-sqft'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='landing-page-content-video'>
              <div>
                <video src=""></video>
              </div>
              <div>
                <span></span>
                <h2></h2>
                <p></p>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className='landing-page-content-top-areas'>
              <span></span>
              <h2></h2>
              <div>
                <div></div>
              </div>
            </div>
            <div className='landing-page-content-take-tour'>
            <span></span>
              <h2></h2>
              <button></button>
            </div>
            <div className='landing-page-content-agents'>
              <span></span>
              <h2></h2>
              <div>
                <div>
                  <h2></h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='landing-page-content-become-agent'></div>
            <div className='landing-page-content-real-estate-by-numbers'>
              <h2></h2>
              <p></p>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='landing-page-content-customer-reviews'>
              <span></span>
              <h2></h2>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='landing-page-content-trending'>
              <span></span>
              <h2></h2>
              <div>
                <div></div>
              </div>
            </div>
            <div className='landing-page-content-become-real-estate-agent'>
            </div>
      </Layout>
    </Fragment>
  )
}

export default Home
