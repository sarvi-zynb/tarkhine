import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "../../components/slider";
import Searchbox from "../../components/searchbox";
import IconButton from "../../components/buttons/IconButton";
import Card from "../../components/MenuPage/card";
import { ToastContainer } from "react-toastify";
import sliderImage from "../../assets/image/menu/Slider.png";
import { server2 } from "../../../data/server";
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

  const navigte = useNavigate();

  useEffect(() => {
    axios
      .get(`${server2}/foods`)
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
        <div className='lg:col-span-3'></div>
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
              <p className='text-[#353535] font-bold text-sm md:text-base lg:text-2xl'>
                غذاهای ایرانی
              </p>
              <IconButton
              className={'group'}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className="w-4 md:w-5 ml-1 group-hover:stroke-white stroke-[#417F56] transition duration-500"
                  >
                    <path
                      d='M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                }
                onClick={() => navigte("/checkout/cart")}
              >
                تکمیل خرید
              </IconButton>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-5'>
              {menuIrani.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className='px-8 md:px-10 xl:px-28 mt-10'>
            <div className='flex justify-between'>
              <p className='text-[#353535] font-bold text-base lg:text-2xl'>
                غذاهای غیر ایرانی
              </p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-5'>
              {menuGheyrIrani.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className='px-8 md:px-10 xl:px-28 mt-10'>
            <div className='flex justify-between'>
              <p className='text-[#353535] font-bold text-base lg:text-2xl'>
                پیتزاها
              </p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-5'>
              {menuPizza.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className='px-8 md:px-10 xl:px-28 mt-10 mb-10'>
            <div className='flex justify-between'>
              <p className='text-[#353535] font-bold text-base lg:text-2xl'>
                ساندویچ ها
              </p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-5'>
              {menuSandevich.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
