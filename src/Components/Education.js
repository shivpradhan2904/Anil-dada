import React from 'react'
import img10 from "../image/Enquiry.png";
import img1 from "../image/odisha.webp";
import img2 from "../image/soft.jpeg";
import img3 from "../image/images (8).jpeg";
import img4 from "../image/chi.jpg";
import img5 from "../image/math.jpg";

function Education() {
  return (
    <div className='py-5'>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
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
          href="/emplye" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img2}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Software Training- Per Hour</p>
              <strong className="text-xl">₹ 500</strong>
            </div>
          </div>
        </a><a
          href="/emplye" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img3}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Resume/CV Writing - Experience More than 5</p>
              <strong className="text-xl">₹ 5000</strong>
            </div>
          </div>
        </a>
        
        <a
          href="/emplye" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img4}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Child counseling - 1hr</p>
              <strong className="text-xl">₹ 300</strong>
            </div>
          </div>
        </a><a
          href="/emplye" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img5}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">Math and Computer Teacher - 1hr </p>
              <strong className="text-xl">₹ 500</strong>
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
    </div>
    </div>
  )
}

export default Education
