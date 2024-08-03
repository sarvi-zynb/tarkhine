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
import { server } from "../../../data/server";

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
        .get(`${server}/foods/${item.id}`)
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
              <i className='iconsax text-sm' icon-name='trash'></i>
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
            <div>
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <i
                  className={`iconsax ${
                    homeurl == "cart" ? "text-3xl" : "text-2xl"
                  } me-2`}
                  icon-name='shopping-cart'
                ></i>
                سبد <span className='hidden sm:inline-flex sm:ms-2'>خرید</span>
              </span>
            </div>
          </li>
          <li
            className={`flex ${
              homeurl == "shopping"
                ? "text-[#417F56] font-bold text-base"
                : "text-[#CBCBCB]"
            } md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-dashed after:border-[#CBCBCB] after:border-1 after:hidden sm:after:inline-block after:mx-3`}
          >
            <div>
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                <i
                  className={`iconsax ${
                    homeurl == "shopping" ? "text-3xl" : "text-2xl"
                  } me-2`}
                  icon-name='tick-square'
                ></i>
                تکمیل
                <span className='hidden sm:inline-flex sm:ms-2'>اطلاعات</span>
              </span>
            </div>
          </li>
          <div>
            <li
              className={`flex ${
                homeurl == "payment"
                  ? "text-[#417F56] font-bold text-base"
                  : "text-[#CBCBCB]"
              } md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-dashed after:border-[#CBCBCB] after:border-1 after:hidden sm:after:inline-block after:mx-3`}
            >
              <i
                className={`iconsax ${
                  homeurl == "payment" ? "text-3xl" : "text-2xl"
                } me-2`}
                icon-name='wallet-2'
              ></i>
              پرداخت
            </li>
          </div>
        </ol>
      </div>
      <div className='md:hidden mx-8 py-5'>
        <div className='flex justify-between'>
          <button className='text-2xl' onClick={() => navigate(-1)}>
            <i className='iconsax' icon-name='chevron-right'></i>
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
            <i className='iconsax text-2xl' icon-name='trash'></i>
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
                  <i className='iconsax text-2xl' icon-name='trash'></i>
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
                <div className='flex gap-3 items-center text-[#A9791C]'>
                  <i
                    className='iconsax text-lg md:text-2xl'
                    icon-name='warning-octagon'
                  />
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
                  icon={"tick-circle"}
                  filled={true}
                  on
                  onClick={() => navigate("/checkout/shopping")}
                >
                  ادامه خرید
                </IconButton>
              )}
              {homeurl == "cart" && token == false && (
                <IconButton
                  icon={"user-2"}
                  filled={true}
                  onClick={handleOpenLoginModal}
                >
                  ورود/ثبت نام
                </IconButton>
              )}
              {homeurl == "shopping" && (
                <IconButton
                  icon={"tick-circle"}
                  filled={true}
                  onClick={() => navigate("/checkout/payment")}
                >
                  ثبت سفارش
                </IconButton>
              )}
              {homeurl == "payment" && (
                <IconButton icon={"bank-card"} filled={true}>
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
