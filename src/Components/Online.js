import React from 'react'
import img9 from "../image/6131877.jpeg";
import img7 from "../image/images.jpeg"; 
import img8 from "../image/Parivahan-Odisha.png";
import img1 from "../image/odisha.webp";
import img10 from "../image/Enquiry.png";
import img2 from "../image/mo.jpg";
import img3 from "../image/aad.png";
import img4 from "../image/pas.jpeg";
import img5 from "../image/eb.webp";



function Online() {
  return (
   <div className='py-5'>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
        <a
          href="/hrsp" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img9}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                HRSP (High Security Number Plate)
              </p>
              <strong className="text-xl">₹ 100</strong>
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
              src={img2}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Mo Ghara - Online Application
              </p>
              <strong className="text-xl">₹ 500</strong>
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
                Aadhar Card -per download
              </p>
              <strong className="text-xl">₹ 50</strong>
            </div>
          </div>
        </a>
        <a
          href="/domain" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img4}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Passport Seva
              </p>
              <strong className="text-xl">₹ 200</strong>
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
                Electric Bill - Service chage
              </p>
              <strong className="text-xl">₹ 50</strong>
            </div>
          </div>
        </a>
    </div>
    </div>
  )
}

export default Online
