import empty_img from "../../assets/image/cart/Empty-page.png";

const Shopping = () => {
  return (
    <>
      <div className='grid col-span-1 lg:col-span-2 gap-4'>
        <div className='md:grid grid-cols-3 justify-between border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M15 2v10c0 1.1-.9 2-2 2H2V6c0-2.21 1.79-4 4-4h9Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
            <p className='text-base'>روش تحویل سفارش</p>
          </div>
          <hr className='md:hidden my-3' />
          <div className='flex items-center gap-2 text-[#717171]'>
            <input
              id='default-radio-1'
              type='radio'
              value=''
              name='default-radio'
              className='w-5 h-5 text-[#00BA88] bg-white border-[#CBCBCB] focus:ring-0'
            />
            <div>
              <label for='default-radio-1' className='text-sm font-medium'>
                ارسال توسط پیک
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className='w-4 md:w-6'
            >
              <path
                d='M12 14h1c1.1 0 2-.9 2-2V2H6c-1.5 0-2.81.83-3.49 2.05'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M2 17c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99A2.016 2.016 0 0 0 16.84 5H15v7c0 1.1-.9 2-2 2h-1'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12ZM2 8h6M2 11h4M2 14h2'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </div>
          <div className='flex items-center gap-2 text-[#717171]'>
            <input
              id='default-radio-2'
              type='radio'
              value=''
              name='default-radio'
              className='w-5 h-5 text-[#00BA88] bg-white border-[#CBCBCB] focus:ring-0'
            />
            <div>
              <label for='default-radio-2' className='text-sm font-medium'>
                تحویل حضوری
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className='w-4 md:w-6'
            >
              <path
                d='M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </div>
        </div>
        <div className='h-[210px] border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex justify-between mb-2'>
            <div className='flex items-center gap-1 text-[#353535]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
                  stroke='#353535'
                  stroke-width='1.5'
                ></path>
                <path
                  d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
                  stroke='#353535'
                  stroke-width='1.5'
                ></path>
              </svg>
              <p className=' text-sm md:text-base'>آدرس ها</p>
            </div>
            <button>
              <div className='flex items-center gap-1 text-[#417F56]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8'
                    stroke='#417F56'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
                <p className='text-xs'>افزودن آدرس</p>
              </div>
            </button>
          </div>
          <hr />
          <div className='relative flex items-center justify-center object-cover mt-2'>
            <img src={empty_img} className='h-[130px] w-[130px]' />
            <p className='absolute text-[#757575] text-[10px] md:text-sm'>
              شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
            </p>
          </div>
        </div>
        <div className='relative h-[169px] border border-[#CBCBCB] rounded-md p-5'>
          <textarea
            style={{ resize: "none" }}
            name='caption'
            value=''
            className='border-none focus:outline-none focus:ring-0 mt-5 rounded-[4px] h-full w-full text-[#F9F9F9] text-sm'
          ></textarea>
          <div className='absolute top-3 flex items-center gap-1 text-[#717171]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59ZM8 13h4M8 17h8'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
            <p className='text-xs md:text-base'>
              توضیحات سفارش <span className='text-xs'>(اختیاری)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
