import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/image/profile/user-profile.png";
import { useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import IconButton from "../../components/buttons/IconButton";
import Modal from "../../components/modal";

const Profile = () => {
  const path = useLocation();
  const navigate = useNavigate();

  const url = path.pathname.split("/");

  const [homeUrl, setHomeUrl] = useState(url[1]);
  const [logoutModal, setLogoutModal] = useState(false);

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
      icon: "user-2",
      url: "profile",
    },
    {
      id: 2,
      title: "پیگیری سفارش",
      icon: "wallet-2",
      url: "order",
    },
    {
      id: 3,
      title: "علاقه مندی ها",
      icon: "heart",
      url: "interests",
    },
    {
      id: 4,
      title: "آدرس های من",
      icon: "location",
      url: "address",
    },
    {
      id: 5,
      title: "خروج",
      icon: "logout-2",
      url: "logout",
      click: handleOpenLogoutModal,
    },
  ];

  return (
    <>
      <div className='flex gap-5 px-8 md:px-10 xl:px-28 py-6 md:py-12'>
        <div className='w-1/4 border border-[#CBCBCB] rounded-md px-3 py-5'>
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
                          : "opacity-0 group-hover:opacity-100  h-8 w-[3px] rounded-full group-hover:bg-[#C30000]"
                      }
                    ></div>
                  ) : (
                    <div
                      className={
                        homeUrl == item.url
                          ? "opacity-100 h-8 w-[3px] rounded-full bg-[#417F56]"
                          : "opacity-0 group-hover:opacity-100 h-8 w-[3px] rounded-full group-hover:bg-[#417F56]"
                      }
                    ></div>
                  )}

                  {index == profileMenu.length - 1 ? (
                    <i
                      className={
                        homeUrl == item.url
                          ? "iconsax text-md ml-1 mr-1 font-bold text-[#C30000]"
                          : "iconsax text-md ml-1 mr-1 group-hover:font-bold group-hover:text-[#C30000]"
                      }
                      icon-name={item.icon}
                    ></i>
                  ) : (
                    <i
                      className={
                        homeUrl == item.url
                          ? "iconsax text-md ml-1 mr-1 font-bold text-[#417F56]"
                          : "iconsax text-md ml-1 mr-1 group-hover:font-bold group-hover:text-[#417F56]"
                      }
                      icon-name={item.icon}
                    ></i>
                  )}
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
          <div className='w-3/4 border border-[#CBCBCB] rounded-md p-5'>
            <p className='text-[353535] font-bold text-xl mb-3'>پروفایل</p>
            <hr />
            <div className='grid grid-cols-2 gap-5 mx-28 my-10'>
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
              <IconButton icon={"edit-2"} onClick={goToEdit}>
                ویرایش اطلاعات شخصی
              </IconButton>
            </div>
          </div>
        )}

        {path.pathname == "/profile/edit" && (
          <div className='w-3/4 h-[494px] border border-[#CBCBCB] rounded-md p-5'>
            <p className='text-[353535] font-bold text-xl mb-3'>
              ویرایش اطلاعات شخصی
            </p>
            <hr />
            <div className='grid grid-cols-2 gap-5 mx-28 my-10'>
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
            <div className='flex justify-end mx-28'>
              <div className='grid grid-cols-2 gap-5'>
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
                <button className='w-full py-1 px-2 md:px-5 rounded-[4px] bg-[#FFF2F2] text-[#C30000]'>
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
