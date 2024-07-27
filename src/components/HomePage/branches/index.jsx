import Button from "../../buttons/Button";

const cards = [
  {
    id: 1,
    img: "http://localhost:5173/src/assets/image/branch1.png",
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
  },
  {
    id: 2,
    img: "http://localhost:5173/src/assets/image/branch2.png",
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
  },
  {
    id: 3,
    img: "http://localhost:5173/src/assets/image/branch1.png",
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
  },
  {
    id: 4,
    img: "http://localhost:5173/src/assets/image/branch2.png",
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
  },
];

const Branches = ({ openModal }) => {
  return (
    <>
      <div className='py-12 px-8 md:px-10 xl:px-28'>
        <p className='text-center text-[#353535] font-extrabold text-base md:text-2xl'>
          ترخینه گردی
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
          {cards.map((item) => (
            <div
              key={item.id}
              className='group max-md:items-center grid grid-cols-2 md:grid-cols-1 relative md:h-[344px] rounded-lg border-[#CBCBCB] border hover:shadow-2xl hover:border-[#417F56]'
            >
              <img
                className='max-md:rounded-r-lg md:rounded-t-lg md:h-[230px] w-full group-hover:h-[190px] transition duration-500 cursor-pointer'
                src={item.img}
                alt={item.title}
              />
              <div className='p-3 text-center'>
                <div className='font-semibold text-sm md:text-xl mb-2 text-[#353535]'>
                  {item.title}
                </div>
                <p className='text-[#717171] text-[10px] md:text-sm font-medium mb-2'>
                  {item.address}
                </p>
                <div className='hidden group-hover:flex justify-center md:mt-10'>
                  <div className='absolute bottom-4'>
                    <Button
                      onClick={openModal}
                      icon={"chevron-left"}
                      filled={false}
                    >
                      صفحه شعبه
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Branches;
