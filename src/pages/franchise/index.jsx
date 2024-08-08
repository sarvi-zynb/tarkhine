import rectangle from "../../assets/image/franchise/Rectangle 3.png";
import Button from "../../components/buttons/Button";
import sliderImage from "../../assets/image/franchise/Slider.png";
const icons = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        className='w-7 md:w-10 lg:w-16 xl:w-24'
      >
        <path
          d='m12.37 2.15 9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0ZM22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3ZM4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7M1 22h22'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
    caption: "بیش از 20 شعبه فعال در سراسر کشور",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        className='w-7 md:w-10 lg:w-16 xl:w-24'
      >
        <path
          d='M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76v-6.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
    caption: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        className='w-7 md:w-10 lg:w-16 xl:w-24'
      >
        <path
          d='M3 22h18M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1ZM12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1ZM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
    caption: "طرح‌های تشویقی ارتقای فروش",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        className='w-7 md:w-10 lg:w-16 xl:w-24'
      >
        <path
          d='M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98ZM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3'
          stroke='#417F56'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
    caption: "اعطای دستورالعمل پخت غذاها",
  },
];
const Franchise = () => {
  return (
    <>
      <div className='relative'>
        <img src={sliderImage} className='w-full' />
        <p className='absolute inset-0 flex items-center justify-center font-bold text-xs md:text-xl lg:text-[40px] text-[#E5F2E9]'>
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </p>
      </div>

      <div className='py-6 md:py-16 px-8 md:px-10 xl:px-28'>
        <div className='grid grid-cols-4 gap-1 lg:gap-2 lg:px-16 justify-center mb-6 lg:mb-12'>
          {icons.map((item, index) => (
            <div className='grid justify-items-center' key={index}>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-40 xl:h-40 flex justify-center items-center border-2 lg:border-4 border-[#417F56] rounded-full'>
                {item.icon}
              </div>
              <p className='text-[#353535] text-center text-[8px] md:text-xs lg:text-base xl:text-lg mt-1 md:mt-2 lg:mt-4'>
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <hr />

        <div className='text-[#353535] my-6 lg:my-12'>
          <p className='text-center font-bold text-sm md:text-lg lg:text-xl xl:text-2xl'>
            مزیت دریافت نمایندگی
          </p>

          <div className='flex justify-center text-[8px] md:text-xs lg:text-lg xl:text-xl gap-2 md:gap-6 lg:gap-12 xl:gap-20 mt-5'>
            <div>
              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>استفاده از برند شناخته شده ترخینه</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h- md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>به حداقل رساندن ریسک سرمایه گذاری</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>تسریع روند بازگشت سرمایه</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>مشاوره های تخصصی جهت مدیریت رستوران</p>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>مشاوره در امور حقوقی، مالی و مالیاتی</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>پشتیبانی بازاریابی و منابع انسانی</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات</p>
              </div>

              <div className='flex items-center gap-1 mt-4'>
                <img
                  src={rectangle}
                  className='w-2 h-2 md:w-3 md:h-3 xl:w-4 xl:h-4'
                />
                <p>طرح های تشویقی برای ارتقا فروش</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className='my-6 lg:my-12'>
          <p className='text-[#353535] text-center font-bold text-sm md:text-lg lg:text-xl xl:text-2xl'>
            دریافت مشاوره
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 justify-center gap-2 md:gap-5 mt-5'>
            <input
              placeholder='نام و نام خانوادگی'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-sm'
              type='text'
            />
            <input
              placeholder='شماره تماس'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='number'
            />
            <input
              placeholder='زمان ایده آل'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
          </div>
          <div className='flex justify-center mt-3 md:mt-5'>
            <Button filled={true}>درخواست مشاوره</Button>
          </div>
        </div>

        <hr />

        <div className='border md:border-[#CBCBCB] rounded-md p-5 mt-8 lg:mt-12'>
          <p className='text-[#353535] text-center font-bold text-sm md:text-lg lg:text-xl xl:text-2xl'>
            فرم درخواست نمایندگی
          </p>

          <p className='text-[#353535] mt-10 text-xs md:text-base xl:text-lg'>
            مشخصات فردی متقاضی
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 mt-5'>
            <input
              placeholder='نام و نام خانوادگی'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
            <input
              placeholder='کد ملی'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='number'
            />
            <input
              placeholder='شماره تماس'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='number'
            />
          </div>

          <p className='text-[#353535] mt-10 text-xs md:text-base xl:text-lg'>
            آدرس ملک متقاضی
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:w-2/3 gap-2 md:gap-5 mt-5'>
            <input
              placeholder='استان'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
            <input
              placeholder='شهر'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
            <input
              placeholder='منطقه'
              className='h-[27px] border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
            <textarea
              style={{ resize: "none" }}
              name='address'
              placeholder='آدرس دقیق'
              className='border border-[#CBCBCB] p-2 rounded-[4px] placeholder:text-xs h-[100px] w-full text-[#F9F9F9] text-sm'
            ></textarea>
          </div>

          <p className='text-[#353535] mt-10 text-xs md:text-base xl:text-lg'>
            مشخصات ملک متقاضی
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 mt-5'>
            <input
              placeholder='نوع مالکیت'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='text'
            />
            <input
              placeholder='مساحت ملک (متر مربع)'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='number'
            />
            <input
              placeholder='سن بنا'
              className='border border-[#CBCBCB] px-2 rounded-[4px] placeholder:text-xs'
              type='number'
            />
          </div>

          <p className='text-[#353535] mt-10 text-xs md:text-base xl:text-lg'>
            امکانات ملک متقاضی
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
            <div className='text-xs md:text-sm'>
              <p className='text-[#717171] text-xs md:text-base'>ملک متقاضی:</p>
              <div className='grid grid-cols-2 mt-5'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded-sm border border-[#417F56] focus:ring-0'
                    id='checkbox'
                  />
                  <label htmlFor='checkbox' className='text-[#717171]'>
                    پروانه کسب دارد.
                  </label>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded-sm border border-[#417F56] focus:ring-0'
                    id='checkbox'
                  />
                  <label htmlFor='checkbox' className='text-[#717171]'>
                    آشپزخانه دارد.
                  </label>
                </div>
              </div>
              <div className='grid grid-cols-2 mt-3'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded-sm border border-[#417F56] focus:ring-0'
                    id='checkbox'
                  />
                  <label htmlFor='checkbox' className='text-[#717171]'>
                    پارکینگ دارد.
                  </label>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded-sm border border-[#417F56] focus:ring-0'
                    id='checkbox'
                  />
                  <label htmlFor='checkbox' className='text-[#717171]'>
                    انبار دارد.
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className='text-[#717171] text-xs md:text-base max-md:mt-8'>
                تصاویر ملک
              </p>
              <div className='relative flex justify-center items-center sm:h-[192px] h-[140px] rounded-[4px] border border-[#CBCBCB] text-[#717171] mt-2'>
                <div className='absolute'>
                  <div className='grid grid-cols-1 items-center justify-items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M12.06 16.5v-5M14.5 14h-5'
                        stroke='#717171'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z'
                        stroke='#717171'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                      ></path>
                    </svg>
                    <span className='text-xs md:text-sm text-center mt-2'>
                      تصویری از ملک را بارگذاری کنید...
                    </span>
                  </div>
                </div>
                <input
                  type='file'
                  className='h-full w-full opacity-0 z-20'
                  name=''
                />
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-5'>
            <Button filled={true}>ثبت اطلاعات</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
