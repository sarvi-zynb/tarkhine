import aboutUS from "../../assets/image/aboutUS/aboutUS.png";

const AboutUS = () => {
  return (
    <>
      <div className='relative'>
        <img
          src={"http://localhost:5173/src/assets/image/aboutUS/Slider.png"}
          className='w-full'
        />
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
        <div className='text-center flex-1 px-1'>
          <i
            className='iconsax text-xl md:text-2xl xl:text-4xl text-[#353535]'
            icon-name='notepad'
          ></i>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>منوی متنوع</p>
        </div>
        <div className='text-center flex-1 px-1'>
          <i
            className='iconsax text-xl md:text-2xl xl:text-4xl text-[#353535]'
            icon-name='home-wifi'
          ></i>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>محیطی دلنشین و آرام</p>
        </div>
        <div className='text-center flex-1 px-1'>
          <i
            className='iconsax text-xl md:text-2xl xl:text-4xl text-[#353535]'
            icon-name='activity-chart'
          ></i>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>کیفیت بالای غذاها</p>
        </div>
        <div className='text-center flex-1 px-1'>
          <i
            className='iconsax text-xl md:text-2xl xl:text-4xl text-[#353535]'
            icon-name='user-2'
          ></i>
          <p className='text-[#717171] text-[8px] md:text-xs lg:text-base xl:text-lg mt-2'>
            پرسنلی مجرب و حرفه ای
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
