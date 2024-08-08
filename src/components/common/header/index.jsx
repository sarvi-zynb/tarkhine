import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/image/common/Logo.png";
import logoMenu from "../../../assets/image/common/LogoMenu.png";
import topFrame from "../../../assets/image/common/topFrame.png";
import Modal from "../../../components/modal";
import Searchbox from "../../searchbox";
import Button from "../../buttons/Button";
import VerificationInput from "react-verification-input";
import { useShoppingCartContext } from "../../../contexts/ShoppingCart";
import { useAuthContext } from "../../../contexts/Authentication";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [userDropDown, setUserDropDown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useShoppingCartContext();
  const {
    token,
    loginModal,
    handleOpenLoginModal,
    handleCloseLoginModal,
    loginPages,
    setLoginPages,
    setUserData,
    signUpUser,
    signInUser,
    signOut,
  } = useAuthContext();

  const url = location.pathname.split("/");
  const [homeUrl, setHomeUrl] = useState(url[url.length - 2]);

  const path = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setHomeUrl(url[url.length - 2]);
  }, [url]);

  const handleOpenLogoutModal = () => {
    setLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModal(false);
  };

  const handleOpenUserDropDown = () => {
    setUserDropDown(!userDropDown);
  };

  const handleOpenSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setShowSearchModal(false);
  };

  const goToCartPage = () => {
    navigate("/checkout/cart");
  };

  const handleChangePage = (url) => {
    navigate(url);
    setIsMenuOpen(false);
  };

  const handleChangeUserData = (e) => {
    setUserData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  // useEffect(() => {
  //   const interval =
  //     timer > 0 &&
  //     setInterval(() => setTimer(timer - 1), timerStatus == true ? 1000 : null);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [timer]);

  // useEffect(() => {
  //   timerStatus ? setTimer(60) : setTimer(0);
  // }, [timerStatus]);

  // const resendOtpCode = () => {
  //   sendOtpCode();
  //   setTimer(60);
  //   setTimerStatus(true);
  // };

  return (
    <header className='shadow-md py-6 px-8 md:px-10 xl:px-28'>
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
      <div className='flex justify-between justify-items-center items-center'>
        {/* hamberger icon */}
        <button
          className='md:hidden justify-self-start'
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            className='w-5 md:w-6'
          >
            <path
              d='M3 7h18M3 12h18M3 17h18'
              stroke='#417F56'
              stroke-width='1.5'
              stroke-linecap='round'
            ></path>
          </svg>
        </button>

        {/* hamberger menu */}
        <div
          className={`md:hidden top-0 w-2/3 h-screen fixed bg-white z-30 transition-all duration-300 ease-in ${
            isMenuOpen ? "right-0" : "right-[-1000px]"
          }`}
        >
          <div
            style={{
              backgroundImage: `url(${topFrame})`,
              backgroundSize: "cover",
            }}
            className='p-5'
          >
            <button
              className='md:text-2xl text-white w-full text-left'
              onClick={() => setIsMenuOpen(false)}
            >
              <i className='fas fa-times text-xl'></i>
            </button>
            <img src={logoMenu} />
          </div>
          <div className='py-2 px-4'>
            <button
              onClick={() => handleChangePage("/")}
              className={`flex p-2 group ${
                location.pathname == "/"
                  ? "text-[#417F56] font-bold"
                  : "hover:text-[#417F56]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  d='M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z'
                  stroke={location.pathname == "/" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='group-hover:stroke-[#417F56]'
                ></path>
              </svg>
              <p className='text-xs md:text-base mr-1'>صفحه اصلی</p>
            </button>
            <hr />
            <button
              onClick={() => handleChangePage("/menu")}
              className={`flex p-2 group ${
                location.pathname == "/menu"
                  ? "text-[#417F56] font-bold"
                  : "hover:text-[#417F56]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className="w-4"
              >
                <path
                  d='m21.93 6.76-3.37 13.53A2.228 2.228 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z'
                  stroke={location.pathname == "/menu" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                className='group-hover:stroke-[#417F56]'

                ></path>
                <path
                  d='M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M6.7 16h8'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='text-xs md:text-base mr-1'>منو</p>
            </button>
            <hr />
            <button
              onClick={() => handleChangePage("/branch")}
              className={`flex p-2 group ${
                location.pathname == "/branch"
                  ? "text-[#417F56] font-bold"
                  : "hover:text-[#417F56]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  d='m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3'
                  stroke={location.pathname == "/branch" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='group-hover:stroke-[#417F56]'
                ></path>
              </svg>
              <p className='text-xs md:text-base mr-1'>شعبه</p>
            </button>
            <hr />
            <button
              onClick={() => handleChangePage("/about")}
              className={`flex p-2 group ${
                location.pathname == "/about"
                  ? "text-[#417F56] font-bold"
                  : "hover:text-[#417F56]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  d='M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86'
                  stroke={location.pathname == "/about" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='group-hover:stroke-[#417F56]'
                ></path>
              </svg>
              <p className='text-xs md:text-base mr-1'>درباره ما</p>
            </button>
            <hr />
            <button
              onClick={() => handleChangePage("/contact")}
              className={`flex p-2 group ${
                location.pathname == "/contact"
                  ? "text-[#417F56] font-bold"
                  : "hover:text-[#417F56]"
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  d='M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z'
                  stroke={location.pathname == "/contact" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  className='group-hover:stroke-[#417F56]'
                ></path>
                <path
                  d='M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7'
                  stroke={location.pathname == "/contact" ? "#417F56" : "#353535"}
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='group-hover:stroke-[#417F56]'
                ></path>
              </svg>
              <p className='text-xs md:text-base mr-1'>تماس با ما</p>
            </button>
          </div>
        </div>

        {/* backdrop */}
        {isMenuOpen && (
          <div className='md:hidden backdrop-blur-sm fixed inset-0 z-20'></div>
        )}

        {/* logo */}
        <Link to={"/"} className='justify-self-start'>
          <img src={logo} alt='ترخینه' className='w-28 lg:w-36' />
        </Link>

        {/* navbar */}
        <ul className='hidden text-sm md:flex xl:text-xl gap-5 xl:gap-8 items-center'>
          <li
            className={
              path.pathname == "/"
                ? "text-[#417F56] font-bold group"
                : "group text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/"}>
              صفحه اصلی
              <span
                className={
                  path.pathname == "/"
                    ? "block max-w-full h-0.5 bg-[#417F56]"
                    : "block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
                }
              ></span>
            </Link>
          </li>

          <li
            className={
              path.pathname == "/branch"
                ? "group relative text-[#417F56] font-bold"
                : "group relative text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/branch"} className='flex'>
              شعبه
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  stroke={path.pathname == "/branch" ? "#417F56" : "#717171"}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
                ></path>
              </svg>
            </Link>
            <span
              className={
                path.pathname == "/branch"
                  ? "block max-w-full h-0.5 bg-[#417F56]"
                  : "block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
              }
            ></span>
            <div
              style={{
                boxShadow: "1px -0.5px 6px -4px rgba(115,115,115,1)",
              }}
              className='hidden group-hover:block bg-white w-36 absolute top-[33px] left-2 z-20 rounded-sm text-black px-2 py-1'
            >
              <Link to={"/branch"}>
                <p className='text-sm py-2 hover:font-bold'>اکباتان</p>
              </Link>
              <hr />
              <Link to={"/branch"}>
                <p className='text-sm py-2 hover:font-bold'>چالوس</p>
              </Link>
              <hr />
              <Link to={"/branch"}>
                <p className='text-sm py-2 hover:font-bold'>اقدسیه</p>
              </Link>
              <hr />
              <Link to={"/branch"}>
                <p className='text-sm py-2 hover:font-bold'>ونک</p>
              </Link>
            </div>
          </li>
          <li
            className={
              path.pathname == "/menu"
                ? "group relative text-[#417F56] font-bold"
                : "group relative text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/menu"} className='flex'>
              منو
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-4'
              >
                <path
                  stroke={path.pathname == "/menu" ? "#417F56" : "#717171"}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
                ></path>
              </svg>
            </Link>
            <span
              className={
                path.pathname == "/menu"
                  ? "block max-w-full h-0.5 bg-[#417F56]"
                  : "block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
              }
            ></span>
            <div
              style={{
                boxShadow: "1px -0.5px 6px -4px rgba(115,115,115,1)",
              }}
              className='hidden group-hover:block bg-white w-36 absolute top-[33px] right-2 z-20 rounded-sm text-black px-2 py-1'
            >
              <Link to={"/menu"}>
                <p className='text-sm py-2 hover:font-bold'>غذای اصلی</p>
              </Link>
              <hr />
              <Link to={"/menu"}>
                <p className='text-sm py-2 hover:font-bold'>پیش غذا</p>
              </Link>
              <hr />
              <Link to={"/menu"}>
                <p className='text-sm py-2 hover:font-bold'>دسر</p>
              </Link>
              <hr />
              <Link to={"/menu"}>
                <p className='text-sm py-2 hover:font-bold'>نوشیدنی</p>
              </Link>
            </div>
          </li>
          <li
            className={
              path.pathname == "/franchise"
                ? "group text-[#417F56] font-bold"
                : "group text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/franchise"}>
              اعطای نمایندگی
              <span
                className={
                  path.pathname == "/franchise"
                    ? "block max-w-full h-0.5 bg-[#417F56]"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
                }
              ></span>
            </Link>
          </li>
          <li
            className={
              path.pathname == "/about"
                ? "group text-[#417F56] font-bold"
                : "group text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/about"}>
              درباره ما
              <span
                className={
                  path.pathname == "/about"
                    ? "block max-w-full h-0.5 bg-[#417F56]"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
                }
              ></span>
            </Link>
          </li>
          <li
            className={
              path.pathname == "/contact"
                ? "group text-[#417F56] font-bold"
                : "group text-[#717171] hover:text-[#417F56] hover:font-bold"
            }
          >
            <Link to={"/contact"}>
              تماس با ما
              <span
                className={
                  path.pathname == "/contact"
                    ? "block max-w-full h-0.5 bg-[#417F56]"
                    : "block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-[#417F56]"
                }
              ></span>
            </Link>
          </li>
        </ul>

        {/* left Side */}
        <div className='flex gap-2 justify-self-end items-center'>
          <button className='hidden md:flex' onClick={handleOpenSearchModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className='w-7 xl:w-10 bg-[#E5F2E9] p-1.5 rounded-md'
            >
              <path
                d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
                stroke='#417F56'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </button>
          <button className='relative' onClick={goToCartPage}>
            {totalQuantity > 0 && (
              <div className='absolute inline-flex items-center justify-center h-4 w-4 lg:w-5 lg:h-5 text-[8px] lg:text-xs font-bold text-white bg-[#417F56] border-2 border-white rounded-full -start-2 -top-2 lg:-start-2 lg:-top-3'>
                {totalQuantity}
              </div>
            )}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className={`${
                homeUrl == "checkout" ? "bg-[#417F56]" : "bg-[#E5F2E9]"
              } w-7 xl:w-10 p-1.5 rounded-md`}
            >
              <path
                d='M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12'
                stroke={homeUrl == "checkout" ? "#FFF" : "#417F56"}
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </button>
          <button
            className={`${
              path.pathname == "/profile" ? "bg-[#417F56]" : "bg-[#E5F2E9]"
            } flex relative items-center p-1.5 rounded-md`}
            onClick={token ? handleOpenUserDropDown : handleOpenLoginModal}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className='w-4 xl:w-7'
            >
              <path
                d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
                stroke={path.pathname == "/profile" ? "#FFF" : "#417F56"}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
            {token ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-3 xl:w-4'
              >
                <path
                  stroke={path.pathname == "/profile" ? "#FFF" : "#417F56"}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='1.5'
                  d='M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
                ></path>
              </svg>
            ) : null}

            {userDropDown && (
              <div
                style={{ boxShadow: "1px -0.5px 6px -4px rgba(115,115,115,1)" }}
                className='absolute left-0 top-8 md:top-10 bg-white w-28 md:w-36 z-20 rounded-sm text-[#353535] px-1 md:px-2 md:py-1'
              >
                <div className='group flex items-center py-1 md:py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 lg:w-4 ml-1'
                  >
                    <path
                      d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                  <Link
                    to={"/profile"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    پروفایل
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 lg:w-4 ml-1'
                  >
                    <path
                      d='M13 9H7M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                    <path
                      d='M17.48 10.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6Z'
                      stroke='#353535'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>

                  <Link
                    to={"/order"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    پیگیری سفارش
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 lg:w-4 ml-1'
                  >
                    <path
                      d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
                      stroke='#555555'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                  <Link
                    to={"/interests"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    علاقه مندی ها
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 lg:w-4 ml-1'
                  >
                    <path
                      d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
                      stroke='#555555'
                      stroke-width='1.5'
                    ></path>
                    <path
                      d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
                      stroke='#555555'
                      stroke-width='1.5'
                    ></path>
                  </svg>
                  <Link
                    to={"/address"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    آدرس های من
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 lg:w-4 ml-1'
                  >
                    <path
                      stroke='#555555'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35'
                    ></path>
                  </svg>
                  <button
                    className='text-xs lg:text-sm group-hover:font-bold'
                    onClick={handleOpenLogoutModal}
                  >
                    خروج از حساب
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {showSearchModal && (
        <>
          <Modal close={handleCloseSearchModal} title={"جستجو"}>
            <div className='px-20'>
              <p className='text-center md:text-xs lg:text-base py-6 text-[#353535]'>
                لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
              </p>
              <Searchbox />
            </div>
          </Modal>
        </>
      )}

      {loginModal && (
        <Modal
          close={handleCloseLoginModal}
          title={<img src={logo} className='w-[100px]' />}
        >
          <div className='mt-5 max-w-[400px]'>
            {loginPages == 1 ? (
              <>
                <h3 className='text-center text-[#353535] text-sm md:text-base'>
                  <button
                    className={loginPages == 1 && "text-[#417F56]"}
                    onClick={() => {
                      setLoginPages(1);
                      setUserData({});
                    }}
                  >
                    ثبت نام
                  </button>
                  /
                  <button
                    onClick={() => {
                      setLoginPages(2);
                      setUserData({});
                    }}
                  >
                    ورود
                  </button>
                </h3>
                {/* <p className='text-center text-[10px] md:text-xs text-[#717171] mt-2'>
                  با وارد کردن ایمیل کد تاییدی برای شما ارسال خواهد شد.
                </p> */}
                <input
                  placeholder='نام و نام خانوادگی'
                  className='w-full border border-[#CBCBCB] rounded-[4px] p-2 mt-2 placeholder:text-xs'
                  type='text'
                  name='fullName'
                  onChange={handleChangeUserData}
                />
                <input
                  placeholder='ایمیل'
                  className='w-full border border-[#CBCBCB] rounded-[4px] p-2 mt-2 placeholder:text-xs'
                  type='email'
                  name='email'
                  onChange={handleChangeUserData}
                />
                <input
                  placeholder='رمز عبور'
                  className='w-full border border-[#CBCBCB] rounded-[4px] p-2 mt-2 placeholder:text-xs'
                  type='password'
                  name='password'
                  onChange={handleChangeUserData}
                />
                <div className='flex justify-center gap-5 mt-3'>
                  <Button
                    filled={true}
                    className={"w-full"}
                    onClick={signUpUser}
                  >
                    ثبت نام
                  </Button>
                </div>
                <p className='text-[8px] md:text-[10px] text-center mt-3'>
                  ورود و عضویت در ترخینه به منزله قبول
                  <span className='text-[#417F56]'>
                    <Link> قوانین و مقررات </Link>
                  </span>
                  است.
                </p>
              </>
            ) : (
              <>
                <h3 className='text-center text-[#353535] text-sm md:text-base'>
                  <button
                    onClick={() => {
                      setLoginPages(1);
                      setUserData({});
                    }}
                  >
                    ثبت نام
                  </button>
                  /
                  <button
                    className={loginPages == 2 && "text-[#417F56]"}
                    onClick={() => {
                      setLoginPages(2);
                      setUserData({});
                    }}
                  >
                    ورود
                  </button>
                </h3>
                <input
                  placeholder='ایمیل'
                  className='w-full border border-[#CBCBCB] rounded-[4px] p-2 mt-2 placeholder:text-xs'
                  type='email'
                  name='email'
                  onChange={handleChangeUserData}
                />
                <input
                  placeholder='رمز عبور'
                  className='w-full border border-[#CBCBCB] rounded-[4px] p-2 mt-2 placeholder:text-xs'
                  type='password'
                  name='password'
                  onChange={handleChangeUserData}
                />
                <div className='flex justify-center gap-5 mt-3'>
                  <Button
                    filled={true}
                    className={"w-full"}
                    onClick={signInUser}
                  >
                    ورود
                  </Button>
                </div>
                <p className='text-[8px] md:text-[10px] text-center mt-3'>
                  ورود و عضویت در ترخینه به منزله قبول
                  <span className='text-[#417F56]'>
                    <Link> قوانین و مقررات </Link>
                  </span>
                  است.
                </p>
                {/* <h3 className='text-center text-[#353535] text-base'>
                  کد تائید
                </h3>
                <p className='text-center text-xs text-[#717171] mt-2'>
                  {`کد تایید شش رقمی به ایمیل شما ارسال شد.`}
                </p>
                <div className='mt-5'>
                  <VerificationInput
                    autoComplete='one-time-code'
                    validChars={"0-9"}
                    placeholder={""}
                    color='primary'
                    onChange={(e) => setCode(e)}
                    removeDefaultStyles
                    classNames={{
                      container: "TFContainer",
                      character: "character",
                      characterInactive: "character--inactive",
                      characterSelected: "character--selected",
                    }}
                    autoFocus={true}
                  />
                  <div className='flex justify-between mt-1'>
                    <div>
                      <span className='text-[#717171] text-xs'>
                        {timer > 0 ? timer : null}
                      </span>
                      <button
                        className='text-[#417F56] text-xs ms-2 disabled:text-[#cdcdcd]'
                        disabled={timer > 0 && true}
                        onClick={resendOtpCode}
                      >
                        ارسال مجدد
                      </button>
                    </div>
                    <button
                      className='text-[#417F56] text-xs'
                      disabled={timer > 0 && true}
                      onClick={editEmail}
                    >
                      ویرایش ایمیل
                    </button>
                  </div>
                  <div className='flex justify-center gap-5 mt-3'>
                    <Button
                      filled={true}
                      disabled={disabledPass}
                      className={"w-full"}
                      onClick={verifyOtpCode}
                    >
                      ثبت کد
                    </Button>
                  </div>
                </div> */}
              </>
            )}
          </div>
        </Modal>
      )}

      {logoutModal && (
        <>
          <Modal close={handleCloseLogoutModal} title={"خروج"}>
            <p className='text-center text-xs md:text-base py-6 text-[#353535]'>
              آیا مایل به خروج از حساب کاربری خود هستید؟
            </p>
            <div className='flex justify-center gap-5'>
              <Button
                filled={true}
                onClick={handleCloseLogoutModal}
                className={"w-full"}
              >
                بازگشت
              </Button>
              <button
                className='bg-[#FFF2F2] w-full text-[#C30000] text-[9px] md:text-xs lg:text-base rounded-[4px] px-2 py-1'
                onClick={() => {
                  signOut;
                  handleCloseLogoutModal();
                }}
              >
                خروج
              </button>
            </div>
          </Modal>
        </>
      )}
    </header>
  );
};

export default Header;
