import Button from "../../../components/buttons/Button";
import star from "../../../assets/image/menu/star.png";
import starSmall from "../../../assets/image/menu/starSmall.png";
import { useShoppingCartContext } from "../../../contexts/ShoppingCart";
const Card = ({ item }) => {
  const { addToCart } = useShoppingCartContext();
  return (
      <div className='flex h-[100px] md:h-[130px] lg:h-[170px] border border-[#CBCBCB] rounded-md'>
        <img src={item.image} className="w-1/3" />
        <div className='grid p-1 md:p-3 mr-1 w-full'>
          <div className='flex justify-between'>
            <p className='text-[#353535] font-semibold text-sm sm:text-base lg:text-xl'>{item.name}</p>
            <i className='iconsax text-[#717171] hidden md:flex text-base md:text-xl' icon-name='heart'></i>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[#353535] text-[10px] md:text-xs lg:text-sm'>{item.description}</p>
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
              <p className='text-[#353535] text-[10px] lg:text-base mt-2'>
                {item.price} تومان
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
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
