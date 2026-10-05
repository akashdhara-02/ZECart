import React from 'react';
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext.jsx";
// import { CartContext } from "../context/CartContext.jsx";
import { MdHome } from "react-icons/md"; // Material Design

import { MdPerson } from "react-icons/md"; // Material Design (Person)
import { BiCategory } from "react-icons/bi"; // BoxIcons
import { MdShoppingCart } from "react-icons/md";






const Botbar = () => {



  // const { user, logout } = useContext(AuthContext);
  // const { cart, clearCartState } = useContext(CartContext);
  const navigate = useNavigate();



  return (
    <nav className=" px-4 py-3 flex items-center justify-around bg-white shadow sticky bottom-0 left-0 z-50 h-12 w-full fixed ">
      <Link to="/home" className="hover:text-blue-600">
        <MdHome size={30} />
      </Link>

      <Link to="/categories" className="hover:text-blue-600">
        <BiCategory size={30}  />
      </Link>

      <Link to="/cart" className="relative hover:text-blue-600">
        <MdShoppingCart size={30} />
      </Link>

      <Link to="/profile" className="hover:text-blue-600">
        <MdPerson size={30} />
      </Link>

      
    </nav>
  );
};

export default Botbar;
