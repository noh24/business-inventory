import { React, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import CarouselProduct from "./utility-components/CarouselProduct";

export default function Carousel({ data, onDetailsDisplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <div className="max-w-lg h-full flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-md shadow-blue-200 px-4 cursor-pointer">
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolue left-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
          ></AiOutlineLeft>
          <Swipe onSwipeLeft={prevSlide} onSwipeRight={nextSlide}>
            <CarouselProduct data={data} currentSlide={currentSlide} whenDetailsClick={onDetailsDisplay}></CarouselProduct>
          </Swipe>
          <AiOutlineRight
            onClick={nextSlide}
            className="absolue right-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
          ></AiOutlineRight>
        </div>
      </div>
    </div>
  );
}
