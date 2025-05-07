import React, { act, useState, useRef } from 'react'
import HomeCard from '../HomeCard/HomeCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@headlessui/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {mens_kurta} from '../../Data/Mens/Men_kurta.js'

function HomesecCarousel({dataName,sectionName}) {
    const [activeIndex,setActiveIndex] = useState(0)
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    

    const slidePrev = ()=>{
        if(carouselRef.current){
            carouselRef.current.slidePrev();
        }
        setActiveIndex(prev => Math.max(prev - 1, 0));
      };
      
    const slideNext = ()=>{
        if(carouselRef.current){
            carouselRef.current.slideNext();
        }
        setActiveIndex(prev => Math.min(prev + 1, dataName ? dataName.length - 1 : 0));
      };
    const onslideChange = ({item})=>setActiveIndex(item)

    const items=dataName ? dataName.slice(0,10).map((item)=><HomeCard product={item}/>):[];
    
  return (
    <div className='w-[100vw] '>
        <h2 className='text-2xl font-bold text-gray-800 text-left px-10'>{sectionName}</h2>
    <div className='relative px-4 lg:px-8 flex flex-col items-center justify-center rounded-lg shadow-neutral-50 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-4'>
        <div className='w-full h-full'>
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          onSlideChange={onslideChange}
          activeIndex={activeIndex}
        />
        {
            activeIndex !==0 && <Button
            onClick={slidePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-2 rotate-180">
               <ArrowForwardIosIcon/>
            </Button>
        }


        {
            activeIndex !== items.length-1 &&<Button
            onClick={slideNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-2 z-10">
               <ArrowForwardIosIcon/>
            </Button>
        }
        </div>
    </div>
    </div>
  )
}

export default HomesecCarousel
