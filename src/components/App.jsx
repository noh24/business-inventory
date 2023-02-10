import React from 'react';
import Button from './Button';
import Header from './Header';
import NavBar from './NavBar';
import Logo from './Logo';
import logo from './../assets/logo.png';
import MainContent from './MainContent';

export default function App() {
  return (
    <div className="container mx-auto">
      <Header className="flex justify-between items-center px-5">
        <Logo src={logo} alt="logo" width="70px" height="10px" ></Logo>
        <h1 className="text-3xl text-gray-500">Get Your Apple Products</h1>
        <NavBar>
          <Button className="border px-3 py-2 rounded bg-blue-500 text-gray-100 hover:bg-blue-600">Home</Button>
          <Button className="border px-3 py-2 rounded bg-blue-500 text-gray-100 hover:bg-blue-600">Inventory</Button>
        </NavBar>
      </Header>
      <MainContent></MainContent>
    </div>
  )
}