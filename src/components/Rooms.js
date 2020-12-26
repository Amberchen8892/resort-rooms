import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import RoomContainer from './RoomContainer';
const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
