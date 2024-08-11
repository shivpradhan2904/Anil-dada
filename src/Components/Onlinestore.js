import React from 'react'
import img10 from "../image/Enquiry.png";
import img1 from "../image/images (7).jpeg";
import img from "../image/ganesh.jpeg";
import img2 from "../image/images.png";
import img3 from "../image/images (10).jpeg";
import img5 from "../image/del.png";

function Onlinestore() {
  return (
    <div className='py-4'>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
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
          href="/aiims" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img2}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                All bIlls on eSolutin - Business Plan per month
              </p>
              <strong className="text-xl">₹ 10000</strong>
            </div>
          </div>
        </a>
        
        <a
          href="/puja"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Ganesh Puja -Thursday, August 8, 2024-</p>
              <strong className="text-xl">₹ 1999</strong>
            </div>
          </div>
        </a>
        
        <a
          href="/domain" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img10}
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

        <a
          href="/domain" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img3}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Banking - Jobs Apply online
              </p>
              <strong className="text-xl">₹ 100</strong>
            </div>
          </div>
        </a>
        <a
          href="/domain" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img5}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Shopping from grosery shop in home - By deliver
              </p>
              <strong className="text-xl">₹ 150</strong>
            </div>
          </div>
        </a>
    </div>
    </div>
  )
}

export default Onlinestore
