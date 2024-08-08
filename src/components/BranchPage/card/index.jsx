import { useShoppingCartContext } from "../../../contexts/ShoppingCart";
import star_rate from "../../../assets/icons/Star-rate.png";
import Button from "../../buttons/Button";

const Card = ({ item }) => {
  const { addToCart } = useShoppingCartContext();

  return (
    <>
      <div className='w-[168px] h-[231px] lg:w-[288px] lg:h-[433px] bg-white border border-[#CBCBCB] rounded-md'>
        <a href='#'>
          <img className='rounded-t-md w-full max-lg:h-1/2' src={item.image} />
        </a>
        <div className='p-2 lg:p-3'>
          <a href='#'>
            <h5 className='mb-2 text-xs lg:text-xl font-bold text-center text-[#353535] '>
              {item.name}
            </h5>
          </a>
          <div className='flex justify-between text-[8px] lg:text-[10px] mt-2'>
            <div className='flex text-[#ADADAD] items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
                  stroke='#ADADAD'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p className='max-lg:hidden'>افزودن به علاقه مندی ها</p>
            </div>
            {item.discount !== 0 && (
              <div className='flex text-[#ADADAD] items-center gap-2'>
                <div className='text-[#ADADAD] line-through'>{item.price}</div>
                <div className='bg-[#FFF2F2] text-[#C30000] w-8 rounded-full text-center'>
                  ٪{item.discount}
                </div>
              </div>
            )}
          </div>
          <div className='flex justify-between text-[10px] mt-2'>
            <div className='flex text-[#ADADAD] items-center gap-1'>
              <img src={star_rate} />
              <p className='text-[#353535] font-medium text-[10px] lg:text-sm'>
                4
              </p>
              <p className='text-[8px] lg:text-xs'>({item.rate} امتیاز)</p>
            </div>
            <div className='flex text-[#ADADAD] items-center gap-2'>
              <div className='text-[#353535] text-[10px] lg:text-base'>
                {item.price} تومان
              </div>
            </div>
          </div>
          <div className='mt-3 lg:mt-5'>
            <Button
              filled={true}
              onClick={() => addToCart(item.id)}
              className={"w-full"}
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
