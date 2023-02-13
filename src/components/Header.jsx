import React from "react";
import logo from './../assets/logo.png'
export default function Header() {
  return (
    <div className="flex justify-center items-center px-5 my-6">
      <img src={logo} alt="logo" width="70px" height="10px"></img>
      <h1 className="text-3xl text-gray-500 text-center">
        Inventory System
      </h1>
    </div>
  );
}
