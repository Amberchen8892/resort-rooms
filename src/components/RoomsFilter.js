import React from 'react';
import { useContext } from 'react';
import { RoomConsumer, RoomContext } from '../context';
import Title from './Title';
// get all unique value
const getUnique = (items, value) => {
  console.log('check items', items);
  console.log('check new set', [...new Set(items.map((item) => item[value]))]);
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
  } = context;
  //get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types];
  console.log('check types value', types);
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get the capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className='filter-container'>
      <Title title='search room' />
      <form className='filter-form'>
        {/* seclect type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* guests */}
        {/* room price */}
        <div className='form-group'>
          <labe htmlFor='price'>rooms price $ {price}</labe>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end room price */}
        {/* size  */}
        <div className='form-group'>
          <label htmlFor='size'>size</label>
          <div className='size-inputs'>
            <input
              type='number'
              min='0'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* end size  */}
        {/* extras */}
        <div className='form-group'>
          <div className='single=extra'>
            <label htmlFor='breakfast'>breakfast</label>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <label htmlFor='pets'>pets</label>
          <div className='single=extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
}
