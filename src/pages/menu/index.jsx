import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "../../components/slider";
import Searchbox from "../../components/searchbox";
import IconButton from "../../components/buttons/IconButton";
import Card from "../../components/MenuPage/card";
import { ToastContainer } from "react-toastify";
import sliderImage from '../../assets/image/menu/Slider.png'
import { server } from "../../../data/server";
import Spinner from "../../components/spinner";

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

const Menu = () => {
  const [menuIrani, setMenuIrani] = useState([]);
  const [menuGheyrIrani, setMenuGheyrIrani] = useState([]);
  const [menuPizza, setMenuPizza] = useState([]);
  const [menuSandevich, setMenuSandevich] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigte = useNavigate()

  useEffect(() => {
    axios
      .get(`${server}/foods`)
      .then((result) => {
        setLoading(false);
        result.data.map((item) => {
          if (item.id < 13) {
            setMenuIrani((prev) => [...prev, item]);
          } else if (item.id < 21) {
            setMenuGheyrIrani((prev) => [...prev, item]);
          } else if (item.id < 29) {
            setMenuPizza((prev) => [...prev, item]);
          } else {
            setMenuSandevich((prev) => [...prev, item]);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

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
      <Slider
        title={"لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!"}
        images={sliderImages}
      />
      <div className='bg-[#EDEDED] px-8 md:px-10 xl:px-28 pt-3'>
        <ul className='flex text-[#717171] text-xs md:text-sm lg:text-base xl:text-lg'>
          <li className='group px-3 hover:text-[#417F56] hover:font-bold'>
            <Link>
              غذای اصلی
              <span className='block mt-3 max-w-full group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]'></span>
            </Link>
          </li>
          <li className='group px-3 hover:text-[#417F56] hover:font-bold'>
            <Link>
              پیش غذا
              <span className='block mt-3 max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]'></span>
            </Link>
          </li>
          <li className='group px-3 hover:text-[#417F56] hover:font-bold'>
            <Link>
              دسر
              <span className='block mt-3 max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]'></span>
            </Link>
          </li>
          <li className='group px-3 hover:text-[#417F56] hover:font-bold'>
            <Link>
              نوشیدنی
              <span className='block mt-3 max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]'></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='px-8 md:px-10 xl:px-28 grid grid-cols-5 items-center mt-3'>
        <div className="lg:col-span-3"></div>
        <div className='col-span-5 md:col-span-3 lg:col-span-2'>
          <Searchbox />
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
      <div className='px-8 md:px-10 xl:px-28 mt-10'>
        <div className='flex justify-between'>
          <p className='text-[#353535] font-bold text-sm md:text-base lg:text-2xl'>غذاهای ایرانی</p>
          <IconButton icon={"shopping-cart"} onClick={()=>navigte('/checkout/cart')}>تکمیل خرید</IconButton>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 mt-5'>
          {menuIrani.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='px-8 md:px-10 xl:px-28 mt-10'>
        <div className='flex justify-between'>
          <p className='text-[#353535] font-bold text-base lg:text-2xl'>غذاهای غیر ایرانی</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 mt-5'>
          {menuGheyrIrani.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='px-8 md:px-10 xl:px-28 mt-10'>
        <div className='flex justify-between'>
          <p className='text-[#353535] font-bold text-base lg:text-2xl'>پیتزاها</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 mt-5'>
          {menuPizza.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='px-8 md:px-10 xl:px-28 mt-10 mb-10'>
        <div className='flex justify-between'>
          <p className='text-[#353535] font-bold text-base lg:text-2xl'>ساندویچ ها</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 mt-5'>
          {menuSandevich.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
