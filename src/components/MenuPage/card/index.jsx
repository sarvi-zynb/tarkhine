import Button from "../../../components/buttons/Button";
import star from "../../../assets/image/menu/star.png";
import starSmall from "../../../assets/image/menu/starSmall.png";
import { useShoppingCartContext } from "../../../contexts/ShoppingCart";
const Card = ({ item }) => {
  const { addToCart } = useShoppingCartContext();
  return (
    <div className='flex border border-[#CBCBCB] rounded-md'>
      <img src={item.image} className='w-1/3' />
      <div className='grid p-1 md:p-3 mr-1 w-full'>
        <div className='flex justify-between'>
          <p className='text-[#353535] font-semibold text-sm sm:text-base lg:text-xl'>
            {item.name}
          </p>
          <div className='flex items-start gap-10'>
            <div>
              {item.discount !== 0 && (
                <div className='flex gap-3 items-center'>
                  <div className='text-[#ADADAD] text-[10px] md:text-sm lg:text-base line-through'>
                    {item.price}
                  </div>
                  <div className='bg-[#FFF2F2] text-[#C30000] text-[10px] md:text-xs w-8 rounded-full text-center'>
                    %{item.discount}
                  </div>
                </div>
              )}
              <p className='text-[#353535] text-[10px] lg:text-base'>
                {item.price} تومان
              </p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              className="hidden md:flex w-5"
            >
              <path
                d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
                stroke='#717171'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[#353535] text-[10px] md:text-xs lg:text-sm'>
            {item.description}
          </p>
        </div>
        <div className='flex justify-between items-end'>
          <img src={starSmall} className='lg:hidden' />
          <img src={star} className='max-lg:hidden h-5' />
          <Button filled={true} onClick={() => addToCart(item.id)}>
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
