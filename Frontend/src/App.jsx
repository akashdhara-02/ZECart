import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Topbar from "./components/Topbar";
import Botbar from "./components/Botbar";
import Landing from "./pages/Landing"
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import Settings from "./pages/Settings";
import About from "./pages/About";
import BuyNow from "./pages/BuyNow";


const App = () => {
  return (
    <div className="bg-[#0f172a] ">
      <Topbar />

      <div key={location.pathname}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/BuyNow" element={<BuyNow />} />
        </Routes>
      </div>

      <Botbar />
    </div>
  );
};

export default App;
