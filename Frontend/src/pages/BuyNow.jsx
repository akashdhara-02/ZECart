// src/pages/BuyNow.jsx

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      alert("Please fill all fields.");
      return;
    }

    const order = {
      ...form,
      product,
      date: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  if (!product) {
    return (
      <div className="text-white text-center mt-20 h-162 w-full">Product not found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center py-10 px-4 h-162">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Shipping Form */}

        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />

            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />

            <textarea
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />

            <input
              type="text"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />

            <input
              type="text"
              placeholder="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />

            <input
              type="text"
              placeholder="Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full bg-zinc-800 p-3 rounded"
            />
          </div>
        </div>

        {/* Order Summary */}

        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <img
            src={product.image}
            alt={product.title}
            className="h-60 w-full object-cover rounded-lg"
          />

          <h3 className="text-xl font-semibold mt-5">{product.title}</h3>

          <p className="text-gray-400 mt-2">{product.description}</p>

          <p className="text-3xl text-green-400 font-bold mt-6">
            ₹{product.price}
          </p>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
