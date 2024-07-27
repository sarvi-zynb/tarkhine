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
              <i className='iconsax' icon-name='heart'></i>
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
            <Button filled={true} onClick={() => addToCart(item.id)} className={'w-full'}>
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
