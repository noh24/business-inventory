import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}
