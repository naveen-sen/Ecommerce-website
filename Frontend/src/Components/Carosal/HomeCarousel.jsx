import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

export const HomeCarousel = () => {
  const items = HomeCarouselData.map((item) => (
    <img 
      key={item.image}
      src={item.image}
      className="cursor-pointer w-full "
      alt={item.alt || ''}
      role="presentation"
      style={{
        height: '500px',
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