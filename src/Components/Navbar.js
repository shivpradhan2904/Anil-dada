import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../image/Hamburger_icon.svg.png";
import img2 from "../image/png-clipart-computer-icons-search-box-button-button-desktop-wallpaper-search-box-thumbnail.png";
import img3 from "../image/png-clipart-shopping-cart-shopping-centre-icon-shopping-cart-text-retail.png";
import { useNavigate } from "react-router-dom";
import img4 from "../image/la.jpg";

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
      <div className="bg-lime-100 pt-1 flex justify-between md:flex text-gray-500 top-1 text-3xl font-bold p-2">
        <div>
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img className="w-7 h-7 m-2" src={img1} alt="Menu" />
          </button>
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white text-blue-600 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:transition-transform duration-300 ease-in-out overflow-y-auto`}  
          >
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="mb-4 text-sm font-bold text-blue-700 focus:outline-none"
              >
                Back-{">"}
              </button>

              <div className="flex justify-between items-center my-3 sm:mx-1">
                <img
                  className="h-10 w-20 md:h-10 md:w-24"
                  src={img4}
                  alt="LA Smart Assistant"
                />
                <span className="flex-grow font-bold text-blue-700 text-base md:text-lg sm:text-base  md:ml-3 sm:ml-2">
                  L A Smart Assistant
                </span>
              </div>
              <div className="h-1 w-full bg-blue-600"> </div>

              <div className="h-3 w-full text-sm font-normal text-black py-3">My Account</div>
              <nav>
                <ul className="space-y-4 pt-5">
                  <li>
                    <a
                      href="#profile"
                      className="block text-sm hover:text-blue-400"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#email"
                      className="block text-sm hover:text-blue-400"
                    >
                      My Favorite
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      className="block text-sm hover:text-blue-400"
                    >
                      My Cart (Work List)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block text-sm hover:text-blue-400"
                    >
                      My Work Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block text-sm hover:text-blue-400"
                    >
                      Assigned Work
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="h-1 w-full mt-3 bg-blue-600"> </div>

              <div className="h-3 w-full text-sm font-normal text-black py-3">Support</div>
              <nav>
                <ul className="space-y-4 pt-5">
                  <li>
                    <a
                      href="#profile"
                      className="block text-sm hover:text-blue-400"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#email"
                      className="block text-sm hover:text-blue-400"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      className="block text-sm hover:text-blue-400"
                    >
                      Call
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block text-sm hover:text-blue-400"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="h-1 w-full bg-blue-600 my-3"> </div>

              <div className="h-3 w-full text-sm font-normal text-black py-3">Others</div>
              <nav>
                <ul className="space-y-4 pt-5">
                  <li>
                    <a
                      href="#profile"
                      className="block text-sm hover:text-blue-400"
                    >
                      Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#email"
                      className="block text-sm hover:text-blue-400"
                    >
                      Rate App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      className="block text-sm hover:text-blue-400"
                    >
                      App Info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block text-sm hover:text-blue-400"
                    >
                      Version 2.3.5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block text-sm hover:text-blue-400"
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="font-serif text-xl my-auto sm:text-xl md:text-2xl">
          L A Smart Assistant
        </div>
        <Link to="/search">
          <img className="w-7 m-2" src={img2} alt="Search" />
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
        <ul className="w-full bg-blue-400 flex justify-between md:p-1 p-2 space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
          <li className="whitespace-nowrap text-sm md:text-base ml-4 sm:ml-4">
            <Link
              to="/home"
              className={
                currentPath === "/home" ? "border-b-4 border-white" : ""
              }
            >
              HOME
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base">
            <Link
              to="/software-application"
              className={
                currentPath === "/software-application"
                  ? "border-b-4 border-white"
                  : ""
              }
            >
              SOFTWARE APPLICATION
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base">
            <Link
              to="/online-service"
              className={
                currentPath === "/online-service"
                  ? "border-b-4 border-white"
                  : ""
              }
            >
              ONLINE SERVICE
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base">
            <Link
              to="/hire-smart-assistant"
              className={
                currentPath === "/hire-smart-assistant"
                  ? "border-b-4 border-white"
                  : ""
              }
            >
              HIRE A SMART ASSISTANT
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base">
            <Link
              to="/education"
              className={
                currentPath === "/education" ? "border-b-4 border-white" : ""
              }
            >
              EDUCATION
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base">
            <Link
              to="/medical"
              className={
                currentPath === "/medical" ? "border-b-4 border-white" : ""
              }
            >
              MEDICAL
            </Link>
          </li>
          <li className="whitespace-nowrap text-sm md:text-base mr-4">
            <Link
              to="/online-store"
              className={
                currentPath === "/online-store" ? "border-b-4 border-white" : ""
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
