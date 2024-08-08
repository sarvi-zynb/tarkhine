import React, { useState } from "react";
import Card from "../card";

const MultiSlider = ({ cards, title, bgColor }) => {
  const [curr, setCurr] = useState(0);

  const handleNext = () => {
    setCurr((curr) => (curr === cards.length - 1 ? 0 : curr + 1));
  };

  const handlePrev = () => {
    setCurr((curr) => (curr === 0 ? cards.length - 1 : curr - 1));
  };

  return (
    <>
      <div
        className='pr-8 md:pr-16 lg:pr-28 py-10 relative'
        style={{ backgroundColor: `${bgColor}` }}
      >
        <p
          className={
            bgColor
              ? "text-white font-bold text-base md:text-xl lg:text-2xl"
              : "text-[#353535] font-bold text-base md:text-xl lg:text-2xl"
          }
        >
          {title}
        </p>
        <div className='flex gap-1 overflow-x-hidden mt-5'>
          {cards.map((item) => (
            <div
              className='ml-5 transition-transform ease-out duration-500'
              style={{ transform: `translateX(${curr * 100}%)` }}
              key={item.id}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
        <div className='absolute z-10 inset-0 self-center md:mt-20 lg:mt-36 mx-5 md:mx-20 lg:mx-32'>
          <div className='flex justify-between'>
            <button onClick={handlePrev}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-5 md:w-7 xl:w-9 border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
              >
                <path
                  stroke='#757575'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
                ></path>
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-5 md:w-7 xl:w-9 border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
              >
                <path
                  stroke='#757575'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSlider;
