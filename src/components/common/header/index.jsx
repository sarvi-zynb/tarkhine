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

const hamburgerMenu = [
  {
    id: 1,
    title: "صفحه اصلی",
    icon: "home-1",
    url: "/",
  },
  {
    id: 2,
    title: "منو",
    icon: "notepad",
    url: "/menu",
  },
  {
    id: 3,
    title: "شعبه",
    icon: "home-2",
    url: "/branch",
  },
  {
    id: 4,
    title: "درباره ما",
    icon: "users",
    url: "/about",
  },
  {
    id: 5,
    title: "تماس با ما",
    icon: "phone-ringing",
    url: "/contact",
  },
];
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
        <button
          className='lg:hidden justify-self-start'
          onClick={() => setIsMenuOpen(true)}
        >
          <i
            className='iconsax text-lg lg:text-2xl text-[#417F56]'
            icon-name='hamburger-menu'
          ></i>
        </button>
        <div
          className={`lg:hidden top-0 w-2/3 h-screen fixed bg-white z-30 transition-all duration-300 ease-in ${
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
            {hamburgerMenu.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleChangePage(item.url)}
                  className={`flex p-2 ${
                    location.pathname == item.url
                      ? "text-[#417F56]"
                      : "hover:text-[#417F56]"
                  }`}
                >
                  <i
                    className='iconsax text-sm md:text-lg'
                    icon-name={item.icon}
                  ></i>
                  <p className='text-xs md:text-base mr-1'>{item.title}</p>
                </button>
                <hr />
              </div>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div className='lg:hidden backdrop-blur-sm fixed inset-0 z-20'></div>
        )}
        <Link to={"/"} className='justify-self-start'>
          <img src={logo} alt='ترخینه' className='w-28 md:w-36' />
        </Link>

        <ul className='hidden text-sm lg:flex xl:text-xl gap-5 xl:gap-8 items-center'>
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
            <Link to={"/branch"}>
              شعبه
              <i className='iconsax mr-1' icon-name='chevron-down'></i>
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
            <Link to={"/menu"}>
              منو
              <i className='iconsax mr-1' icon-name='chevron-down'></i>
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

        <div className='flex gap-2 justify-self-end'>
          <button
            className='hidden md:flex bg-[#E5F2E9] text-[#417F56] py-1 px-2 rounded-md'
            onClick={handleOpenSearchModal}
          >
            <i
              className='iconsax text-sm lg:text-2xl'
              icon-name='search-normal-2'
            ></i>
          </button>
          <button
            className={
              homeUrl == "checkout"
                ? "relative bg-[#417F56] text-white rounded-md py-1 px-2"
                : "relative bg-[#E5F2E9] text-[#417F56] rounded-md py-1 px-2"
            }
            onClick={goToCartPage}
          >
            {totalQuantity > 0 && (
              <div className='absolute inline-flex items-center justify-center h-4 w-4 lg:w-5 lg:h-5 text-[8px] lg:text-xs font-bold text-white bg-[#417F56] border-2 border-white rounded-full -start-2 -top-1 lg:-start-2 lg:-top-3'>
                {totalQuantity}
              </div>
            )}
            <i
              className='iconsax text-sm lg:text-2xl'
              icon-name='shopping-cart'
            ></i>
          </button>
          <button
            className={
              homeUrl == "profile" ||
              path.pathname == "/profile" ||
              path.pathname == "/order" ||
              path.pathname == "/interests" ||
              path.pathname == "/address"
                ? "flex relative items-center bg-[#417F56] text-white py-1 px-2 rounded-md"
                : "flex relative items-center bg-[#E5F2E9] text-[#417F56] py-1 px-2 rounded-md"
            }
            onClick={token ? handleOpenUserDropDown : handleOpenLoginModal}
          >
            <i className='iconsax text-sm lg:text-2xl' icon-name='user-2'></i>
            {token ? (
              <i
                className='iconsax text-sm lg:text-xl'
                icon-name='chevron-down'
              ></i>
            ) : null}

            {userDropDown && (
              <div
                style={{ boxShadow: "1px -0.5px 6px -4px rgba(115,115,115,1)" }}
                className='absolute left-0 top-8 md:top-10 bg-white w-28 md:w-36 z-20 rounded-sm text-[#353535] px-1 md:px-2 md:py-1'
              >
                <div className='group flex items-center py-1 md:py-2'>
                  <i
                    className='iconsax text-sm md:text-md ml-1 group-hover:font-bold'
                    icon-name='user-2'
                  ></i>
                  <Link
                    to={"/profile"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    پروفایل
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2 hover:font-bold'>
                  <i
                    className='iconsax text-sm md:text-md ml-1 group-hover:font-bold'
                    icon-name='wallet-2'
                  ></i>
                  <Link
                    to={"/order"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    پیگیری سفارش
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2 hover:font-bold'>
                  <i
                    className='iconsax text-sm md:text-md ml-1 group-hover:font-bold'
                    icon-name='heart'
                  ></i>
                  <Link
                    to={"/interests"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    علاقه مندی ها
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2 hover:font-bold'>
                  <i
                    className='iconsax text-sm md:text-md ml-1 group-hover:font-bold'
                    icon-name='location'
                  ></i>
                  <Link
                    to={"/address"}
                    className='text-xs lg:text-sm group-hover:font-bold'
                  >
                    آدرس های من
                  </Link>
                </div>
                <hr />
                <div className='group flex items-center py-1 md:py-2 hover:font-bold'>
                  <i
                    className='iconsax text-sm md:text-md ml-1 group-hover:font-bold'
                    icon-name='logout-2'
                  ></i>
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
                  handleCloseLogoutModal()
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
