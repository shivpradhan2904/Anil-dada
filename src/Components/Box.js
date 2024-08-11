import React from "react";
import img from "../image/8259448.png";
import img1 from "../image/call.png";
function Box() {
  return (
    <div className="my-3">
      <div className="bg-white flex flex-col p-2 mx-4 shadow-lg rounded-lg">
        <div className="flex justify-between">
          <button className="flex-1 flex items-center justify-center text-center">
            <img src={img} alt="#" className="h-8 w-8 mr-2" />{" "}
            <div className="flex flex-col items-start">
              <span className="text-base mr-2">View Distance</span>
              <span className=" text-sm text-gray-600">From Your Place</span>
            </div>
          </button>
          <button className="flex-1 flex items-center justify-center text-center">
            <img src={img1} alt="#" className="h-8 w-8 mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-base overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]">
                +91 63707933232
              </span>
              <span className="text-base text-gray-600">Tap to call</span>
            </div>
          </button>
        </div>
        <hr className="border-t-2 border-black my-2" />
        <a href="/moredetail" className="flex justify-end text-blue-700 font-bold">
          More Details {">"}
        </a>
      </div>
    </div>
  );
}

export default Box;
