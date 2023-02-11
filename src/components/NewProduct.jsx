import React from "react";
import iphone from "./../assets/iphone14plus.jpg";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';

export default function NewProduct({ onAddNewProduct }) {
  const handleSubmission = (event) => {
    event.preventDefault();

    let name, price, quantity;
    name = event.target.name.value;
    price = event.target.price.value;
    quantity = event.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
      photo: iphone,
      id: uuid(),
    };

    onAddNewProduct(newProduct);
  };

  return (
    <div className="px-2">
      <form
        onSubmit={handleSubmission}
        className="mt-10 flex flex-col items-center justify-center lg:w-1/2 mx-auto py-10 px-5 space-y-10 shadow rounded-lg shadow-blue-200"
      >
        <h1 className="text-3xl text-gray-500">Add Product</h1>
        <input
          type="text"
          name="name"
          required
          placeholder="Name..."
          className="px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center "
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Price..."
          className="px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center "
        />
        <input
          type="number"
          name="quantity"
          required
          placeholder="Quantity..."
          className="px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center "
        />
        <button className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 focus:outline-none shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

NewProduct.propTypes = {
  onAddNewProduct: PropTypes.func,
}