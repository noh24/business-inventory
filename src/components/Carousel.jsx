import { React, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import data from "./data";
import Product from "./utility-components/Product";

export default function Carousel() {
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
      <div className="mt-14">
        <div className="max-w-lg h-full flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow-md shadow-blue-200 px-4">
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
                  <p className="text-3xl pb-2 text-gray-600">{entry.name}</p>
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
        </div>
      </div>
    </div>
  );
}
