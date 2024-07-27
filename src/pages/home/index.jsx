import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "../../components/HomePage/about";
import Modal from "../../components/modal";
import Branches from "../../components/HomePage/branches";
import Slider from "../../components/slider";
import Searchbox from "../../components/searchbox";
import sliderImage from '../../assets/image/home/Slider.png'
import menu1 from '../../assets/image/home/menu-image1.png'
import menu2 from '../../assets/image/home/menu-image2.png'
import menu3 from '../../assets/image/home/menu-image3.png'
import menu4 from '../../assets/image/home/menu-image4.png'
import branchSmall1 from "../../assets/image/Branch-small-image.png";
import branchSmall2 from "../../assets/image/Branch-small-image2.png";
import branchSmall3 from "../../assets/image/Branch-small-image3.png";
import branchSmall4 from "../../assets/image/Branch-small-image4.png";
import branchSmall5 from "../../assets/image/Branch-small-image5.png";
import branchSmall6 from "../../assets/image/Branch-small-image6.png";
import modalBg1 from "../../assets/image/modalBG.png";
import modalBg2 from "../../assets/image/modalBG2.png";
import modalBg3 from "../../assets/image/modalBG3.png";
import modalBg4 from "../../assets/image/modalBG4.png";
import modalBg5 from "../../assets/image/modalBG5.png";
import modalBg6 from "../../assets/image/modalBG6.png";

import branchModal1 from "../../assets/image/home/branch-modal.png";
import branchModal2 from "../../assets/image/home/branch-modal2.png";
import branchModal3 from "../../assets/image/home/branch-modal3.png";
import branchModal4 from "../../assets/image/home/branch-modal4.png";


const cards = [
  {
    id: 1,
    img: branchModal1,
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
  },
  {
    id: 2,
    img: branchModal2,
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
  },
  {
    id: 3,
    img: branchModal3,
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
  },
  {
    id: 4,
    img: branchModal4,
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
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

const menus = [
  {
    id: 1,
    imgUrl: menu1,
    alt: "menu 1",
    btn: "غذای اصلی",
  },
  {
    id: 2,
    imgUrl: menu2,
    alt: "menu 2",
    btn: " پیش غذا",
  },
  {
    id: 3,
    imgUrl: menu3,
    alt: "menu 3",
    btn: "دسر",
  },
  {
    id: 4,
    imgUrl: menu4,
    alt: "menu 4",
    btn: "نوشیدنی",
  },
];

const HomePage = () => {
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [showBranchPicModal, setShowBranchPicModal] = useState(false);
  const [modalBackgroundImg, setModalBackgroundImg] = useState(
    bgPicture[0].img
  );
  const modals = useRef(null);

  const navigate = useNavigate()

  const handleOpenBranchModal = () => {
    setShowBranchModal(true);
  };

  const handleCloseBranchModal = () => {
    setShowBranchModal(false);
  };

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
      <Slider
        title={"تجربه غذای سالم و گیاهی به سبک ترخینه"}
        images={sliderImages}
        btn={true}
        clicked={()=>navigate('/menu')}
      />
      <div className="md:hidden mt-5 px-8">
      <Searchbox />
      </div>
      <div className='my-10 px-8 md:px-10 xl:px-28'>
        <p className='text-[#353535] text-center text-base md:text-2xl font-bold py-2'>
          منوی رستوران
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {menus.map((item) => (
            <div
              key={item.id}
              className='relative flex items-center justify-center h-[320px]'
            >
              <img src={item.imgUrl} alt={item.alt} className='absolute z-10' />
              <div className='absolute bg-[#417F56] w-full top-1/2 rounded-md h-[160px]' />
              <button className='absolute rounded-md bg-[#F9F9F9] z-10 text-xs md:text-base xl:text-xl w-32 h-10 -bottom-5 shadow-md'>
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
      <About openModal={handleOpenBranchModal} />
      <Branches openModal={handleOpenBranchPicModal} />
      {showBranchModal && (
        <Modal
          ref={modals}
          title={"انتخاب شعبه"}
          close={handleCloseBranchModal}
        >
          <p className='text-center py-6 text-xs md:text-base text-[#353535]'>
            برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
            {cards.map((item) => (
              <Link to={'/branch'}
                key={item.id}
                className='max-lg:h-20 grid grid-cols-2 lg:grid-cols-1 max-md:items-center rounded-md border-[#CBCBCB] border hover:shadow-2xl hover:border-[#417F56]'
              >
                <img
                  className='max-lg:h-20 max-lg:w-32 lg:rounded-t-md max-lg:rounded-s-md'
                  src={item.img}
                  alt={item.title}
                />
                <div className='p-2 text-center'>
                  <div class='font-semibold text-xs lg:text-base mb-1 text-[#353535]'>
                    {item.title}
                  </div>
                  <p class='text-[#717171] text-[10px] lg:text-xs mb-1'>{item.address}</p>
                </div>
              </Link>
            ))}
          </div>
        </Modal>
      )}

      {showBranchPicModal && (
        <>
          <Modal
            // ref={modals}
            close={handleCloseBranchPicModal}
            bg={modalBackgroundImg}
          >
            <div className='grid grid-cols-6 gap-1 lg:gap-5 px-9 mt-60'>
              {picture.map((item) => (
                <button key={item.id} onClick={() => handleChoosePic(item.id)}>
                  <img src={item.img} />
                </button>
              ))}
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default HomePage;
