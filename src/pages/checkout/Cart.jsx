import { useEffect, useState } from "react";
import axios from "axios";
import { useShoppingCartContext } from "../../contexts/ShoppingCart";
import star from "../../assets/image/menu/star.png";
import { server2 } from "../../../data/server";

const Cart = () => {
  const { cartItems } = useShoppingCartContext();

  const Card = ({ item }) => {
    const [food, setFood] = useState({});
    const [price, setPrice] = useState(0);

    const { deleteFromCart, addToCart, removeItemFromCart } =
      useShoppingCartContext();

    useEffect(() => {
      axios
        .get(`${server2}/foods/${item.id}`)
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
          <div className='flex justify-between items-start text-[#353535]'>
            <p className='font-semibold text-xl'>{food.name}</p>
            <button onClick={() => deleteFromCart(item.id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-5'
              >
                <path
                  d='M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5'
                  stroke='#353535'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
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
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5'
                        stroke='#417F56'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
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
