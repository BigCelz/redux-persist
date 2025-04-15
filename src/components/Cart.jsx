import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../cartSlice";

const Cart = () => {
  const { items: cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-24 px-4 py-5 max-w-6xl mx-auto bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Added Items</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg mb-4">Your bag is empty</p>
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
          >
            Back to Products
          </Link>
        </div>
      ) : (
        <div className="grid gap-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4 "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mr-4 bg-gray-100 p-2 rounded"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title.length > 50
                    ? item.title.slice(0, 50) + "..."
                    : item.title}
                </h2>
                <p className="text-sm text-gray-500">
                  Quantity: x{item.quantity}
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => dispatch(removeItemFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
