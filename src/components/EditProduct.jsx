import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';

export default function EditProduct({ selectedProduct, onModalClose, onEditSubmit }) {
  const { name, price, quantity, photo, id } = selectedProduct;
  const [displayModal, setDisplayModal] = useState(true);

  const closeModal = () => {
    setDisplayModal(false);
    onModalClose();
  };

  const refObject = useRef(null);

  const handleClickOutside = (event) => {
    event.target === refObject.current && setDisplayModal(false);
    event.target === refObject.current && onModalClose();
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    let name, price, quantity;
    name = event.target.name.value;
    price = event.target.price.value;
    quantity = event.target.quantity.value;

    const edittedProduct = {
      name,
      price,
      quantity,
      photo,
      id,
    };
    onEditSubmit(edittedProduct);
  }

  return (
    <>
      {displayModal && (
        <form
          onSubmit={handleSubmission}
          onClick={handleClickOutside}
          ref={refObject}
          className="fixed z-10 top-0 left-0 w-full h-full overflow-auto bg-opacity-60 bg-black"
        >
          <div className="sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[38%] 2xl:w-[30%] mx-auto px-2">
            <div className="mt-[47%] xl:mt-[38%]">
              <div className="max-w-lg h-full bg-white flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-lg shadow-blue-200 px-4 justify-center">
                <div className="block w-full h-auto object-cover py-3 px-2 ml-4 text-center ">
                  <input  type="text" name="name" placeholder={name + "..."} required className="text-3xl pb-2 text-gray-600 px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center "></input>
                  <img
                    className="px-1 py-2 mx-auto"
                    src={photo}
                    alt={name}
                  ></img>
                  <div className="flex justify-around text-gray-500 px-1 py-2">
                    <input type="number" name="quantity" placeholder={quantity ? quantity + " Remaining..." : "Sold out"} required className="px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center "></input>
                    <input type="number" name="price" placeholder={"$" + price} required className="px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full focus:border-transparent text-center"></input>
                  </div>
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
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  onClick={closeModal}
                  className="float-right font-semibold text-gray-500 text-4xl self-start cursor-pointer"
                >
                  &times;
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

EditProduct.propTypes = {
  selectedProduct: PropTypes.object,
  onModalClose: PropTypes.func,
  onEditSubmit: PropTypes.func,
}