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
        <div className='max-md:hidden absolute z-10 inset-0 self-center md:mt-20 lg:mt-36 md:mx-20 lg:mx-32'>
          <div className='flex justify-between'>
            <button onClick={handlePrev}>
              <i
                className='iconsax md:text-xl lg:text-3xl text-[#757575] border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd] hover:font-bold'
                icon-name='chevron-right'
              ></i>
            </button>
            <button onClick={handleNext}>
              <i
                className='iconsax md:text-xl lg:text-3xl text-[#757575] border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd] hover:font-bold'
                icon-name='chevron-left'
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSlider;
