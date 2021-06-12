import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discount: 0,
    total: 0
  });

  useEffect(() => {
    let price = 0, discount = 0, total = 0;
    cart.forEach(({ product, count }) => {
      price += product.mrp * count;
      discount += (product.mrp - product.sellingPrice) * count;
      total += product.sellingPrice * count;
    })
    setPriceDetails({
      price,
      discount,
      total
    })
  }, [cart]);

  return (
    <div className=" grid grid-cols-3 max-w-7xl p-4 justify-start gap-4 mx-auto">
      <div className="bg-white flex flex-col col-span-2 p-2">
        <h3 className=" border-b border-gray-300">My Cart ({cart.length})</h3>
        <div className="py-3">
          {cart.map(({ product, count }) => {
            return (
              <CartItem key={product.id} product={product} count={count} />
            );
          })}
        </div>
        <div className="shadow-xl p-4 border-t border-gray-300 flex justify-end">
          <button className="text-white uppercase text-lg px-8 py-2 bg-yellow-600">Place Order</button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white w-full  p-3">
          <h3 className=" border-b border-gray-300">Price Details</h3>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span>Price ({cart.length} item)</span>
              <span>₹{priceDetails.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Discount</span>
              <span className="text-green-600">-₹{priceDetails.discount}</span>
            </div>

            <div className="flex justify-between items-center text-lg font-medium">
              <span>total</span>
              <span>₹{priceDetails.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
