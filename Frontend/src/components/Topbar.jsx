import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="h-14 w-full px-8 flex justify-between items-center shadow-md relative bg-white">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-blue-600">
        ZECart
      </Link>

      {/* Menu */}
      <div className="relative">
        {/* Popup */}
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-5 overflow-hidden transition-all duration-500 ease-in-out
                ${open ? "max-w-[600px] opacity-100 mr-4" : "max-w-0 opacity-0"}`}
          >
            <Link to="/signup">Signup</Link>
            <Link to="/settings">Settings</Link>
          </div>

          <button onClick={() => setOpen(!open)}>
            <FiMenu size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
