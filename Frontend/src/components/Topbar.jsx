import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";








const Topbar = () => {







  const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");


    const {logout}=useContext(AuthContext);

    const navigate=useNavigate();




  const handleLogout = () => {

    logout();
    navigate("/login");
    alert("Logged out");

  };





    const handleSearch = (e) => {
      e.preventDefault();
  
      if (!query.trim()) return;
  
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    };
  

  return (
    <div className="h-14 w-full px-2 flex justify-between items-center shadow-md relative bg-white gap-1">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-blue-600">
        ZECart
      </Link>

       <form onSubmit={handleSearch} className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-md px-2 py-2 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex"
        >
          Search
        </button> */}
      </form> 

      {/* Menu */}
      {/* <div className="relative">
        {/* Popup */}
        {/* <div className="flex items-center ">
          <div
            className={`flex items-center gap-5 overflow-hidden transition-all duration-500 ease-in-out
                ${open ? "max-w-[600px] opacity-100 mr-4" : "max-w-0 opacity-0"}`}
          >
            <Link to="/signup">Signup</Link>

            <button className="bg-red-500 text-white texl-2xl px-4 py-2 bordered rounded-xl shadow-sm border-black"
            onClick={handleLogout}
            >Logout</button>
          </div>

          <button onClick={() => setOpen(!open)}>
            <FiMenu size={28} />
          </button>
        </div>
      </div>  */}
    </div>
  );
};

export default Topbar;
