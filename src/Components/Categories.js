import React from "react";
import { Link } from "react-router-dom"; 

import img from '../image/application.jpg'
import img1 from '../image/la.jpg'
import img2 from '../image/digital-india.jpg'
import img3 from '../image/Education.png'
import img4 from '../image/medical.jpg'
import img5 from '../image/shopping.jpg'

function Categories() {
  return (
    <div className="my-5 ">
      <div className="pb-4">
      <span className="text-black text-2xl ml-6  font-bold">
        Categories
      </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
        <Link
              to="/software-application"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Software Application</span>
            </div>
          </div>
        </Link>

        <Link
              to="/hire-smart-assistant"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img1}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Hire a Smart Assistant</span>
            </div>
          </div>
        </Link>
        
        <Link
              to="/online-service"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img2}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Online Service</span>
            </div>
          </div>
        </Link>

        <Link
              to="/education"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img3}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Education</span>
            </div>
          </div>
        </Link>

        <Link
              to="/medical"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img4}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Medical</span>
            </div>
          </div>
        </Link>

        <Link
              to="/online-store"
          className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img5}
              className="h-24 w-32 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <span className="text-xs font-bold">Online Store and Other</span>
            </div>
          </div>
        </Link>


      </div>
    </div>
  );
}

export default Categories;
