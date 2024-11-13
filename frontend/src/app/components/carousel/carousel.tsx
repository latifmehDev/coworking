import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  data: {
    image: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    center: true
    //autoplaySpeed: 3000
  };

  return (
    <div>
      <div className='w-80 h-60 rounded-t-lg overflow-hidden'>
        <Slider {...settings}>
          {data.map((v, i) => (
            <div key={i} className='relative w-full h-full'>
              <Image
                className='pointer-events-none'
                alt={`carousel-image-${i}`}
                layout='fill'
                objectFit='cover'
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
