import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export default function EditProduct({
  selectedProduct,
  onModalClose,
  onEditSubmit,
}) {
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
  };

  return (
    <>
      {displayModal && (
        <form
          onSubmit={handleSubmission}
          onClick={handleClickOutside}
          ref={refObject}
          className="fixed z-10 top-0 left-0 w-full h-full overflow-auto bg-opacity-60 bg-black"
        >
          {/* <div className="sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[38%] 2xl:w-[30%] mx-auto px-2"> */}
          <div class="container mx-auto flex justify-center w-full flex-shrink-0 lg:w-1/3">
            {/* <div className="mt-[47%] xl:mt-[38%]"> */}
            <div className="mt-48">
              <div className="max-w-lg h-full bg-white flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-lg shadow-amber-200 px-4 justify-center">
                <div className="block w-full h-auto object-cover py-3 px-2 ml-4 text-center ">
                  <input
                    type="text"
                    name="name"
                    placeholder={name + "..."}
                    required
                    className="text-3xl pb-2 text-gray-600 px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full focus:border-transparent text-center "
                  ></input>
                  <img
                    className="px-1 py-2 mx-auto"
                    src={photo}
                    alt={name}
                  ></img>
                  <div className="flex justify-around text-gray-500 px-1 py-2">
                    <input
                      type="number"
                      min="0"
                      name="quantity"
                      placeholder={
                        quantity ? quantity + " Remaining..." : "Sold out"
                      }
                      required
                      className="px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full focus:border-transparent text-center "
                    ></input>
                    <input
                      type="number"
                      min="0"
                      name="price"
                      placeholder={"$" + price}
                      required
                      className="px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full focus:border-transparent text-center"
                    ></input>
                  </div>
                  <button className="border px-2 py-2 rounded bg-amber-400 text-gray-50 hover:text-white hover:bg-amber-500 shadow">
                    Save Changes
                  </button>
                </div>
                <div
                  onClick={closeModal}
                  className="float-right font-semibold text-gray-500 text-4xl self-start cursor-pointer hover:text-gray-300"
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
};
