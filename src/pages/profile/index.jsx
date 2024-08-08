import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/image/profile/user-profile.png";
import { useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import IconButton from "../../components/buttons/IconButton";
import Modal from "../../components/modal";
import { useAuthContext } from "../../contexts/Authentication";

const Profile = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuthContext();

  const url = path.pathname.split("/");

  const [homeUrl, setHomeUrl] = useState(url[1]);
  const [logoutModal, setLogoutModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    setHomeUrl(url[1]);
  }, [url]);
  const handleOpenLogoutModal = () => {
    setLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModal(false);
  };

  const goToEdit = () => {
    navigate("/profile/edit");
  };

  const goToBack = () => {
    navigate("/profile");
  };

  const profileMenu = [
    {
      id: 1,
      title: "پروفایل",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='mx-1 w-5'
        >
          <path
            d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7'
            stroke={activeIndex == 1 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='group-hover:stroke-[#417F56]'
          ></path>
        </svg>
      ),
      url: "profile",
    },
    {
      id: 2,
      title: "پیگیری سفارش",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='mx-1 w-5'
        >
          <path
            d='M13 9H7M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z'
            stroke={activeIndex == 2 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='group-hover:stroke-[#417F56]'
          ></path>
          <path
            d='M17.48 10.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6Z'
            stroke={activeIndex == 2 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='group-hover:stroke-[#417F56]'
          ></path>
        </svg>
      ),
      url: "order",
    },
    {
      id: 3,
      title: "علاقه مندی ها",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='mx-1 w-5'
        >
          <path
            d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
            stroke={activeIndex == 3 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='group-hover:stroke-[#417F56]'
          ></path>
        </svg>
      ),
      url: "interests",
    },
    {
      id: 4,
      title: "آدرس های من",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='mx-1 w-5'
        >
          <path
            d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
            stroke={activeIndex == 3 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            className='group-hover:stroke-[#417F56]'
          ></path>
          <path
            d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
            stroke={activeIndex == 3 ? "#417F56" : "#353535"}
            stroke-width='1.5'
            className='group-hover:stroke-[#417F56]'
          ></path>
        </svg>
      ),
      url: "address",
    },
    {
      id: 5,
      title: "خروج",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='mx-1 w-5'
        >
          <path
            stroke={activeIndex == 3 ? "#417F56" : "#353535"}
            className='group-hover:stroke-[#417F56]'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35'
          ></path>
        </svg>
      ),
      url: "logout",
      click: handleOpenLogoutModal,
    },
  ];

  useEffect(() => {
    profileMenu.map((item) => item.url == homeUrl && setActiveIndex(item.id));
  }, [homeUrl]);

  return (
    <>
      <div className='flex gap-5 px-8 md:px-10 xl:px-28 py-6 md:py-12'>
        <div className='hidden md:block border border-[#CBCBCB] rounded-md px-3 py-5'>
          <div className='flex items-center gap-5 mb-3'>
            <div className='w-1/3'>
              <img src={profile} />
            </div>
            <div className='w-2/3'>
              <p className='text-[#353535] text-base'>کاربر ترخینه</p>
              <p className='text-[#717171] text-xs mt-2'>۰۹۳۳۰۷۹۲۵۹۰</p>
            </div>
          </div>
          <hr />

          <div className='text-[#353535] mt-3'>
            {profileMenu.map((item, index) => {
              return (
                <div key={index} className='group flex items-center my-1'>
                  {index == profileMenu.length - 1 ? (
                    <div
                      className={
                        path.pathname == item.url
                          ? "opacity-100 h-8 w-[3px] rounded-full bg-[#C30000]"
                          : "opacity-0 h-8 w-[3px] rounded-full group-hover:bg-[#C30000]"
                      }
                    ></div>
                  ) : (
                    <div
                      className={
                        homeUrl == item.url
                          ? "opacity-100 h-8 w-[3px] rounded-full bg-[#417F56]"
                          : "opacity-0 h-8 w-[3px] rounded-full group-hover:bg-[#417F56]"
                      }
                    ></div>
                  )}
                  {item.icon}
                  {index == profileMenu.length - 1 ? (
                    <button
                      onClick={item.click}
                      to={item.url}
                      className={
                        homeUrl == item.url
                          ? "text-sm font-bold text-[#C30000]"
                          : "text-sm group-hover:font-bold group-hover:text-[#C30000]"
                      }
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={`/${item.url}`}
                      className={
                        homeUrl == item.url
                          ? "text-sm font-bold text-[#417F56]"
                          : "text-sm group-hover:font-bold group-hover:text-[#417F56]"
                      }
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {path.pathname == "/profile" && (
          <div className='w-full border border-[#CBCBCB] rounded-md p-3 md:p-5'>
            <p className='text-[353535] font-bold text-base md:text-xl mb-3'>
              پروفایل
            </p>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:mx-5 xl:mx-28 my-5 md:my-10'>
              <input
                placeholder='نام'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"زینب"}
              />
              <input
                placeholder='نام خانوادگی'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"سروی"}
              />
              <input
                placeholder='ایمیل'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='email'
                value={"sarvi@gmail.com"}
              />
              <input
                placeholder='تلفن'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='number'
                value={"09330111111"}
              />
              <input
                placeholder='تاریخ تولد'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"۱۲ آذر ۱۳۷۹"}
              />
              <input
                placeholder='نام نمایشی'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"zynb"}
              />
            </div>
            <div className='flex justify-center'>
              <IconButton
                className='group max-sm:w-full'
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='w-3 md:w-5 ml-1 stroke-[#417F56] group-hover:stroke-[#FFF] transition duration-500'
                  >
                    <path
                      d='m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                    <path
                      d='M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                }
                onClick={goToEdit}
              >
                ویرایش اطلاعات شخصی
              </IconButton>
            </div>
          </div>
        )}

        {path.pathname == "/profile/edit" && (
          <div className='w-full border border-[#CBCBCB] rounded-md p-5'>
            <p className='text-[353535] font-bold text-base md:text-xl mb-3'>
              ویرایش اطلاعات شخصی
            </p>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:mx-5 xl:mx-28 my-5 md:my-10'>
              <input
                placeholder='نام'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"زینب"}
              />
              <input
                placeholder='نام خانوادگی'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"سروی"}
              />
              <input
                placeholder='ایمیل'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='email'
                value={"sarvi@gmail.com"}
              />
              <input
                placeholder='تلفن'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='number'
                value={"09330111111"}
              />
              <input
                placeholder='تاریخ تولد'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"۱۲ آذر ۱۳۷۹"}
              />
              <input
                placeholder='نام نمایشی'
                className='border border-[#CBCBCB] p-2 rounded-[4px]'
                type='text'
                value={"zynb"}
              />
            </div>
            <div className='flex justify-center md:mx-5 xl:mx-28'>
              <div className='max-sm:w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5'>
                <Button onClick={goToBack}>انصراف</Button>
                <Button filled={true}>ذخیره اطلاعات</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {logoutModal && (
        <>
          <Modal close={handleCloseLogoutModal} title={"خروج"}>
            <div className='px-10'>
              <p className='text-center text-base py-6 text-[#353535]'>
                آیا مایل به خروج از حساب کاربری خود هستید؟
              </p>
              <div className='flex justify-center gap-5'>
                <Button
                  className={"w-full"}
                  filled={true}
                  onClick={handleCloseLogoutModal}
                >
                  بازگشت
                </Button>
                <button
                  className='w-full py-1 px-2 md:px-5 rounded-[4px] bg-[#FFF2F2] text-[#C30000]'
                  onClick={() => {
                    signOut();
                    handleCloseLogoutModal();
                  }}
                >
                  خروج
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Profile;
