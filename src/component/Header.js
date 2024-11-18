import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-between items-center shadow-md shadow-black p-6">
      <Link to="/">
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#2e6ce0",
            fontSize: "1.5rem",
          }}
          className="font-semibold"
        >
          Election Analytics
        </h1>
      </Link>

      {/* toggle menu bar and x button for small screen*/}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-3xl text-blue-500 font-semibold"
      >
        {menuOpen ? <RxCross2 /> : <MdOutlineMenu />}
      </button>

      {/* Vertical Sliding Menu for Mobile */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-20 right-0 bg-white w-64 p-6 space-y-4 transform transition-all duration-300 shadow-lg border rounded-md"
        >
          {/* Menu List Items */}
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  2074 Data
                </span>
              </Link>
            </li>
            <li>
              <Link to="/2079-data-analytics" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/2079-data-analytics"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  2079 Data
                </span>
              </Link>
            </li>
            <li>
              <Link to="/2081-data-analytics" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/2081-data-analytics"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  2081 Data
                </span>
              </Link>
            </li>
            <li>
              <Link to="/comparison" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/comparison"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Comparison
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu (always visible) */}
      <div className="hidden lg:flex space-x-4">
        <Link to="/">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${
              location.pathname === "/"
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            2074 Data
          </button>
        </Link>
        <Link to="/2079-data-analytics">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${
              location.pathname === "/2079-data-analytics"
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            2079 Data
          </button>
        </Link>
        <Link to="/2081-data-analytics">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${
              location.pathname === "/2081-data-analytics"
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            2081 Data
          </button>
        </Link>
        <Link to="/comparison">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${
              location.pathname === "/comparison"
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Comparison
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
