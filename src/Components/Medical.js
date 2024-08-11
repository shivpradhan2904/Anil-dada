import React from 'react'
import img2 from "../image/AIIMS_BBSR.jpg";
import img10 from "../image/Enquiry.png";
import img1 from "../image/images (9).jpeg";

function Medical() {
  return (
    <div className='py-4'>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 sm:mx-8 lg:mx-16">
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
          href="/aiims" className="max-w-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={img1}
              className="h-24 w-24 mb-4 sm:w-32 sm:h-32 lg:w-56 lg:h-40 "
              alt=""
            />
            <div className="text-center flex-grow">
              <p className="text-xs font-bold">
                Eye clinic Bhubaneswer - Guide Charges
              </p>
              <strong className="text-xl">₹ 0</strong>
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

export default Medical
