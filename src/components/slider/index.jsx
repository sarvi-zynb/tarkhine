import { Swiper, SwiperSlide } from "swiper/react";
import rectangle from "../../assets/image/common/Rectangle.png";
import { useRef, useState } from "react";
import rectangleSmall from "../../assets/image/common/RectangleSmall.png";
import Button from "../buttons/Button";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ title, images, btn, clicked }) => {
  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className='relative w-full'>
        <Swiper
          cssMode={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper'
          onInit={() => setInit(true)}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.imgUrl} alt={item.alt} className='w-full' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute z-10 inset-0 self-center'>
          <div className='flex md:justify-between justify-center px-6'>
            <button ref={nextRef} className='hidden md:flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  stroke='#FFF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
                ></path>
              </svg>
            </button>
            <p className='text-white font-bold text-sm md:text-base lg:text-3xl'>
              {title}
            </p>
            <button ref={prevRef} className='hidden md:flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  stroke='#FFF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08'
                ></path>
              </svg>
            </button>
          </div>
          {btn && (
            <div className='flex justify-center mt-5'>
              <Button filled={true} onClick={clicked}>
                سفارش آنلاین غذا
              </Button>
            </div>
          )}
        </div>
        <div className='absolute z-10 inset-0 self-end flex justify-center'>
          <img src={rectangle} className='relative hidden md:flex' />
          {/* <img src={rectangleSmall} className='relative md:hidden' /> */}
          <div className='flex absolute self-center items-center gap-1'>
            {images.map((item, index) => (
              <div
                key={index}
                className='hidden md:flex h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ADADAD] rounded'
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
