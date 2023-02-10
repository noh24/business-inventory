import React from "react";
import Header from "./Header";
import Button from "./Button";
import GridTable from "./GridTable";

export default function MainContent() {
  return (
    <div>
      <Header className="flex items-end px-5 space-x-4">
        <Button className="border px-[0.3rem] py-[0.6rem] rounded bg-blue-500 text-gray-100 hover:bg-blue-600 space-y-[0.2rem] flex flex-col items-center justify-center">
          <div className="w-6 h-0.5 bg-gray-100"></div>
          <div className="w-6 h-0.5 bg-gray-100"></div>
          <div className="w-6 h-0.5 bg-gray-100"></div>
        </Button>
        <Button className="border px-2 py-2 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 space-y-[0.2rem] ">
          <div className="flex space-x-1 justify-center items-center ">
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
          </div>
          <div className="flex space-x-1 justify-center items-center">
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
          </div>
          <div className="flex space-x-1 justify-center items-center">
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
            <div className="w-[0.2rem] h-[0.2rem] bg-gray-100"></div>
          </div>
        </Button>
      </Header>

      <GridTable></GridTable>
    </div>
  );
}
