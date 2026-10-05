import { useEffect, useState } from "react";


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get("/orders");
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(data);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 h-162 w-full">
      <h1 className="text-2xl font-bold mb-6 text-white">My Orders</h1>

      {loading ? (
        <p className="text-gray-400">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-500">
                  Order #{order._id.slice(-6).toUpperCase()} •{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {order.status}
                </span>
              </div>

              <div className="divide-y">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-1.5 text-sm"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <p className="text-right font-bold mt-2">
                Total: ${order.totalAmount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Ship to: {order.shippingAddress}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
