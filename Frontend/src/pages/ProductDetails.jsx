import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    await addToCart(product._id, 1);
    setMessage("Added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  if (!product) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-162 w-full">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm p-6">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md w-full object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{product.category?.name}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-primary mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mb-4">{product.stock} in stock</p>

          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-2.5 rounded-md hover:opacity-90"
          >
            Add to Cart
          </button>

          {message && <p className="text-green-600 mt-2 text-sm">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
