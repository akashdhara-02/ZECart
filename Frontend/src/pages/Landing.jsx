import { Link } from "react-router-dom";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$99",
      image: "https://picsum.photos/300?random=1",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: "$149",
      image: "https://picsum.photos/300?random=2",
    },
    {
      id: 3,
      title: "Running Shoes",
      price: "$79",
      image: "https://picsum.photos/300?random=3",
    },
    {
      id: 4,
      title: "Laptop Backpack",
      price: "$59",
      image: "https://picsum.photos/300?random=4",
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="flex-1">
          <span className="bg-blue-600 px-4 py-1 rounded-full text-sm">
            🚀 New Collection 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            Shop Smarter,
            <br />
            Live Better.
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Discover premium products at unbeatable prices. Explore the latest
            gadgets, fashion, accessories, and much more—all in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl transition"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-zinc-700 hover:bg-zinc-900 px-7 py-3 rounded-xl transition"
            >
              Learn More
            </Link>
          </div>

          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-400">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full max-w-md hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Featured Products</h2>

          <Link to="/products" className="text-blue-500 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 border border-zinc-800"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{product.title}</h3>

                <p className="text-blue-500 text-lg mt-2">{product.price}</p>

                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ShopHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-400">
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-gray-400">
              Safe and encrypted payment methods for every purchase.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-400">
              Carefully selected products with the best quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-5">Ready to Start Shopping?</h2>

          <p className="text-lg text-gray-200 mb-8">
            Explore thousands of products with exciting offers and discounts.
          </p>

          <Link
            to="/products"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
