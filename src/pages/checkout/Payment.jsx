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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={"24"}
              height={"24"}
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='m3.989 14.66-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47h-2.15c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13ZM9 15l6-6'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M14.495 14.5h.009M9.495 9.5h.008'
                stroke='#353535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
            <p className='font-bold text-sm md:text-base'>ثبت کد تخفیف</p>
          </div>
          <hr className='my-3' />
          <div className='flex gap-3 md:me-12'>
            <input
              type='text'
              className='h-full p-1.5 ps-4 text-sm focus:outline-[#353535] border-2 border-[#CBCBCB] rounded-lg placeholder:text-xs'
              placeholder='کد تخفیف'
            />
            <Button filled={true}>ثبت کد</Button>
          </div>
        </div>
        <div className='md:flex justify-between border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M10.752 16.86v2.03c0 1.72-1.6 3.11-3.57 3.11-1.97 0-3.58-1.39-3.58-3.11v-2.03c0 1.72 1.6 2.94 3.58 2.94 1.97 0 3.57-1.23 3.57-2.94Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M10.75 14.11c0 .5-.14.96-.38 1.36-.59.97-1.8 1.58-3.2 1.58-1.4 0-2.61-.62-3.2-1.58-.24-.4-.38-.86-.38-1.36 0-.86.4-1.63 1.04-2.19.65-.57 1.54-.91 2.53-.91.99 0 1.88.35 2.53.91.66.55 1.06 1.33 1.06 2.19Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M10.752 14.11v2.75c0 1.72-1.6 2.94-3.57 2.94-1.97 0-3.58-1.23-3.58-2.94v-2.75c0-1.72 1.6-3.11 3.58-3.11.99 0 1.88.35 2.53.91.64.56 1.04 1.34 1.04 2.2ZM22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M2 10.5v-2c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5h-2.5'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
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
              <label
                for='default-radio-1'
                className='text-xs md:text-sm font-medium'
              >
                پرداخت اینترنتی
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M3.93 15.88 15.88 3.93M11.101 18.28l1.2-1.2M13.793 15.589l2.39-2.39'
                stroke='#717171'
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='m3.601 10.239 6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l4.91 4.91c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.1-3.15.03-5.28ZM2 21.998h20'
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
              className='w-4 h-4 md:w-5 md:h-5 text-[#00BA88] bg-white border-[#CBCBCB] focus:ring-0'
            />
            <div>
              <label
                for='default-radio-2'
                className='text-xs md:text-sm font-medium'
              >
                پرداخت در محل
                <p className='text-[10px] max-md:hidden'>
                  توسط پیک رستوران ارسال شود.
                </p>
              </label>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </div>
        </div>
        <div className='border border-[#CBCBCB] rounded-md p-5'>
          <div className='flex items-center gap-2 text-[#353535]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76v-6.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 7.75V13M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z'
                stroke='#A9791C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M12 16.2v.1'
                stroke='#A9791C'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
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
