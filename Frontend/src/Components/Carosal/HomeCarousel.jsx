import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

export const HomeCarousel = () => {
  const [carouselHeight, setCarouselHeight] = useState('500px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCarouselHeight('200px');
      } else if (window.innerWidth < 1024) {
        setCarouselHeight('350px');
      } else {
        setCarouselHeight('500px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = HomeCarouselData.map((item) => (
    <img 
      key={item.image}
      src={item.image}
      className="cursor-pointer w-full "
      alt={item.alt || ''}
      role="presentation"
      style={{
        height: carouselHeight,
        objectFit: 'cover',
        width: '100%',
        objectPosition: 'center',
      }}
    />
  ));

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <AliceCarousel 
        style={{width:"100%"}}
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls={false}
        disableButtonsControls
      />
    </div>
  );
};