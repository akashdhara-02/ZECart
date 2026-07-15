import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios.js";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, fetchCart, removeFromCart, clearCartState } =
    useContext(CartContext);

  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      setMessage("Please enter your shipping address.");
      return;
    }

    try {
      await api.post("/orders", {
        shippingAddress: address,
      });

      clearCartState();
      navigate("/myorders");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to place order");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 h-162 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">My Cart</h1>

        <Link
          to="/myorders"
          className="bg-gray-300 px-5 py-2 rounded-md font-semibold"
        >
          My Orders
        </Link>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  <p className="text-gray-500">Category: {item.category}</p>

                  <p className="text-yellow-500">⭐ {item.rating}</p>

                  <p className="text-green-600 font-bold">₹{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 mt-8">
            <h2 className="text-xl font-bold mb-4">Total: ₹{total}</h2>

            <input
              type="text"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-4"
            />

            {message && <p className="text-red-500 mb-3">{message}</p>}

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
