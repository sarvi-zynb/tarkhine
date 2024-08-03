import footer from "../../../assets/image/common/Footer.png";
import Button from "../../buttons/Button";

const Footer = () => {
  return (
    <>
      <footer
        className='py-7 px-8 md:px-10 xl:px-28 mt-auto'
        style={{
          backgroundImage: "url(" + footer + ")",
          backgroundSize: "cover",
        }}
      >
        <div className='grid grid-cols-2 md:grid-cols-4'>
          <div className='text-white'>
            <p className='font-bold text-xs md:text-sm lg:text-xl'>دسترسی آسان</p>
            <div className='font-medium text-[10px] md:text-xs px-3 py-5 grid grid-rows gap-4'>
              <p>پرسش های متداول</p>
              <p>قوانین ترخینه</p>
              <p>حریم خصوصی</p>
              <div className='flex gap-4 text-xs md:text-sm lg:text-xl'>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-telegram-plane'></i>
              </div>
            </div>
          </div>
          <div className='text-white'>
            <p className='font-bold text-xs md:text-sm lg:text-xl'>شعبه های ترخینه</p>
            <div className='font-medium text-[10px] md:text-xs px-3 py-5 grid grid-rows gap-4'>
              <p>شعبه اکباتان</p>
              <p>شعبه چالوس</p>
              <p>شعبه اقدسیه</p>
              <p>شعبه ونک</p>
            </div>
          </div>
          <div className='text-white hidden md:grid md:col-span-2'>
            <p className='font-bold text-xs md:text-sm lg:text-xl'>پیام به ترخینه</p>
            <div className='grid grid-cols-2 px-3 py-5 gap-2'>
              <div className='grid grid-cols-1 gap-2'>
                <input
                  placeholder='نام و نام خانوادگی'
                  className='bg-transparent border border-[#717171] p-2 rounded-[4px] placeholder:text-xs'
                  type='text'
                />
                <input
                  placeholder='شماره تماس'
                  className='bg-transparent border border-[#717171] p-2 rounded-[4px] placeholder:text-xs'
                  type='number'
                />
                <input
                  placeholder='آدرس ایمیل (اختیاری)'
                  className='bg-transparent border border-[#717171] p-2 rounded-[4px]  placeholder:text-xs'
                  type='email'
                />
              </div>
              <div>
                <textarea
                  style={{ resize: "none" }}
                  name='comment'
                  placeholder='پیام شما'
                  className='bg-transparent border border-[#717171] p-4 rounded-[4px] h-full w-full text-[#F9F9F9] text-sm  placeholder:text-xs'
                ></textarea>
              </div>
            </div>
            <div className='flex justify-end p-3'>
              <Button color={"white"} filled={false}>
                ارسال پیام
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
