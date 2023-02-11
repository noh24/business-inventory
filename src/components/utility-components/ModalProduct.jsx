import React from "react";

export default function ModalProduct({ data, currentSlide }) {
  return (
    <>
      {data.map((entry, index) => (
        <div key={entry.id}>
          <div
            className={
              index === currentSlide
                ? "block w-full h-auto object-cover py-3 px-2 pl- text-center"
                : "hidden"
            }
          >
            <p className="text-3xl pb-2 text-gray-600">{entry.name}</p>
            <img className="px-1 py-2" src={entry.photo} alt={entry.name}></img>
            <div className="flex justify-around text-gray-500 px-1 py-2">
              <p>
                {entry.quantity ? entry.quantity + " Remaining" : "Sold out"}
              </p>
              <p>{"$" + entry.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
