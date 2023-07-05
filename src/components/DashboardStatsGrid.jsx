import React from "react";
import { IoBagHandle } from "react-icons/io5";

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <div className="bg-white rounded-sm p-4 mt-3 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 items-center justify-center flex bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm pl-3 text-gray-500 font-light ">
            Total Sales
          </span>
          <div className="flex items-center pl-3">
            <strong className="text-md text-gray-700 font-semibold">
              $34525.60
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 mt-3 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 items-center justify-center flex bg-pink-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm pl-3 text-gray-500 font-light ">
            Total Sales
          </span>
          <div className="flex items-center pl-3">
            <strong className="text-md text-gray-700 font-semibold">
              $34525.60
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 mt-3 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 items-center justify-center flex bg-red-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm pl-3 text-gray-500 font-light ">
            Total Sales
          </span>
          <div className="flex items-center pl-3">
            <strong className="text-md text-gray-700 font-semibold">
              $34525.60
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 mt-3 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 items-center justify-center flex bg-yellow-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm pl-3 text-gray-500 font-light ">
            Total Sales
          </span>
          <div className="flex items-center pl-3">
            <strong className="text-md text-gray-700 font-semibold">
              $34525.60
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsGrid;
