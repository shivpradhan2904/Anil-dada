import React from 'react'
import img3 from "../image/shop.png";
import img2 from "../image/arrow.png";
import ser from "../image/ser.jpg";
import { useNavigate } from 'react-router-dom';


function Search() {
  const navigate=useNavigate()
  return (
    <div>
      <div className='w-full min-h-10 bg-[#3AAFA9] text-center flex justify-between items-center'>
        <button onClick={()=>navigate('/home')}><img className='w-9 m-2' src={img2} alt="" /></button>
        <div className='py-2 text-white text-xl  font-medium'>
          Search
        </div>
        <button onClick={()=>navigate('/shop')}>
          <img className="w-7 m-2" src={img3} alt="#" />
        </button>
      </div>

      
      <div className="w-full flex justify-center mt-4 px-4">
          <div className="flex items-center bg-white shadow-md rounded-lg p-2 w-full max-w-sm sm:px-4">
            <button  className="p-2">
              <img src={ser} alt="sorry" className="h-6 w-6" />
            </button>
            <input
              type="text"
              className="flex-grow outline-none px-4 py-2 rounded-lg"
              placeholder="Search..."
            />
          </div>
      </div>
      <div className='w-full  flex justify-center items-center h-screen text-sm  md:text-3xl'>
        <div className='mb-60  text-gray-600'>
        Search Any Items here
        </div>
      </div>

    </div>
  )
}

export default Search
