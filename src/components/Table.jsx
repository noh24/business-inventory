import React from "react";
import PropTypes from 'prop-types';

export default function Table({ data, onDetailsDisplay }) {
  return (
    <div className="px-2">
      <table className="table-auto w-full mx-auto text-center text-md shadow-md text-gray-500 shadow-amber-200 mt-14 mb-10">
        <thead className="text-sm uppercase bg-amber-400 text-gray-50">
          <tr>
            <th className="px-2 py-4">Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr
              key={entry.id}
              onClick={() => onDetailsDisplay(entry.id)}
              className="cursor-pointer border-b border-amber-200"
            >
              <td className="px-2 py-4">{entry.name}</td>
              <td className="px-2 py-4">{"$" + entry.price}</td>
              <td className="px-2 py-4">{entry.quantity}</td>
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
}