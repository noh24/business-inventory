import React from "react";
import Header from "./utility-components/Header";
import NavBar from "./utility-components/NavBar";
import logo from "./../assets/logo.png";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div className="container mx-auto">
      <Header className="flex justify-between items-center px-5 mt-6">
        <img src={logo} alt="logo" width="70px" height="10px"></img>
        <h1 className="text-3xl text-gray-500 z-[-1] text-center">
          Apple Inventory
        </h1>
        <NavBar className="flex space-x-1"></NavBar>
      </Header>
      <MainContent></MainContent>
    </div>
  );
}
