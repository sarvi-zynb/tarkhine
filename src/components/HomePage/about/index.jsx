import aboutBg from "../../../assets/image/home/about.png";
import Button from "../../buttons/Button";

const About = ({ openModal }) => {
  return (
    <>
      <div
        className='mt-8 py-12 px-8 md:px-10 xl:px-28'
        style={{
          backgroundImage: "url(" + aboutBg + ")",
          backgroundSize: "cover",
        }}
      >
        <div className='grid md:grid-cols-2'>
          <div className='space-y-8'>
            <h1 className='font-bold text-white text-base md:text-xl lg:text-2xl'>
              رستوران های زنجیره ای ترخینه
            </h1>
            <p className='text-white text-[10px] md:text-base lg:text-xl text-justify leading-9'>
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <div className='flex justify-end'>
              <div>
                <Button
                  className={"group"}
                  color={"white"}
                  filled={false}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='w-5 stroke-white group-hover:stroke-black transition duration-500'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-miterlimit='10'
                        stroke-width='1.5'
                        d='M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08'
                      ></path>
                    </svg>
                  }
                  onClick={openModal}
                >
                  اطلاعات بیشتر
                </Button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 md:gap-16 md:justify-self-end mt-10 md:mt-0'>
            <div className='grid gap-1 justify-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-10 lg:w-16'
              >
                <path
                  d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='text-white text-xs lg:text-lg'>
                پرسنلی مجرب و حرفه ای
              </p>
            </div>
            <div className='grid gap-1 justify-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-10 lg:w-16'
              >
                <path
                  d='M2 2v17c0 1.66 1.34 3 3 3h17'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='text-white text-xs lg:text-lg'>کیفیت بالای غذاها</p>
            </div>
            <div className='grid gap-1 justify-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-10 lg:w-16'
              >
                <path
                  d='M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.702 5.702 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M11.995 17h.01'
                  stroke='#FFF'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='text-white text-xs lg:text-lg'>
                محیطی دلنشین و آرام
              </p>
            </div>
            <div className='grid gap-1 justify-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-10 lg:w-16'
              >
                <path
                  d='m21.93 6.76-3.37 13.53A2.228 2.228 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                ></path>
                <path
                  d='M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M6.7 16h8'
                  stroke='#FFF'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='text-white text-xs lg:text-lg'>منوی متنوع</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
