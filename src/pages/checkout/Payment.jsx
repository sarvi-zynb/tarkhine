import Button from "../../components/buttons/Button";
import bank from "../../assets/image/cart/Bank.png";
import bank2 from "../../assets/image/cart/Bank 2.png";
import bank3 from "../../assets/image/cart/Bank 3.png";

const Payment = () => {
  return (
    <>
      <div className='grid col-span-2 gap-5'>
        <div className='md:flex justify-between items-center border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <i
              className='iconsax text-lg md:text-2xl'
              icon-name='discount-badge'
            ></i>
            <p className='font-bold text-sm md:text-base'>ثبت کد تخفیف</p>
          </div>
          <hr className='my-3' />
          <div className='flex gap-3 md:me-12'>
            <input
              type='text'
              className='h-full p-1.5 ps-4 text-sm focus:outline-[#353535] border-2 border-[#CBCBCB] rounded-lg placeholder:text-xs'
              placeholder='کد تخفیف'
            />
            <Button filled={true} className={"w-full"}>
              ثبت کد
            </Button>
          </div>
        </div>
        <div className='md:flex justify-between border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <i
              className='iconsax text-lg md:text-2xl'
              icon-name='wallet-money'
            ></i>
            <p className='font-bold text-sm md:text-base'>روش پرداخت</p>
          </div>
          <hr className='my-3' />
          <div className='flex items-center gap-2 text-[#717171]'>
            <input
              id='default-radio-1'
              type='radio'
              value=''
              name='default-radio'
              className='w-4 h-4 md:w-5 md:h-5 text-[#00BA88] bg-white border-[#CBCBCB] focus:ring-0'
            />
            <div>
              <label for='default-radio-1' className='text-xs md:text-sm font-medium'>
                پرداخت اینترنتی
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <i
              className='iconsax text-lg md:text-2xl'
              icon-name='bank-card-diagonal'
            ></i>
          </div>
          <div className='flex items-center gap-2 text-[#717171]'>
            <input
              id='default-radio-2'
              type='radio'
              value=''
              name='default-radio'
              className='w-4 h-4 md:w-5 md:h-5 text-[#00BA88] bg-white border-[#CBCBCB] focus:ring-0'
            />
            <div>
              <label for='default-radio-2' className='text-xs md:text-sm font-medium'>
                پرداخت در محل
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <i className='iconsax text-lg md:text-2xl' icon-name='wallet-2'></i>
          </div>
        </div>
        <div className='border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <i className='iconsax text-lg md:text-2xl' icon-name='wallet-money'></i>
            <p className='font-bold text-sm md:text-base'>درگاه پرداخت</p>
          </div>
          <hr className='my-3' />
          <div className='flex gap-4 justify-center'>
            <button>
              <img src={bank} className='w-16 h-16 md:w-24 md:h-24' />
            </button>
            <button>
              <img src={bank2} className='w-16 h-16 md:w-24 md:h-24' />
            </button>
            <button>
              <img src={bank3} className='w-16 h-16 md:w-24 md:h-24' />
            </button>
          </div>
          <p className='text-center text-[#717171] text-[8px] md:text-xs mt-2'>
            پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
          </p>
          <p className='text-center text-[#717171] text-[7px] md:text-[10px] mt-1'>
            (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
          </p>
        </div>
        <div className='hidden md:flex border border-[#CBCBCB] bg-[#F9F9F9] rounded-md p-5'>
          <div className='flex w-2/5 items-center gap-2 text-[#353535] text-base'>
            <i className='iconsax text-2xl' icon-name='warning-octagon'></i>
            <p>قابل توجه</p>
          </div>
          <p className='text-[10px] text-[#717171]'>
            هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل
            کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای
            پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
