import { useEffect, useState } from "react";
import empty_img from "../../assets/image/cart/Empty-page.png";
import Button from "../../components/buttons/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Shopping from "./Shopping";
import Payment from "./Payment";
import { useShoppingCartContext } from "../../contexts/ShoppingCart";
import { useAuthContext } from "../../contexts/Authentication";
import IconButton from "../../components/buttons/IconButton";
import axios from "axios";
import Modal from "../../components/modal";
import { ToastContainer } from "react-toastify";
import { server2 } from "../../../data/server";

const Checkout = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [modal, setModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    cartItems,
    totalQuantity,
    clearCart,
    addToCart,
    deleteFromCart,
    removeItemFromCart,
  } = useShoppingCartContext();
  const { handleOpenLoginModal, token } = useAuthContext();

  const url = location.pathname.split("/");
  const [homeurl, setHomeurl] = useState(url[url.length - 1]);

  useEffect(() => {
    setHomeurl(url[url.length - 1]);
  }, [url]);

  useEffect(() => {
    if (cartItems.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cartItems]);

  const Card = ({ item }) => {
    const [food, setFood] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
      axios
        .get(`${server2}/foods/${item.id}`)
        .then((result) => {
          setFood(result.data);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
      setPrice(food.price - (food.price * food.discount) / 100);
    }, [food]);

    return (
      <div className='flex justify-between items-center p-2'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>{food.name}</p>
          <p className='text-xs text-[#717171]'>{price} تومان</p>
        </div>
        <div className='flex items-center h-[32px] gap-2 bg-[#E5F2E9] text-[#417F56] rounded-[4px] text-xl py-0.5 px-1.5'>
          <button onClick={() => addToCart(item.id)}>+</button>
          <span className='text-sm'>{item.qty}</span>
          {item.qty == 1 ? (
            <button onClick={() => deleteFromCart(item.id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5'
                  stroke='#417F56'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </button>
          ) : (
            <button onClick={() => removeItemFromCart(item.id)}>-</button>
          )}
        </div>
      </div>
    );
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleClearCart = () => {
    setModal(false);
    clearCart();
  };

  return (
    <>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition:Bounce
      />
      <div className='hidden md:flex justify-center py-10'>
        <ol className='flex items-center w-4/5 lg:w-1/2 text-sm text-center'>
          <li
            className={`flex ${
              homeurl == "cart"
                ? "text-[#417F56] font-bold text-base"
                : "text-[#CBCBCB]"
            } md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-dashed after:border-[#CBCBCB] after:border-1 after:hidden sm:after:inline-block after:mx-3`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className={
                  homeurl == "cart"
                    ? "w-7 stroke-[#417F56]"
                    : "w-6 stroke-[#CBCBCB]"
                }
              >
                <path
                  d='M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              سبد <span className='hidden sm:inline-flex sm:ms-2'>خرید</span>
            </span>
          </li>
          <li
            className={`flex ${
              homeurl == "shopping"
                ? "text-[#417F56] font-bold text-base"
                : "text-[#CBCBCB]"
            } md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-dashed after:border-[#CBCBCB] after:border-1 after:hidden sm:after:inline-block after:mx-3`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className={
                  homeurl == "shopping"
                    ? "w-7 stroke-[#417F56] ml-1"
                    : "w-6 stroke-[#CBCBCB] ml-1"
                }
              >
                <path
                  d='M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='m7.75 12 2.83 2.83 5.67-5.66'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              تکمیل
              <span className='hidden sm:inline-flex sm:ms-2'>اطلاعات</span>
            </span>
          </li>
          <div>
            <li
              className={`flex ${
                homeurl == "payment"
                  ? "text-[#417F56] font-bold text-base"
                  : "text-[#CBCBCB]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className={
                  homeurl == "payment"
                    ? "w-7 stroke-[#417F56] ml-1"
                    : "w-6 stroke-[#CBCBCB] ml-1"
                }
              >
                <path
                  d='M13 9H7M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M17.48 10.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6Z'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              پرداخت
            </li>
          </div>
        </ol>
      </div>
      <div className='md:hidden mx-8 py-5'>
        <div className='flex justify-between'>
          <button className='text-2xl' onClick={() => navigate(-1)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                stroke='#353535'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                stroke-width='1.5'
                d='M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
              ></path>
            </svg>
          </button>
          {homeurl == "cart" && (
            <p className='md:hidden text-base font-bold'>سبد خرید</p>
          )}
          {homeurl == "shopping" && (
            <p className='md:hidden text-base font-bold'>تکمیل اطلاعات</p>
          )}
          {homeurl == "payment" && (
            <p className='md:hidden text-base font-bold'>پرداخت</p>
          )}

          <button onClick={handleOpenModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5'
                stroke='#353535'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='mb-10'>
        {isEmpty ? (
          <div className='relative flex justify-center items-center h-96 mx-8 md:mx-10 xl:mx-28 border border-[#CBCBCB] rounded-md'>
            <img src={empty_img} className='w-64 md:w-80' />
            <p className='absolute text-[#757575] text-xs md:text-xl'>
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>
            <div className='absolute mt-16 md:mt-32'>
              <Button filled={false} onClick={() => navigate("/menu")}>
                منوی رستوران
              </Button>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 mx-8 lg:mx-10 xl:mx-28'>
            {homeurl == "cart" && <Cart />}
            {homeurl == "shopping" && <Shopping />}
            {homeurl == "payment" && <Payment />}
            <div className='flex flex-col col-span-1 gap-3 max-lg:mt-5 border border-[#CBCBCB] rounded-md p-5 max-md:mt-5 text-[#353535]'>
              <div className='hidden md:flex justify-between text-base'>
                <p>سبد خرید ({totalQuantity})</p>
                <button onClick={handleOpenModal}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </button>
              </div>
              <hr className='max-sm:hidden max-md:hidden' />
              {homeurl == "cart" && (
                <div className='md:hidden'>
                  <div className='max-h-[186px] overflow-x-hidden [&>*:nth-child(odd)]:bg-[#F9F9F9] [&>*:nth-child(even)]:bg-[#EDEDED]'>
                    {cartItems.map((item, index) => (
                      <Card item={item} key={index} />
                    ))}
                  </div>
                  <hr />
                </div>
              )}
              {homeurl == "shopping" || homeurl == "payment" ? (
                <div className='max-lg:hidden'>
                  <div className='max-h-[186px] overflow-x-hidden [&>*:nth-child(odd)]:bg-[#F9F9F9] [&>*:nth-child(even)]:bg-[#EDEDED]'>
                    {cartItems.map((item, index) => (
                      <Card item={item} key={index} />
                    ))}
                  </div>
                  <hr />
                </div>
              ) : null}
              <div className='flex justify-between text-xs md:text-sm mt-2'>
                <p>تخفیف محصولات</p>
                <p className='text-[#717171]'>۶۳۰۰۰ تومان</p>
              </div>
              <hr />
              <div className='flex justify-between text-xs md:text-sm'>
                <p>هزینه ارسال</p>
                <p className='text-[#717171]'>۰ تومان</p>
              </div>
              {homeurl != "payment" && (
                <div className='flex gap-3 items-center'>
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
                  <p className='text-[10px]'>
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>
                </div>
              )}
              <hr />
              <div className='flex justify-between text-xs md:text-sm'>
                <p className='font-bold'>مبلغ قابل پرداخت</p>
                <p className='text-[#417F56]'>542000 تومان</p>
              </div>
              {homeurl == "cart" && token && (
                <IconButton
                  className={"group"}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='w-5 ml-1 stroke-white group-hover:stroke-[#417F56] transition duration-500'
                    >
                      <path
                        d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='m7.75 12 2.83 2.83 5.67-5.66'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  }
                  filled={true}
                  on
                  onClick={() => navigate("/checkout/shopping")}
                >
                  ادامه خرید
                </IconButton>
              )}
              {homeurl == "cart" && token == false && (
                <IconButton
                  className={"group"}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='w-5 ml-1 stroke-white group-hover:stroke-[#417F56] transition duration-500'
                    >
                      <path
                        d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  }
                  filled={true}
                  onClick={handleOpenLoginModal}
                >
                  ورود/ثبت نام
                </IconButton>
              )}
              {homeurl == "shopping" && (
                <IconButton
                  className={"group"}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='w-5 ml-1 stroke-white group-hover:stroke-[#417F56] transition duration-500'
                    >
                      <path
                        d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='m7.75 12 2.83 2.83 5.67-5.66'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  }
                  filled={true}
                  onClick={() => navigate("/checkout/payment")}
                >
                  ثبت سفارش
                </IconButton>
              )}
              {homeurl == "payment" && (
                <IconButton
                  className={"group"}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='w-5 ml-1 stroke-white group-hover:stroke-[#417F56] transition duration-500'
                    >
                      <path
                        d='M2 8.505h20M6 16.505h2M10.5 16.505h4'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M6.44 3.505h11.11c3.56 0 4.45.88 4.45 4.39v8.21c0 3.51-.89 4.39-4.44 4.39H6.44c-3.55.01-4.44-.87-4.44-4.38v-8.22c0-3.51.89-4.39 4.44-4.39Z'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  }
                  filled={true}
                >
                  تائید و پرداخت
                </IconButton>
              )}
            </div>
          </div>
        )}
      </div>

      {modal && (
        <Modal close={handleCloseModal} title={"حذف محصولات"}>
          <p className='text-center text-xs md:text-base py-6 text-[#353535]'>
            آیا مایل به خروج از حساب کاربری خود هستید؟
          </p>
          <div className='flex justify-center gap-5'>
            <Button
              filled={true}
              className={"w-full"}
              onClick={handleCloseModal}
            >
              بازگشت
            </Button>
            <button
              className='bg-[#FFF2F2] w-full text-[#C30000] text-xs md:text-sm lg:text-base rounded-[4px] px-2 py-1'
              onClick={handleClearCart}
            >
              حذف
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
