import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { MdHome } from "react-icons/md"; // Material Design

import { MdPerson } from "react-icons/md"; // Material Design (Person)
import { BiCategory } from "react-icons/bi"; // BoxIcons
import { MdShoppingCart } from "react-icons/md";

const Topbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart, clearCartState } = useContext(CartContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleLogout = () => {
    logout();
    clearCartState();
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
  };

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
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </Link>

      <Link to="/profile" className="hover:text-blue-600">
        <MdPerson size={30} />
      </Link>

      {/* Search
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Search
            </button>
          </form> */}
    </nav>
  );
};

export default Topbar;
