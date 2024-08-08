import aboutUS from "../../assets/image/about/about.png";
import sliderImage from "../../assets/image/about/Slider.png";

const AboutUS = () => {
  return (
    <>
      <div className='relative'>
        <img src={sliderImage} className='w-full' />
        <p className='absolute inset-0 flex items-center justify-center font-bold text-[40px] text-xs md:text-xl lg:text-[40px] text-[#E5F2E9]'>
          درباره ترخینه بیشتر بدانید!
        </p>
      </div>

      <div className='px-8 md:px-10 xl:px-28 py-10'>
        <p className='text-[#353535] font-bold text-sm md:text-lg lg:text-xl xl:text-2xl'>
          درباره ما
        </p>
        <div className='overflow-hidden mt-5'>
          <img
            src={aboutUS}
            className='float-left mr-3 w-56 md:w-72 lg:w-80 xl:w-[500px]'
          />
          <p className='text-[#717171] leading-6 text-justify text-[10px] md:text-sm lg:text-lg'>
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. <br />
            در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه
            همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین
            حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت
            خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار
            شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان
            عزیز توانایی پذیرایی با کیفیت بالا را دارند. <br />
            سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور
            برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان
            می‌باشند.
            <br /> چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی
            شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید
            آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
      </div>
      <div className='flex flex-row-reverse divide-x divide-[#CBCBCB] bg-[#EDEDED] py-3 md:py-8'>
        <div className='w-full grid justify-items-center px-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            className='w-5 md:w-10'
          >
            <path
              d='m21.93 6.76-3.37 13.53A2.228 2.228 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z'
              stroke='#353535'
              stroke-width='1.5'
              stroke-miterlimit='10'
            ></path>
            <path
              d='M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M6.7 16h8'
              stroke='#353535'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>
            منوی متنوع
          </p>
        </div>
        <div className='w-full grid justify-items-center px-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            className='w-5 md:w-10'
          >
            <path
              d='M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z'
              stroke='#353535'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <path
              d='M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.702 5.702 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24'
              stroke='#353535'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <path
              d='M11.995 17h.01'
              stroke='#353535'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>
            محیطی دلنشین و آرام
          </p>
        </div>
        <div className='w-full grid justify-items-center px-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            className='w-5 md:w-10'
          >
            <path
              d='M2 2v17c0 1.66 1.34 3 3 3h17'
              stroke='#353535'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <path
              d='m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7'
              stroke='#353535'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>
            کیفیت بالای غذاها
          </p>
        </div>
        <div className='w-full grid justify-items-center px-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            className="w-5 md:w-10"
          >
            <path
              d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
              stroke='#353535'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>
            پرسنلی مجرب و حرفه ای
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
