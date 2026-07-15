import React from "react";

const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Fashion", icon: "👕" },
  { name: "Home", icon: "🏠" },
  { name: "Furniture", icon: "🪑" },
  { name: "Sports", icon: "⚽" },
  { name: "Beauty", icon: "💄" },
  { name: "Books", icon: "📚" },
  { name: "Gaming", icon: "🎮" },
  { name: "Kitchen", icon: "🍳" },
  { name: "Accessories", icon: "⌚" },
  { name: "Toys", icon: "🧸" },
  { name: "Groceries", icon: "🛒" },
];

const Category = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Shop by Categories</h1>

        <p className="text-center text-gray-400 mt-3 mb-10">
          Find your favourite products by category.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="text-6xl text-center">{category.icon}</div>

              <h2 className="text-xl font-semibold text-center mt-5">
                {category.name}
              </h2>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
