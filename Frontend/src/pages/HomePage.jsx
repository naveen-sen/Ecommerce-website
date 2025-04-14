import React from 'react'
import { HomeCarousel } from '../Components/Carosal/HomeCarousel'
import HomesecCarousel from '../Components/HomeSecCarousel/HomesecCarousel'
import { mens_kurta } from '../Data/Mens/Men_kurta.js'
import Footer from '../Components/Footer/Footer.jsx'

function HomePage() {
  return (
    <div className=' w-full'>
        <HomeCarousel/>
        <div className='max-w-[1280px] mx-auto'>
            <div className='space-y-6 py-10 flex flex-col'>
              <HomesecCarousel dataName={mens_kurta} sectionName={"Men's Kurta"}/>
              <HomesecCarousel dataName={mens_kurta} sectionName={"Men's Shoes"}/>
              <HomesecCarousel dataName={mens_kurta} sectionName={"Women's Kurta"}/>
              
            </div>
        </div>
        </div>
  )
}

export default HomePage