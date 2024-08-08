import { useEffect, useState } from "react";
import axios from "axios";
import MultiSlider from "../../components/BranchPage/multipleSlider";
import Slider from "../../components/slider";
import IconButton from "../../components/buttons/IconButton";
import { ToastContainer } from "react-toastify";
import sliderImage from "../../assets/image/branch/Slider.png";
import sliderImage2 from "../../assets/image/branch/slider2.png";
import star_rate from "../../assets/icons/Star-rate.png";
import { useNavigate } from "react-router-dom";
import { server2 } from "../../../data/server";
import Spinner from "./../../components/spinner";

const sliderImages = [
  {
    id: 1,
    imgUrl: sliderImage,
    alt: "slide 1",
  },
  {
    id: 2,
    imgUrl: sliderImage,
    alt: "slide 2",
  },
  {
    id: 3,
    imgUrl: sliderImage,
    alt: "slide 3",
  },
  {
    id: 4,
    imgUrl: sliderImage,
    alt: "slide 4",
  },
  {
    id: 5,
    imgUrl: sliderImage,
    alt: "slide 5",
  },
  {
    id: 6,
    imgUrl: sliderImage,
    alt: "slide 6",
  },
];

const sliderImages2 = [
  {
    id: 1,
    imgUrl: sliderImage2,
    alt: "slide 1",
  },
  {
    id: 2,
    imgUrl: sliderImage2,
    alt: "slide 2",
  },
  {
    id: 3,
    imgUrl: sliderImage2,
    alt: "slide 3",
  },
  {
    id: 4,
    imgUrl: sliderImage2,
    alt: "slide 4",
  },
  {
    id: 5,
    imgUrl: sliderImage2,
    alt: "slide 5",
  },
  {
    id: 6,
    imgUrl: sliderImage2,
    alt: "slide 6",
  },
];

const Branch = () => {
  const [curr, setCurr] = useState(0);
  const [foods, setFoods] = useState([]);
  const [menuGheyrIrani, setMenuGheyrIrani] = useState([]);
  const [comments, setComments] = useState([]);
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [specialFoods, setSpecialFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${server2}/foods`)
      .then((result) => {
        setLoading(false);
        setFoods(result.data);
        result.data.map((item) => {
          if (item.id > 13 && item.id < 21) {
            setMenuGheyrIrani((prev) => [...prev, item]);
          }
        });
      })
      .catch((error) => console.log(error));

    axios
      .get(`${server2}/comments`)
      .then((result) => {
        setLoading(false);
        setComments(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFavoriteFoods(foods.reverse().filter((item) => item.rate > 50));
    setSpecialFoods(foods.filter((item) => item.discount > 20));
  }, [foods]);

  const handleNext = () => {
    setCurr((curr) => (curr === comments.length - 1 ? 0 : curr + 1));
  };

  const handlePrev = () => {
    setCurr((curr) => (curr === 0 ? comments.length - 1 : curr - 1));
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
      <Slider title={"طعم بی‌نظیر طبیعت!"} images={sliderImages} btn={true} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MultiSlider title={"پیشنهاد ویژه"} cards={specialFoods} />
          <MultiSlider
            title={"غذا های محبوب"}
            cards={favoriteFoods}
            bgColor={"#315F41"}
          />
          <MultiSlider title={"غذا های غیر ایرانی"} cards={menuGheyrIrani} />
        </>
      )}

      <div className='flex justify-center mb-10'>
        <IconButton
          className={"group"}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className='w-4 md:w-5 ml-1 group-hover:stroke-white stroke-[#417F56] transition duration-500'
            >
              <path
                d='M8 2v3M16 2v3M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM8 11h8M8 16h4'
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          }
          onClick={() => navigate("/menu")}
        >
          مشاهده منوی کامل
        </IconButton>
      </div>

      <div className='mt-5 mb-28'>
        <p className='text-center my-3 font-bold text-base lg:text-2xl text-[#353535]'>
          شعبه اکباتان
        </p>
        <div className='relative'>
          <Slider images={sliderImages2} btn={false} />
          <div className='absolute flex justify-center inset-x-0 -bottom-16 z-10'>
            <div className='hidden md:flex gap-5 justify-center text-center text-xs lg:text-base text-[#353535] bg-white border-2 border-[#417F56] rounded-md py-5 px-16'>
              <div className='w-full grid justify-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z'
                    stroke='#353535'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                  ></path>
                  <path
                    d='M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7'
                    stroke='#353535'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
                <p className='mt-2'>۰۲۱-۳۳۵۳۵۳۵۴</p>
                <p>۰۲۱-۳۳۵۳۵۳۵۶</p>
              </div>
              <div className='w-full grid justify-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
                    stroke='#353535'
                    stroke-width='1.5'
                  ></path>
                  <path
                    d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
                    stroke='#353535'
                    stroke-width='1.5'
                  ></path>
                </svg>
                <p className='mt-2'>
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
              </div>
              <div className='w-full grid justify-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z'
                    stroke='#353535'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1'
                    stroke='#353535'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
                <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
              </div>
            </div>
            <div className='md:hidden grid text-[10px] text-[#353535] bg-white border-2 border-[#417F56] rounded-md p-2'>
              <div className='flex items-center gap-2 w-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
                    stroke='#353535'
                    stroke-width='1.5'
                  ></path>
                  <path
                    d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
                    stroke='#353535'
                    stroke-width='1.5'
                  ></path>
                </svg>
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center gap-2 w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                    ></path>
                    <path
                      d='M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                  <p>۰۲۱-۳۳۵۳۵۳۵۰-۵۱</p>
                </div>
                <div className='flex items-center gap-2 w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                    <path
                      d='m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                  <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className='my-10'>
          <p className='text-center my-3 font-bold text-base md:text-xl lg:text-2xl text-[#353535]'>
            نظرات کاربران
          </p>
          <div className='pr-8 md:pr-16 lg:pr-28 relative'>
            <div className='flex gap-5 overflow-x-hidden mt-5'>
              {comments.map((item) => (
                <div
                  className='transition-transform ease-out duration-500'
                  style={{ transform: `translateX(${curr * 100}%)` }}
                  key={item.id}
                >
                  <div className='border border-[#CBCBCB] p-3 md:p-5 rounded-md w-[252px] md:w-[500px]'>
                    <div className='flex items-center'>
                      <div className='text-[#717171] text-[10px] md:text-xs w-28 text-center'>
                        <img
                          className='w-3/5 md:w-4/5 m-auto mb-2'
                          src={item.profile}
                        />
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                      </div>
                      <div className='text-justify w-full text-[#353535] text-[10px] md:text-sm lg:text-base'>
                        {item.comments}
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <div className='flex items-center gap-1'>
                        <img src={star_rate} className='w-3 h-3' />
                        <p>{item.rate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='absolute z-10 inset-0 self-center mt-24 mx-5 md:mx-20 lg:mx-24'>
              <div className='flex justify-between'>
                <button onClick={handlePrev}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-5 md:w-7 xl:w-9 border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
                  >
                    <path
                      stroke='#757575'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                      stroke-width='1.5'
                      d='M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
                    ></path>
                  </svg>
                </button>
                <button onClick={handleNext}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-5 md:w-7 xl:w-9 border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
                  >
                    <path
                      stroke='#757575'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                      stroke-width='1.5'
                      d='M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Branch;
