import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShoppingCartContext = createContext({
  cartItems: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
  clearCart: () => {},
  removeItemFromCart: () => {},
  totalQuantity: 0,
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const localCart = localStorage.getItem("cartItems");
    if (localCart == null) {
      return [];
    } else {
      return JSON.parse(localCart);
    }
  });

  const navigate = useNavigate();
  const location = useLocation();

  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getProductQuantity = (id) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const addToCart = (id) => {
    const quantity = getProductQuantity(id);

    try {
      if (quantity == 0) {
        setCartItems([...cartItems, { id: id, qty: 1 }]);
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id == id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      }
      toast.success("غذا با موفقیت به سبد خرید اضافه شد.");
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteFromCart = (id) => {
    try {
      const newCartItem = [...cartItems.filter((item) => item.id != id)];
      setCartItems(newCartItem);
      toast.warning("غذا از سبد خرید حذف شد.");
    } catch (error) {
      toast.error(error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    if (location.pathname != "/checkout/cart") {
      navigate("/checkout/cart");
    }
  };

  const removeItemFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const values = {
    cartItems,
    getProductQuantity,
    addToCart,
    deleteFromCart,
    removeItemFromCart,
    totalQuantity,
    clearCart,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
