import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';

const MainCarosel = () => {
  const items = mainCaroselData.map((item) => (
    <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt=""  style={{ width: '1500px', height: '500px' }} />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarosel;
