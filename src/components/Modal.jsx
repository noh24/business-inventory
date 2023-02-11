import { React, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import Product from "./utility-components/Product";

export default function Modal({ data, onModalClose, selectedProduct }) {
  const indexOf = data.indexOf(selectedProduct);
  const [currentSlide, setCurrentSlide] = useState(indexOf);
  const [displayModal, setDisplayModal] = useState(true);

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  
  const closeModal = () => {
    setDisplayModal(false);
    onModalClose();
  };
  const refObject = useRef(null);
  // instantiates a ref object of null value, insert the refObject as a ref prop in the element you want to reference
  // access the referenced obj in current property
  
  const handleClickOutside = (event) => {
    event.target === refObject.current && setDisplayModal(false);
    event.target === refObject.current && onModalClose();
  }

  return (
    <>
      {displayModal &&
        <div
        onClick={handleClickOutside}
          ref={refObject}
          className="fixed z-10 top-0 left-0 w-full h-full overflow-auto bg-opacity-60 bg-black"
        >
          <div ref={refObject} className="w-1/2 mx-auto my-auto px-2">
            <div className="mt-[49%]">
              <div className="max-w-lg h-full bg-white flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-lg shadow-blue-200 px-4">
                <AiOutlineLeft
                  onClick={prevSlide}
                  className="absolue left-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
                ></AiOutlineLeft>
                <Swipe onSwipeLeft={prevSlide} onSwipeRight={nextSlide}>
                  {data.map((entry, index) => (
                    <Product key={entry.id}>
                      <div
                        className={
                          index === currentSlide
                            ? "block w-full h-auto object-cover py-3 px-2 text-center"
                            : "hidden"
                        }
                      >
                        <p className="text-3xl pb-2 text-gray-600">
                          {entry.name}
                        </p>
                        <img
                          className="px-1 py-2"
                          src={entry.photo}
                          alt={entry.name}
                        ></img>
                        <div className="flex justify-between text-gray-500 px-1 py-2">
                          <p>
                            {entry.quantity
                              ? entry.quantity + " Remaining"
                              : "Sold out"}
                          </p>
                          <p>{"$" + entry.price}</p>
                        </div>
                      </div>
                    </Product>
                  ))}
                </Swipe>
                <AiOutlineRight
                  onClick={nextSlide}
                  className="absolue right-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
                ></AiOutlineRight>
                <div
                  onClick={closeModal}
                  className="float-right font-bold text-4xl self-start cursor-pointer"
                >
                  &times;
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
