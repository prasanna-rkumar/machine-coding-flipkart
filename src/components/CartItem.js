import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartItem = ({ product, count }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="py-3">
      <h6>{product.title}</h6>
      <div className="flex flex-row gap-x-4">
        <div className="flex gap-x-2 items-center">
          <button disabled={count <= 1} onClick={() => removeFromCart(product)} className="rounded-full border-gray-300 border w-8 h-8 text-xl cursor-auto">-</button>
          <span>{count}</span>
          <button onClick={() => addToCart(product)} className="rounded-full border-gray-300 border w-8 h-8 text-xl">+</button>
        </div>
        <button className="text-black font-medium text uppercase">Save For Later</button>
        <button onClick={() => removeFromCart(product, true)} className="text-black font-medium text uppercase">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
