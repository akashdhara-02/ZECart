import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: 999,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 3999,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  },
  {
    id: 4,
    title: "Men Hoodie",
    price: 1299,
    category: "Fashion",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 2999,
    category: "Fashion",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 6,
    title: "Coffee Mug",
    price: 499,
    category: "Home",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=600",
  },
  {
    id: 7,
    title: "Office Chair",
    price: 6499,
    category: "Furniture",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
  },
  {
    id: 9,
    title: "Mechanical Keyboard",
    price: 3499,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
  },
  {
    id: 10,
    title: "Laptop Backpack",
    price: 1599,
    category: "Fashion",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: 11,
    title: "Wireless Earbuds",
    price: 2999,
    category: "Electronics",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600",
  },
  {
    id: 12,
    title: "Gaming Chair",
    price: 8999,
    category: "Furniture",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600",
  },
  {
    id: 13,
    title: "Smartphone",
    price: 24999,
    category: "Electronics",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 14,
    title: "LED Desk Lamp",
    price: 999,
    category: "Home",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
  },
  {
    id: 15,
    title: "Denim Jacket",
    price: 2199,
    category: "Fashion",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
  },
  {
    id: 16,
    title: "Running T-Shirt",
    price: 799,
    category: "Sports",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 17,
    title: "Football",
    price: 899,
    category: "Sports",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600",
  },
  {
    id: 18,
    title: "Yoga Mat",
    price: 1299,
    category: "Sports",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
  },
  {
    id: 19,
    title: "Water Bottle",
    price: 499,
    category: "Home",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
  },
  {
    id: 20,
    title: "Study Table",
    price: 7499,
    category: "Furniture",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    id: 21,
    title: "Gaming Monitor",
    price: 15999,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600",
  },
  {
    id: 22,
    title: "Power Bank",
    price: 1999,
    category: "Electronics",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600",
  },
  {
    id: 23,
    title: "Bluetooth Mouse",
    price: 899,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600",
  },
  {
    id: 24,
    title: "Classic Watch",
    price: 3499,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
  },
  {
    id: 25,
    title: "Sunglasses",
    price: 1499,
    category: "Accessories",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
  },
  {
    id: 26,
    title: "Travel Suitcase",
    price: 4999,
    category: "Fashion",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
  },
  {
    id: 27,
    title: "Electric Kettle",
    price: 1399,
    category: "Home",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
  },
  {
    id: 28,
    title: "Air Fryer",
    price: 5499,
    category: "Home",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585515656973-94b6d2b67b58?w=600",
  },
  {
    id: 29,
    title: "Basketball",
    price: 1199,
    category: "Sports",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600",
  },
  {
    id: 30,
    title: "Novel Book Set",
    price: 999,
    category: "Books",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
  },
  {
    id: 31,
    title: "Toy Car",
    price: 699,
    category: "Toys",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=600",
  },
  {
    id: 32,
    title: "Action Camera",
    price: 12999,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Shop Smart.
              <br />
              Live Better.
            </h1>

            <p className="text-gray-200 mt-5 max-w-lg">
              Discover premium products with amazing deals and fast delivery.
            </p>

            <button className="mt-8 bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
              Explore Now
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt=""
            className="w-80 rounded-2xl shadow-2xl"
          />
        </div>

        {/* Search */}

        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-slate-800 px-5 py-3 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-slate-800 px-5 py-3 rounded-xl border border-slate-700"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Heading */}

        <div className="flex justify-between items-center mt-12 mb-6">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <span className="text-gray-400">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* Empty */}

        {filteredProducts.length === 0 ? (
          <div className="bg-slate-800 rounded-2xl p-20 text-center">
            <h2 className="text-3xl font-bold">😕 No Products Found</h2>

            <p className="text-gray-400 mt-3">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2 hover:shadow-blue-900/40 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 w-full object-cover hover:scale-105 duration-300"
                  />
                </div>

                <div className="p-4">
                  <span className="text-sm text-blue-400">
                    {product.category}
                  </span>

                  <h3 className="text-lg font-semibold mt-2 line-clamp-1">
                    {product.title}
                  </h3>

                  <div className="flex justify-between mt-3">
                    <span className="text-yellow-400">⭐ {product.rating}</span>

                    <span className="font-bold text-green-400">
                      ₹{product.price}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Link
                      to="/cart"
                      className="flex-1 text-center bg-slate-700 hover:bg-slate-600 py-2 rounded-lg transition"
                    >
                      Buy Now
                    </Link>

                    <button
                      onClick={() => {
                        (console.log(product), addToCart(product));
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 text-sm rounded-lg transition"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
