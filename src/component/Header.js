import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="flex justify-between items-center shadow-md shadow-black p-6">
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
      <div className="flex space-x-4">
        <Link to="/data-analytics">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${
              location.pathname === "/data-analytics"
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
      </div>
    </div>
  );
};

export default Header;
