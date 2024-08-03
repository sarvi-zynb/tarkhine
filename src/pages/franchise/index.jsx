import rectangle from "../../assets/image/franchise/Rectangle 3.png";
import Button from "../../components/buttons/Button";
import sliderImage from '../../assets/image/franchise/Slider.png'
const icons = [
  { icon: "bank", caption: "بیش از 20 شعبه فعال در سراسر کشور" },
  {
    icon: "wallet-open",
    caption: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
  },
  { icon: "bar-graph-3", caption: "طرح‌های تشویقی ارتقای فروش" },
  { icon: "book-open", caption: "اعطای دستورالعمل پخت غذاها" },
];
const Franchise = () => {
  return (
    <>
      <div className='relative'>
        <img
          src={sliderImage}
          className='w-full'
        />
        <p className='absolute inset-0 flex items-center justify-center font-bold text-xs md:text-xl lg:text-[40px] text-[#E5F2E9]'>
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </p>
      </div>

      <div className='py-6 md:py-16 px-8 md:px-10 xl:px-28'>
        <div className='grid grid-cols-4 gap-1 lg:gap-2 lg:px-16 justify-center mb-6 lg:mb-12'>
          {icons.map((item, index) => (
            <div className='grid justify-items-center' key={index}>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-40 xl:h-40 flex justify-center items-center border-2 lg:border-4 border-[#417F56] rounded-full'>
                <i
                  className='iconsax text-[#417F56] text-2xl md:text-4xl lg:text-6xl xl:text-8xl'
                  icon-name={item.icon}
                ></i>
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
                    <i
                      className='iconsax text-4xl md:text-7xl'
                      icon-name='folder-add'
                    ></i>
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
