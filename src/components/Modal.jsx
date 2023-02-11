import { React, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import EditControlPanel from "./EditControlPanel";
import ModalProduct from "./utility-components/ModalProduct";
import PropTypes from 'prop-types';

export default function Modal({ data, onModalClose, selectedProduct, onEditClick, onUpdateSelectedProduct, }) {
  const indexOf = data.indexOf(selectedProduct);
  const [currentSlide, setCurrentSlide] = useState(indexOf);
  const [displayModal, setDisplayModal] = useState(true);

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    onUpdateSelectedProduct(data[newSlide].id);
  };

  const nextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    onUpdateSelectedProduct(data[newSlide].id);
  };

  const closeModal = () => {
    setDisplayModal(false);
    onModalClose();
  };
  
  const setDisplayModalFalse = () => {
    setDisplayModal(false);
  };

  const refObject = useRef(null);
  // instantiates a ref object of null value, insert the refObject as a ref prop in the element you want to reference
  // access the referenced obj in current property

  const handleClickOutside = (event) => {
    event.target === refObject.current && setDisplayModal(false);
    event.target === refObject.current && onModalClose();
  };

  return (
    <>
      {displayModal && (
        <div
          onClick={handleClickOutside}
          ref={refObject}
          className="fixed z-10 top-0 left-0 w-full h-full overflow-auto bg-opacity-60 bg-black"
        >
          <div className="sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[38%] 2xl:w-[30%] mx-auto px-2">
            <div className="mt-[47%] xl:mt-[38%]">
              <div className="max-w-lg h-full bg-white flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-lg shadow-blue-200 px-4 justify-center">
                <AiOutlineLeft
                  onClick={prevSlide}
                  className="absolue left-0 text-3xl inset-y-1/2 ml-5 text-gray-400 cursor-pointer"
                ></AiOutlineLeft>
                <Swipe onSwipeLeft={prevSlide} onSwipeRight={nextSlide}>
                  <ModalProduct data={data} currentSlide={currentSlide}></ModalProduct>
                  <EditControlPanel whenExitModal={setDisplayModalFalse} whenEditClick={onEditClick}></EditControlPanel>
                </Swipe>
                <AiOutlineRight
                  onClick={nextSlide}
                  className="absolue right-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
                ></AiOutlineRight>
                <div
                  onClick={closeModal}
                  className="float-right font-semibold text-gray-500 text-4xl self-start cursor-pointer"
                >
                  &times;
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  data: PropTypes.array,
  onModalClose: PropTypes.func,
  selectedProduct: PropTypes.object,
  onEditClick: PropTypes.func,
  onUpdateSelectedProduct: PropTypes.func,
}