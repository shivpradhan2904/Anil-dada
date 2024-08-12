import React from 'react'
import img2 from "../image/arrow.png";
import { useNavigate } from 'react-router-dom';

function Order() {
    const navigate=useNavigate()

  return (
    <div>
    <div className="w-full min-h-10 bg-[#3AAFA9] text-center flex justify-between items-center">
      <button onClick={() => navigate("/home")}>
        <img className="w-9 m-2" src={img2} alt="" />
      </button>
      <div className="py-2 text-white text-xl  font-medium">
        My Work Orders
      </div>
      <div></div>
    </div>

    <div className="h-screen w-full flex flex-col justify-center items-center">
        <div>You haven't make any order yet!</div>
        <div className='text-sm text-gray-400'>Make Your First Order Now</div>
      <button className="bg-[#3AAFA9] rounded-lg p-2 mt-4">
        Add a work order Now
      </button>
    </div>
  </div>
  )
}

export default Order
