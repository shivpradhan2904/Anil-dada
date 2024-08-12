import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../image/Hamburger_icon.svg.png";
import img2 from "../image/png-clipart-computer-icons-search-box-button-button-desktop-wallpaper-search-box-thumbnail.png";
import img3 from "../image/shop.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="bg-[#3AAFA9] pt-1 flex justify-between md:flex text-[#F5F5F5] top-1 text-3xl font-bold p-2">
        <div>
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img className="w-7 h-7 m-2" src={img1} alt="Menu" />
          </button>
          <div
            className={`fixed top-0 left-0 h-full w-60 md:w-80 bg-[#2B7A78] text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out overflow-y-auto`}
          >
            {isOpen && <Sidebar toggleMenu={toggleMenu} />}
          </div>
        </div>

        <div className="font-serif text-base md:font-bold my-auto sm:text-xl md:text-2xl">
          L A Smart Assistant
        </div>
        <Link to="/search">
          <img className="w-7 m-1 pt-1" src={img2} alt="Search" />
        </Link>
        <button>
          <img
            onClick={() => navigate("/shop")}
            className="w-7 m-2"
            src={img3}
            alt="Shopping Cart"
          />
        </button>
      </div>

      <div>
        <ul className="w-full font-semibold bg-[#2B7A78] flex justify-between md:p-1 gap-5 text-[#F5F5F5] md:space-x-4 overflow-x-auto scrollbar-hide">
          <li className="whitespace-nowrap text-sm md:text-base ml-4 sm:ml-4 rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/home"
              className={
                currentPath === "/home" ? "border-b-4 border-[#333333]" : ""
              }
            >
              HOME
            </Link>
          </li>

          <li className="whitespace-nowrap text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/software-application"
              className={
                currentPath === "/software-application"
                  ? "border-b-4 border-[#333333]"
                  : ""
              }
            >
              SOFTWARE APPLICATION
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/online-service"
              className={
                currentPath === "/online-service"
                  ? "border-b-4 border-[#333333]"
                  : ""
              }
            >
              ONLINE SERVICE
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/hire-smart-assistant"
              className={
                currentPath === "/hire-smart-assistant"
                  ? "border-b-4 border-[#333333]"
                  : ""
              }
            >
              HIRE A SMART ASSISTANT
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/education"
              className={
                currentPath === "/education" ? "border-b-4 border-[#333333]" : ""
              }
            >
              EDUCATION
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/medical"
              className={
                currentPath === "/medical" ? "border-b-4 border-[#333333]" : ""
              }
            >
              MEDICAL
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base mr-4 rounded-lg transition-all duration-200 ease-in-out hover:text-[#333333] hover:scale-105 hover:shadow-lg">
            <Link
              to="/online-store"
              className={
                currentPath === "/online-store"
                  ? "border-b-4 border-[#333333]"
                  : ""
              }
            >
              ONLINE STORE AND OTHER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
