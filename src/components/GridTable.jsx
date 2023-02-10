import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import data from "./data";

export default class GridTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === data.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? data.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="mt-32">
          <div className="max-w-lg h-full flex overflow-scroll no-scrollbar items-center scroll-smooth py-2 rounded-lg shadow shadow-gray-400 px-4">
            <AiOutlineLeft
              onClick={this.prevSlide}
              className="absolue left-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
            ></AiOutlineLeft>
            <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
              {data.map((entry, index) => (
                <div
                  key={entry.id}
                  className={
                    index === this.state.currentSlide
                      ? "block w-full h-auto object-cover py-3 px-2 text-center"
                      : "hidden"
                  }
                >
                  <p className="text-3xl pb-2 text-gray-600">{entry.name}</p>
                  <img className="px-1 py-2" src={entry.photo} alt={entry.name}></img>
                  <div className="flex justify-between text-gray-500 px-1 py-2">
                    <p>{"Quantity: " + entry.quantity}</p>
                    <p>{"$" + entry.price}</p>
                  </div>
                </div>
              ))}
            </Swipe>
            <AiOutlineRight
              onClick={this.nextSlide}
              className="absolue right-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer"
            ></AiOutlineRight>
          </div>
        </div>
      </div>
    );
  }
}
