import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Table({ data, onDetailsDisplay, onIncrementQuantity, onDecrementQuantity }) {
  return (
    <div className="px-2">
      <table className="table-auto w-full mx-auto text-center text-md shadow-md text-gray-500 shadow-amber-200 mt-14 mb-10">
        <thead className="text-sm uppercase bg-amber-400 text-gray-50">
          <tr>
            <th className="px-2 py-4">Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr
              key={entry.id}

              className="border-b border-amber-200"
            >
              <td
                onClick={() => onDetailsDisplay(entry.id)}
                className="cursor-pointer px-2 py-4">
                {entry.name}
              </td>
              <td className="px-2 py-4">{"$" + entry.price}</td>
              <td className="px-2 py-4">{entry.quantity ? entry.quantity : 'Out of stock'}</td>
              <td className="flex justify-center items-center space-x-2 py-4 ">
                <button onClick={() => onIncrementQuantity(entry.id)} className='bg-zinc-400 w-10 px-1 py-2 hover:rounded-xl text-zinc-100 font-medium border opacity-80'>Add</button>
                <button onClick={() => onDecrementQuantity(entry.id)} className='bg-zinc-400 w-10 px-1 py-2 hover:rounded-xl text-amber-200 font-medium border'>Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  onDetailsDisplay: PropTypes.func,
  onIncrementQuantity: PropTypes.func,
  onDecrementQuantity: PropTypes.func,
}