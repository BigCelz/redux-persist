import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../itemSlice";
import { addItemToCart } from "../cartSlice";

const Item = () => {
  const { items, status } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === "loading")
    return (
      <div className="text-center text-lg text-blue-500 mt-20 animate-pulse">
        Loading...
      </div>
    );

  if (status === "failed")
    return (
      <div className="text-center text-lg text-red-500 mt-20 font-semibold">
        Error loading items
      </div>
    );

  return (
    <div className="pt-20 px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-gray-700 dark:text-white">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-contain p-4 "
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold dark:text-white text-gray-800">
              {item.title.length > 40
                ? item.title.slice(0, 40) + "..."
                : item.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400"> ${item.price} </p>
            <div className=" mt-3">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                onClick={() => dispatch(addItemToCart(item))}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
