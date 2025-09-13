import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/gif-4mb.gif'
import img2 from '../assets/1.gif'
import img3 from '../assets/2.gif'
import img4 from '../assets/3.gif'
import img5 from '../assets/4.gif'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

const Swiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="md:w-[50%] mx-auto h-80 bg-gray-900 relative">
      <SwiperReact
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center bg-gray-800 text-lg font-bold">
          <img className='w-full h-full' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-700 text-lg font-bold">
        <img className='w-full h-full' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-800 text-lg font-bold">
        <img className='w-full h-full' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900 text-lg font-bold">
        <img className='w-full h-full' src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-800 text-lg font-bold">
        <img className='w-full h-full' src={img5} alt="" />
        </SwiperSlide>
        <div
          className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 text-sm font-bold text-primary"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute w-full h-full stroke-current text-primary rotate-[-90deg]"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              className="fill-none stroke-current stroke-[4px] [stroke-dasharray:125.6] [stroke-dashoffset:calc(125.6px*(1-var(--progress)))]"
            ></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </SwiperReact>
    </div>
  );
};

export default Swiper;
