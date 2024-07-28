import React from 'react'
import { mens_kurta } from '../../../Data/mens_kurtas';
import MainCrosel from '../../Components/HomeCarosel/MainCarosel'
import  HomeSectionCarosel  from '../../Components/HomeSectionCarosel/HomeSectionCarosel';

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women Saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women Dresses"}/>
            
        </div>
    </div>
  )
}

export default HomePage;