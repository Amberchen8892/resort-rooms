import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='Luxurious Rooms' subtitle='Deluxe room starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            {' '}
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
