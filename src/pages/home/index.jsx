import { useEffect, useRef, useState } from "react";
import About from "../../components/HomePage/about";
import Branches from "../../components/HomePage/branches";
import Slider from "../../components/slider";

import Modal from "../../components/modal";
import { Link, useNavigate } from "react-router-dom";
import Searchbox from "../../components/searchbox";

const cards = [
  {
    id: 1,
    img: "http://localhost:5173/src/assets/image/branch-modal.png",
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
  },
  {
    id: 2,
    img: "http://localhost:5173/src/assets/image/branch-modal2.png",
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
  },
  {
    id: 3,
    img: "http://localhost:5173/src/assets/image/branch-modal3.png",
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
  },
  {
    id: 4,
    img: "http://localhost:5173/src/assets/image/branch-modal4.png",
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
  },
];

const picture = [
  {
    id: 1,
    img: "http://localhost:5173/src/assets/image/Branch-small-image.png",
  },
  {
    id: 2,
    img: "http://localhost:5173/src/assets/image/Branch-small-image2.png",
  },
  {
    id: 3,
    img: "http://localhost:5173/src/assets/image/Branch-small-image3.png",
  },
  {
    id: 4,
    img: "http://localhost:5173/src/assets/image/Branch-small-image4.png",
  },
  {
    id: 5,
    img: "http://localhost:5173/src/assets/image/Branch-small-image5.png",
  },
  {
    id: 6,
    img: "http://localhost:5173/src/assets/image/Branch-small-image6.png",
  },
];

const bgPicture = [
  { id: 1, img: "http://localhost:5173/src/assets/image/modalBG.png" },
  { id: 2, img: "http://localhost:5173/src/assets/image/modalBG2.png" },
  { id: 3, img: "http://localhost:5173/src/assets/image/modalBG3.png" },
  { id: 4, img: "http://localhost:5173/src/assets/image/modalBG4.png" },
  { id: 5, img: "http://localhost:5173/src/assets/image/modalBG5.png" },
  { id: 6, img: "http://localhost:5173/src/assets/image/modalBG6.png" },
];

const sliderImages = [
  {
    id: 1,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 1",
  },
  {
    id: 2,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 2",
  },
  {
    id: 3,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 3",
  },
  {
    id: 4,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 4",
  },
  {
    id: 5,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 5",
  },
  {
    id: 6,
    imgUrl: "http://localhost:5173/src/assets/image/Slider.png",
    alt: "slide 6",
  },
];

const menus = [
  {
    id: 1,
    imgUrl: "http://localhost:5173/src/assets/image/menu-image.png",
    alt: "menu 1",
    btn: "غذای اصلی",
  },
  {
    id: 2,
    imgUrl: "http://localhost:5173/src/assets/image/menu-image2.png",
    alt: "menu 2",
    btn: " پیش غذا",
  },
  {
    id: 3,
    imgUrl: "http://localhost:5173/src/assets/image/menu-image3.png",
    alt: "menu 3",
    btn: "دسر",
  },
  {
    id: 4,
    imgUrl: "http://localhost:5173/src/assets/image/menu-image4.png",
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

  // useEffect(() => {
  //   document.addEventListener("mousedown", closeOpenModals);
  // }, [showBranchModal]);

  // const closeOpenModals = (e) => {
  //   if (
  //     (showBranchModal) &&
  //     !modals.current?.contains(e.target)
  //   ) {
  //     setShowBranchModal(false);
  //   }
  // };

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
