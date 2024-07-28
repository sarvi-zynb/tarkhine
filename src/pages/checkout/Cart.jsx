import { useEffect, useState } from "react";
import axios from "axios";
import { useShoppingCartContext } from "../../contexts/ShoppingCart";
import star from "../../assets/image/menu/star.png";
import { server } from "../../../data/server";

const Cart = () => {
  const { cartItems } = useShoppingCartContext();

  const Card = ({ item }) => {
    const [food, setFood] = useState({});
    const [price, setPrice] = useState(0);
    const { deleteFromCart, addToCart, removeItemFromCart } =
      useShoppingCartContext();

    useEffect(() => {
      axios
        .get(`${server}/foods/${item.id}`)
        .then((result) => {
          setFood(result.data);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
      setPrice(food.price - (food.price * food.discount) / 100);
    }, [food]);

    return (
      <div className='flex h-40 border border-[#CBCBCB] rounded-md'>
        <img src={food.image} />
        <div className='grid p-3 pr-5 w-full'>
          <div className='flex justify-between text-[#353535]'>
            <p className='font-semibold text-xl'>{food.name}</p>
            <button onClick={() => deleteFromCart(item.id)}>
              <i className='iconsax text-xl' icon-name='trash'></i>
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[#353535] text-sm'>{food.description}</p>
            <div className='flex gap-3 items-center'>
              <div className='text-[#ADADAD] text-base line-through'>
                {food.price}
              </div>
              <div className='bg-[#FFF2F2] text-[#C30000] text-xs w-8 rounded-full text-center'>
                %{food.discount}
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
              <img src={star} className='h-5' />
              <div className='flex items-center gap-2 bg-[#E5F2E9] text-[#417F56] rounded-[4px] text-xl py-0.5 px-1.5'>
                <button onClick={() => addToCart(item.id)}>+</button>
                <span className='text-sm'>{item.qty}</span>
                {item.qty == 1 ? (
                  <button onClick={() => deleteFromCart(item.id)}>
                    <i className='iconsax text-sm' icon-name='trash'></i>
                  </button>
                ) : (
                  <button onClick={() => removeItemFromCart(item.id)}>-</button>
                )}
              </div>
            </div>
            <p className='text-[#353535] text-base mt-2'>{price} تومان</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='hidden md:flex flex-col col-span-2 gap-4 h-[554px] overflow-y-auto border p-5 border-[#CBCBCB] rounded-md'>
      {cartItems.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
