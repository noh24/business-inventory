import React from "react";
import Product from "./utility-components/ModalProduct";

export default function Table({ data, onDetailsDisplay }) {
  return (
    <div className="px-2">
      <table className="table-fixed w-full lg:w-1/2 mx-auto text-center text-md shadow-md text-gray-500 shadow-blue-200 mt-14 mb-10">
        <thead className="text-sm uppercase bg-gray-50 rounded-full">
          <tr>
            <th className="px-3 py-2">Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr
              key={entry.id}
              onClick={() => onDetailsDisplay(entry.id)}
              className="odd:bg-blue-400 odd:text-gray-100 cursor-pointer"
            >
              <td className="px-1 py-2">{entry.name}</td>
              <td className="px-1 py-2">{"$" + entry.price}</td>
              <td className="px-1 py-2">{entry.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
