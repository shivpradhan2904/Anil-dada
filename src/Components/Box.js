import React from "react";
import img from "../image/8259448.png";
import img1 from "../image/call.png";
function Box() {
  const location=()=>{
    alert("Enable Your GPS")
  }
  const openWhatsApp = () => {
  const phoneNumber = "63707933232"; // Replace with the desired phone number
  const message = "Hello! I'm interested in your services."; // Replace with your message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
  return (
    <div className="my-3">
      <div className="bg-white flex flex-col p-2 mx-4 shadow-lg rounded-lg">
        <div className="flex justify-between gap-5">
          <button onClick={location} className="flex-1 flex items-center justify-center text-center">
            <img src={img} alt="#" className="h-9 w-9 sm:w-10 sm:h-10 mr-2" />{" "}
            <div className="flex flex-col items-center">
              <strong className="text-xs sm:text-xl ">View Distance</strong>
              <span className=" text-sm text-gray-600">From Your Place</span>
            </div>
          </button>

          <button onClick={openWhatsApp} className="flex-1 flex items-center justify-center text-center">
            <img src={img1} alt="#" className="h-8 w-8 sm:w-10 sm:h-10 mr-2" />
            <div className="flex flex-col items-center">
              <strong className="sm:text-xl text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                +91 63707933232
              </strong>
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
