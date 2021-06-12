import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [later, setLater] = useState([]);

  const addToCart = (product) => {
    const copy = [...cart];
    const cartItemIndex = copy.findIndex(item => item.product.id === product.id)

    if (cartItemIndex > -1) {
      copy[cartItemIndex].count += 1;
    } else {
      copy.push({
        product,
        count: 1
      })
    }
    console.log(copy);
    setCart([...copy])
    toast.success('Added to cart')
  }

  const removeFromCart = (product, force = false) => {
    const copy = [...cart];
    const cartItemIndex = copy.findIndex(item => item.product.id === product.id)

    if (cartItemIndex > -1) {
      if (force) {
        copy.splice(cartItemIndex, 1)
      } else if (copy[cartItemIndex].count > 1) {
        copy[cartItemIndex].count -= 1;
      } else {
        copy.splice(cartItemIndex, 1)
      }
    }
    setCart([...copy])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
