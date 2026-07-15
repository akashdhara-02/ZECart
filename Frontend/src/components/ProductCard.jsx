import { Link } from "react-router-dom";

// Reusable card used on Home, Categories, and Search pages
const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
      <p className="text-primary font-bold mt-1">${product.price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;
