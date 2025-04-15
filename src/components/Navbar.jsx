import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {
  const { items:cartItems } = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between fixed top-0 z-50 w-full shadow-md">
      <Link to="/" className="text-xl font-bold">
       <div className="text-xl font-bold">Magic</div>
      </Link>

      <Link to="/cart" className="relative">
        <FiShoppingCart className="text-2xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
