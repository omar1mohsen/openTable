import React from "react";
import Header from "./components/Header";

export default function Loading() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Header />
      <div className="mt-10 py-3 px-36 flex flex-wrap justify-center">
        {cards.map((card) => (
          <div className="mx-auto mb-4 bg-white shadow-lg w-64 h-72 rounded-2xl">
            <div className=" p-3 h-40 overflow-hidden bg-gray-200 animate-pulse"></div>
            <div className="p-3 h-">
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
                <div className="col-span-2 "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
