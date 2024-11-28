import React from "react";
import ChartComponent from "./ChartComponent";
import Image from "next/image";
import ShopLogo from "@/public/shop_one.png";

const Header = () => {
  return (
    <div className="w-screen flex justify-center items-center pt-20 p-4">
      {/* Flex container for the two child divs */}
      <div className="xl:w-[70%] flex xl:flex-row md:flex-col md:w-screen gap-4 p-5">
        {/* Chart Div */}
        <div className="w-[60%] md:w-[90%]">
          <ChartComponent />
        </div>
        {/* Second Div (Info Box) */}
        <div className="xl:w-[40%] md:w-[90%] shadow-md rounded-lg bg-white border border-gray-300 flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <Image src={ShopLogo} alt="shop logo" width={300} height={300}/>
          </div>
          <div className="flex-col items-center justify-center p-5 leading-10">
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Shop:</span>
              <span className="">Fashionista</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Description:</span>
              <span className="">Latest women fashion</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Monthly sales:</span>
              <span className="">580</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Shirts:</span>
              <span className="">150</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Pants:</span>
              <span className="">80</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <span className="font-semibold">Shoes:</span>
              <span className="">50</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-blue-600 transition">
              View shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
