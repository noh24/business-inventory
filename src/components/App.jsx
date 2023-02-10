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
      <Header>
        <Logo src={logo} alt="logo" width="70px" height="10px" ></Logo>
        <h1 className="text-3xl text-gray-500">Get Your Apple Products</h1>
        <NavBar>
          <Button>Home</Button>
          <Button>Inventory</Button>
        </NavBar>
      </Header>
      <MainContent></MainContent>
    </div>
  )
}