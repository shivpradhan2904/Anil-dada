import React,{useState} from 'react';
import img3 from "../image/shop.png";
import img1 from "../image/female.png"
import img2 from "../image/male.png"
import img4 from "../image/arrow.png";
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const [selectedGender, setSelectedGender] = useState(null);
  
    const handleGenderChange = (gender) => {
      setSelectedGender(gender);
    };
    const navigate=useNavigate()

    
  return (
    <>
    <div className='w-full min-h-10 bg-[#3AAFA9] text-center flex justify-between items-center'>
        <button onClick={()=>navigate('/home')}><img className='w-9 m-2' src={img4} alt="" /></button>
        <div className='py-2 text-white text-xl  font-medium'>
          My Profile
        </div>
        <button onClick={()=>navigate('/shop')}>
          <img className="w-7 m-2" src={img3} alt="#" />
        </button>
      </div>

    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white w-full max-w-2xl mt-8 shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
              defaultValue="siba Pradhan"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Choose Gender *</label>
            <div className="flex space-x-20 justify-center">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGender === 'male'}
                  onChange={() => handleGenderChange('male')}
                  className="hidden"
                />
                <div
                  className={`w-12 h-12 rounded-full border-4 ${selectedGender === 'male' ? 'border-blue-500' : 'border-transparent'}`}>
                  <img
                    src={img2}
                    alt="Male"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGender === 'female'}
                  onChange={() => handleGenderChange('female')}
                  className="hidden"
                />
                <div
                  className={`w-12 h-12 rounded-full border-4 ${
                    selectedGender === 'female' ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img1}
                    alt="Female"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Mobile Number *</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">City *</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Locality, area or street *</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Flat no., Building name *</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Pincode *</label>
              <input
                type="text"
                className="w-full border-b-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">State *</label>
              <input
                type="text"
                className="w-full border-b-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Landmark(Optional)</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Referred by</label>
            <input
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">My Skills area and My Business Details</label>
            <textarea
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox bg-[#3AAFA9]"
              />
              <span className="ml-2 text-gray-700 text-sm">
                I like to Join as a Smart Assistant to help people
              </span>
            </label>
          </div>

          {/* Update Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#3AAFA9] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ProfileForm;
