import aboutBg from "../../../assets/image/about.png";
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
                  color={"white"}
                  filled={false}
                  icon={"chevron-left"}
                  onClick={openModal}
                >
                  اطلاعات بیشتر
                </Button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 md:gap-16 md:justify-self-end mt-10 md:mt-0'>
            <div className='text-center'>
              <i
                className='iconsax text-3xl md:text-4xl lg:text-5xl text-white'
                icon-name='user-2'
              ></i>
              <p className='text-white text-xs lg:text-lg mt-3'>
                پرسنلی مجرب و حرفه ای
              </p>
            </div>
            <div className='text-center'>
              <i
                className='iconsax text-3xl md:text-4xl lg:text-5xl text-white'
                icon-name='activity-chart'
              ></i>
              <p className='text-white text-xs lg:text-lg mt-3'>
                کیفیت بالای غذاها
              </p>
            </div>
            <div className='text-center'>
              <i
                className='iconsax text-3xl md:text-4xl lg:text-5xl text-white'
                icon-name='home-wifi'
              ></i>
              <p className='text-white text-xs lg:text-lg mt-3'>
                محیطی دلنشین و آرام
              </p>
            </div>
            <div className='text-center'>
              <i
                className='iconsax text-3xl md:text-4xl lg:text-5xl text-white'
                icon-name='notepad'
              ></i>
              <p className='text-white text-xs lg:text-lg mt-3'>منوی متنوع</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
