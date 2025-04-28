import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from "react-icons/io5";
import { toggleDarkMode } from "../darkModeSlice";



const Navbar = () => {
  const { items:cartItems } = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { darkMode} = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(()=> {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])
  

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900 px-6 py-4 flex items-center justify-between fixed top-0 z-50 w-full shadow-md">
      <Link to="/" className="text-xl font-bold">
       <div className="text-xl font-bold">Magic</div>
      </Link>

      
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative">
          <FiShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            {totalQuantity}
          </span>
        </Link>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 rounded-full  text-gray-900 hover:bg-gray-700 dark:text-white"
        >
          {darkMode ? (
            <IoSunny size={24} />
          ) : (
            <FaMoon size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
