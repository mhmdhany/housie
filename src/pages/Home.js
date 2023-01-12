import React from 'react';
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
const Home = () => {
  return( 
  <div>
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  </div>)
};

export default Home;
