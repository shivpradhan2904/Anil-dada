import React from "react";
import img4 from "../image/hk-painters-shastri-nagar-jaipur-house-painters-vrx0odjsgy.avif";
import img8 from "../image/Enquiry.png";
import img1 from "../image/images (7).jpeg";
import img2 from "../image/pan.jpg";
import img3 from "../image/mas.webp";
import img5 from "../image/smr.webp";
import img6 from "../image/lab.png";
import img7 from "../image/dr.jpeg";


function Hire() {
  return (
    <div className='py-4'>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
       <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img4}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Painter - Per Day</p>
              <strong className="text-xl">₹ 700</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img1}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Scrap Boy - Booking Amount(Refundable)</p>
              <strong className="text-xl">₹ 100</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img2}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Pandit - Per day</p>
              <strong className="text-xl">₹ 1200</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img3}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Mason worker - Per day</p>
              <strong className="text-xl">₹ 700</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img5}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Smart Assistant (Personal) - Per hour</p>
              <strong className="text-xl">₹ 200</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img6}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Smart Labour - Per Hour</p>
              <strong className="text-xl">₹ 150</strong>
            </div>
          </div>
        </a>
        <a
          href="/painter"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img7}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Driver(Car) - per hour</p>
              <strong className="text-xl">₹ 120</strong>
            </div>
          </div>
        </a>
        <a
          href="/domain" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img8}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Other (Need Help)-Enquiry
              </p>
              <strong className="text-xl">₹ 100</strong>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hire;
