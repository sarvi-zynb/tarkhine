import { Swiper, SwiperSlide } from "swiper/react";
import rectangle from "../../assets/image/common/Rectangle.png";
import rectangleSmall from "../../assets/image/common/RectangleSmall.png";

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
import { useRef, useState } from "react";
import Button from "../buttons/Button";

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
              <i
                className='iconsax text-white text-3xl'
                icon-name='chevron-right'
              ></i>
            </button>
            <p className='text-white font-bold text-sm md:text-base lg:text-3xl'>
              {title}
            </p>
            <button ref={prevRef} className='hidden md:flex'>
              <i
                className='iconsax text-white text-3xl'
                icon-name='chevron-left'
              ></i>
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
