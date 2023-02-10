import React from "react";
import data from "./data";
import Product from "./utility-components/Product";

export default function Table() {
  let productArray = [];

  productArray = data.map((entry) => (
    <Product key={entry.id}>
      <tr className="odd:bg-blue-300 odd:text-gray-50">
        <td className="px-1 py-2">{entry.name}</td>
        <td className="px-1 py-2">{"$" + entry.price}</td>
        <td className="px-1 py-2">{entry.quantity}</td>
      </tr>
    </Product>
  ));

  return (
    <table className="table-fixed w-full text-center text-md shadow-md shadow-blue-200 mt-14 mb-10">
      <thead className="text-sm uppercase bg-gray-50 rounded-full">
        <tr>
          <th className="px-1 py-2">Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody >{productArray}</tbody>
    </table>
  );
}
