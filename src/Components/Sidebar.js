import React, { useRef, useEffect } from "react";
import img4 from "../image/la2.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ toggleMenu }) => {
  const sidebarRef = useRef(null);

  const navigate=useNavigate()
  useEffect(() => {
    const handleTouchStart = (e) => {
      sidebarRef.current.startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchEndX = e.touches[0].clientX;
      const swipeDistance = sidebarRef.current.startX - touchEndX;

      if (swipeDistance > 50) {
        toggleMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        toggleMenu(); 
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  const email=()=>{
    window.location.href = 'mailto:sibapradhan2904@gmail.com?subject=Support Request&body=Please describe your issue...';

  }
  const whatsapp = () => {
    const phoneNumber = "63707933232"; 
    const message = "Hello! I'm interested in your services."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const phoneNumber = "+91637093232"
  const call=()=>{
    window.location.href = `tel:${phoneNumber}`;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here is something interesting to share with you.',
          url: 'https://github.com/shivpradhan2904', 
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };
  return (
    <div className="p-4" ref={sidebarRef}>
      <div className="flex justify-between items-center my-3 gap-2 sm:mx-1">
        <img
          className="h-10 w-16 md:h-16 md:w-20"
          src={img4}
          alt="LA Smart Assistant"
        />
        <span className="flex-grow font-bold bg-[#2B7A78] text-sm sm:text-xl md:ml-2 sm:ml-2">
          L A Smart Assistant
        </span>
      </div>
      <div className="h-1 w-full bg-white"></div>

      <div className="h-3 w-full text-xs font-normal text-white py-3">
        My Account
      </div>
      <nav>
        <ul className="space-y-4 pt-5">
          <li>
            <button onClick={()=>navigate("/profileform")} className="block text-sm hover:text-blue-400">
              My Profile
            </button>
          </li>
          <li>
            <button onClick={()=>navigate("/fevorite")} className="block text-sm hover:text-blue-400">
              My Favorite
            </button>
          </li>
          <li>
            <button onClick={()=>navigate("/cart")} className="block text-sm hover:text-blue-400">
              My Cart (Work List)
            </button>
          </li>
          <li>
            <button onClick={()=>navigate("/order")} className="block text-sm hover:text-blue-400">
              My Work Orders
            </button>
          </li>
          <li>
            <button onClick={()=>navigate("/work")} className="block text-sm hover:text-blue-400">
              Assigned Work
            </button>
          </li>
        </ul>
      </nav>
      <div className="h-1 w-full mt-3 bg-white"></div>

      <div className="h-3 w-full text-xs font-normal text-white py-3">
        Support
      </div>
      <nav>
        <ul className="space-y-4 pt-5">
          <li>
            <button onClick={()=>navigate("/FAQ")} className="block text-sm hover:text-blue-400">
              FAQ
            </button>
          </li>
          <li>
            <button onClick={email} className="block text-sm hover:text-blue-400">
              Email
            </button>
          </li>
          <li>
            <button onClick={call} className="block text-sm hover:text-blue-400">
              Call
            </button>
          </li>
          <li>
            <button onClick={whatsapp} className="block text-sm hover:text-blue-400">
              WhatsApp
            </button>
          </li>
        </ul>
      </nav>
      <div className="h-1 w-full bg-white my-3"></div>

      <div className="h-3 w-full text-xs font-normal text-white py-3">
        Others
      </div>
      <nav>
        <ul className="space-y-4 pt-5">
          <li>
            <button onClick={handleShare} className="block text-sm hover:text-blue-400">
              Share
            </button>
          </li>
          <li>
            <button className="block text-sm hover:text-blue-400">
              Rate App
            </button>
          </li>
          <li>
            <button className="block text-sm hover:text-blue-400">
              App Info
            </button>
          </li>
          <li>
            <button className="block text-sm hover:text-blue-400">
              Version 2.3.5
            </button>
          </li>
          <li>
            <button className="block text-sm hover:text-blue-400">
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
