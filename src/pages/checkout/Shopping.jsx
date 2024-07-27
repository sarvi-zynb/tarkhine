import empty_img from "../../assets/image/cart/Empty-page.png";

const Shopping = () => {
  return (
    <>
        <div className='grid col-span-1 lg:col-span-2 gap-4'>
          <div className='md:grid grid-cols-3 justify-between border border-[#CBCBCB] rounded-md p-5'>
            <div className='flex items-center gap-2 text-[#353535]'>
              <i className='iconsax text-lg md:text-2xl' icon-name='truck'></i>
              <p className="text-base">روش تحویل سفارش</p>
            </div>
            <hr className="md:hidden my-3" />
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
                  <p className='text-[10px] max-md:hidden'>توسط پیک رستوران ارسال شود.</p>
                </label>
              </div>
              <i className='iconsax text-lg md:text-2xl' icon-name='truck-speed'></i>
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
                  <p className='text-[10px] max-md:hidden'>توسط پیک رستوران ارسال شود.</p>
                </label>
              </div>
              <i className='iconsax text-lg md:text-2xl' icon-name='basket-3'></i>
            </div>
          </div>
          <div className='h-[210px] border border-[#CBCBCB] rounded-md p-5'>
            <div className='flex justify-between mb-2'>
              <div className='flex items-center gap-1 text-[#353535]'>
                <i className='iconsax text-lg md:text-2xl' icon-name='location'></i>
                <p className=" text-sm md:text-base">آدرس ها</p>
              </div>
              <button>
                <div className='flex items-center gap-1 text-[#417F56]'>
                  <i className='iconsax text-base md:text-lg' icon-name='add-circle'></i>
                  <p className="text-xs">افزودن آدرس</p>
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
              <i className='iconsax text-base md:text-xl' icon-name='clipboard'></i>
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
