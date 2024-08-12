import React from "react";
import img from "../image/ganesh.jpeg";
import img1 from "../image/odisha.webp";
import img2 from "../image/AIIMS_BBSR.jpg";
import img3 from "../image/domain.png";
import img4 from "../image/hk-painters-shastri-nagar-jaipur-house-painters-vrx0odjsgy.avif";
import img5 from "../image/images (1).jpeg";
import img6 from "../image/images (2).jpeg";
import img7 from "../image/images.jpeg";
import img8 from "../image/Parivahan-Odisha.png";

function Items() {
  return (
    <div>
      <div className="py-3">
      <span className="textbg-[#3AAFA9] text-2xl ml-4 pb-3 font-bold">
        Recommended
      </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
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
          href="/emplye" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img1}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Employment Exchange - Registration charges +3, Bed and </p>
              <strong className="text-xl">₹ 200</strong>
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
                AIIMS BBSR-Online Apply -
              </p>
              <p className="text-sm">Appointment-</p>
              <strong className="text-xl">₹ 50</strong>
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
                Book a Domain - in and net domain -
              </p>
              <p className="text-sm">cost-</p>
              <strong className="text-xl">₹ 1000</strong>
            </div>
          </div>
        </a>

        <a
          href="/painter" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img4}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Painter-</p>
              <p className="text-sm">Per day</p>
              <strong className="text-xl">₹ 700</strong>
            </div>
          </div>
        </a>

        <a
          href="/playstore" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img5}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Play store Lunch App (Android)
              </p>
              <p className="text-sm">1st Time update-</p>
              <strong className="text-xl">₹ 2000</strong>
            </div>
          </div>
        </a>

        <a
          href="/software" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img6}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Software Training -</p>
              <p className="text-sm">Per Hour</p>
              <strong className="text-xl">₹ 500</strong>
            </div>
          </div>
        </a>

        <a
          href="/sahara" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img7}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Sahara Refund - Apply online
              </p>
              <strong className="text-xl">₹ 150</strong>
            </div>
          </div>
        </a>

        <a
          href="/parivahan" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img8}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Parivahan - Online Apply Charges
              </p>
              <strong className="text-xl">₹ 100</strong>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Items;
