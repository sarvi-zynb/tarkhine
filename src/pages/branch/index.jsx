import { useEffect, useState } from "react";
import axios from "axios";
import MultiSlider from "../../components/BranchPage/multipleSlider";
import Slider from "../../components/slider";
import star_rate from "../../assets/icons/Star-rate.png";
import IconButton from "../../components/buttons/IconButton";
import { ToastContainer } from "react-toastify";
import sliderImage from "../../assets/image/branch/Slider.png";
import sliderImage2 from "../../assets/image/branch/slider2.png";
import { useNavigate } from "react-router-dom";
import { server } from "../../../data/server";
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

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${server}/foods`)
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
      .get(`${server}/comments`)
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
      <div className='flex justify-center mb-10'>
        <IconButton icon={"note-text"} onClick={()=>navigate('/menu')}>مشاهده منوی کامل</IconButton>
      </div>

      <div className='mt-5 mb-28'>
        <p className='text-center my-3 font-bold text-base lg:text-2xl text-[#353535]'>
          شعبه اکباتان
        </p>
        <div className='relative'>
          <Slider images={sliderImages2} btn={false} />
          <div className='absolute flex justify-center inset-x-0 -bottom-16 z-10'>
            <div className='hidden md:flex gap-5 justify-center items-center text-center text-xs lg:text-base text-[#353535] bg-white border-2 border-[#417F56] rounded-md py-5 px-16'>
              <div className='w-full'>
                <i
                  className='iconsax text-lg lg:text-2xl'
                  icon-name='phone-ringing'
                ></i>
                <p>۰۲۱-۳۳۵۳۵۳۵۴</p>
                <p>۰۲۱-۳۳۵۳۵۳۵۶</p>
              </div>
              <div className='w-full'>
                <i
                  className='iconsax text-lg lg:text-2xl'
                  icon-name='location'
                ></i>
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
              </div>
              <div className='w-full'>
                <i
                  className='iconsax text-lg lg:text-2xl'
                  icon-name='clock'
                ></i>
                <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
              </div>
            </div>
            <div className='md:hidden grid text-[10px] text-[#353535] bg-white border-2 border-[#417F56] rounded-md p-2'>
              <div className='flex items-center gap-2 w-full'>
                <i
                  className='iconsax text-lg lg:text-2xl'
                  icon-name='location'
                ></i>
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center gap-2 w-full'>
                  <i
                    className='iconsax text-base'
                    icon-name='phone-ringing'
                  ></i>
                  <p>۰۲۱-۳۳۵۳۵۳۵۰-۵۱</p>
                </div>
                <div className='flex items-center gap-2 w-full'>
                  <i className='iconsax text-base' icon-name='clock'></i>
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
          <div className='max-md:hidden absolute z-10 inset-0 self-center mt-24 mx-24'>
            <div className='flex justify-between'>
              <button onClick={handlePrev}>
                <i
                  className='iconsax text-xl text-[#757575] border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
                  icon-name='chevron-right'
                ></i>
              </button>
              <button onClick={handleNext}>
                <i
                  className='iconsax text-xl text-[#757575] border border-[#CBCBCB] p-0.5 rounded-lg bg-white transition duration-300 hover:bg-[#ddd]'
                  icon-name='chevron-left'
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branch;
