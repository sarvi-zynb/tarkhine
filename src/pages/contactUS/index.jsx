import { useState } from "react";
import Modal from "../../components/modal";
import Button from "./../../components/buttons/Button";
import sliderImage from "../../assets/image/contact/Slider.png";
import branch1 from "../../assets/image/contact/image.png";
import branch2 from "../../assets/image/contact/image1.png";
import branch3 from "../../assets/image/contact/image2.png";
import branch4 from "../../assets/image/contact/image3.png";
import branchSmall1 from "../../assets/image/modal/Branch-small-image.png";
import branchSmall2 from "../../assets/image/modal/Branch-small-image2.png";
import branchSmall3 from "../../assets/image/modal/Branch-small-image3.png";
import branchSmall4 from "../../assets/image/modal/Branch-small-image4.png";
import branchSmall5 from "../../assets/image/modal/Branch-small-image5.png";
import branchSmall6 from "../../assets/image/modal/Branch-small-image6.png";
import modalBg1 from "../../assets/image/modal/modalBG.png";
import modalBg2 from "../../assets/image/modal/modalBG2.png";
import modalBg3 from "../../assets/image/modal/modalBG3.png";
import modalBg4 from "../../assets/image/modal/modalBG4.png";
import modalBg5 from "../../assets/image/modal/modalBG5.png";
import modalBg6 from "../../assets/image/modal/modalBG6.png";

const branches = [
  {
    id: 1,
    name: "شعبه اکباتان",
    imaUrl: branch1,
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    phone: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
    workTime: "همه‌روزه از ساعت۱۲ تا ۲۳بجز روز‌های تعطیل",
  },
  {
    id: 2,
    name: "شعبه چالوس",
    imaUrl: branch2,
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    phone: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
    workTime: "همه‌روزه از ساعت۱۲ تا ۲۳بجز روز‌های تعطیل",
  },
  {
    id: 3,
    name: "شعبه اقدسیه",
    imaUrl: branch3,
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    phone: "۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
    workTime: "همه‌روزه از ساعت۱۲ تا ۲۳بجز روز‌های تعطیل",
  },
  {
    id: 4,
    name: "شعبه ونک",
    imaUrl: branch4,
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    phone: "۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
    workTime: "همه‌روزه از ساعت۱۲ تا ۲۳بجز روز‌های تعطیل",
  },
];

const picture = [
  {
    id: 1,
    img: branchSmall1,
  },
  {
    id: 2,
    img: branchSmall2,
  },
  {
    id: 3,
    img: branchSmall3,
  },
  {
    id: 4,
    img: branchSmall4,
  },
  {
    id: 5,
    img: branchSmall5,
  },
  {
    id: 6,
    img: branchSmall6,
  },
];

const bgPicture = [
  { id: 1, img: modalBg1 },
  { id: 2, img: modalBg2 },
  { id: 3, img: modalBg3 },
  { id: 4, img: modalBg4 },
  { id: 5, img: modalBg5 },
  { id: 6, img: modalBg6 },
];

const ContactUS = () => {
  const [showBranchPicModal, setShowBranchPicModal] = useState(false);
  const [modalBackgroundImg, setModalBackgroundImg] = useState(
    bgPicture[0].img
  );

  const handleOpenBranchPicModal = () => {
    setShowBranchPicModal(true);
  };

  const handleCloseBranchPicModal = () => {
    setShowBranchPicModal(false);
    setModalBackgroundImg(bgPicture[0].img);
  };

  const handleChoosePic = (id) => {
    const bgPic = bgPicture.find((item) => item.id == id).img;
    setModalBackgroundImg(bgPic);
  };
  return (
    <>
      <div className='relative'>
        <img src={sliderImage} className='w-full' />
        <p className='absolute inset-0 flex items-center justify-center font-bold text-[40px] text-xs md:text-xl lg:text-[40px] text-[#E5F2E9]'>
          با ترخینه در تماس باشید.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-5 px-8 md:px-10 xl:px-28 py-10'>
        {branches.map((item) => (
          <div
            key={item.id}
            className='group grid grid-cols-1 md:grid-cols-2 border border-[#CBCBCB] rounded-md hover:shadow-xl'
          >
            <img
              src={item.imaUrl}
              className='max-md:rounded-t-lg md:rounded-r-lg h-full w-full'
            />
            <div className='flex-1 text-center p-2 md:p-7'>
              <h6 className='text-xs sm:text-base md:text-xl text-[#353535] font-semibold'>
                {item.name}
              </h6>
              <div className='text-[#717171] text-[8px] sm:text-xs md:text-sm lg:text-lg md:mt-7'>
                <p className='py-1'>آدرس: {item.address}</p>
                <p className='py-1'>شماره تماس:{item.phone}</p>
                <p className='py-1'>ساعت کاری:{item.workTime}</p>
              </div>
              <div className='flex md:hidden md:group-hover:flex justify-center gap-2 mt-2 md:mt-5'>
                <Button onClick={handleOpenBranchPicModal}>صفحه شعبه</Button>
                <Button filled={true}>دیدن در نقشه</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showBranchPicModal && (
        <>
          <Modal close={handleCloseBranchPicModal} bg={modalBackgroundImg}>
            <div className='grid grid-cols-6 gap-5 px-9 mt-60'>
              {picture.map((item) => (
                <button key={item.id} onClick={() => handleChoosePic(item.id)}>
                  <img src={item.img} إ />
                </button>
              ))}
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default ContactUS;
