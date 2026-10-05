import { Link } from "react-router-dom";

const Landing = () => {
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
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-sm">
            🚀 New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
            Shop Smarter,
            <br />
            Live Better.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Discover premium products at unbeatable prices. Explore the latest
            gadgets, fashion, accessories, and much more—all in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/signup"
              className="rounded-xl bg-blue-600 px-7 py-3 transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-zinc-700 px-7 py-3 transition hover:bg-zinc-900"
            >
              Learn More
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-12 flex gap-10">
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

        {/* Hero Image */}
        <div className="flex flex-1 justify-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt="Shopping"
            className="w-full max-w-md rounded-3xl shadow-2xl transition duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Featured Products</h2>

          <Link to="/categories" className="text-blue-500 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl transition duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{product.title}</h3>

                <p className="mt-2 text-lg text-blue-500">{product.price}</p>

                <Link
                  to="/categories"
                  className="mt-5 block w-full rounded-xl bg-blue-600 py-3 text-center transition hover:bg-blue-700"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose ShopHub?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <div className="mb-4 text-5xl">🚚</div>

            <h3 className="mb-3 text-2xl font-semibold">Fast Delivery</h3>

            <p className="text-gray-400">
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <div className="mb-4 text-5xl">🔒</div>

            <h3 className="mb-3 text-2xl font-semibold">Secure Payments</h3>

            <p className="text-gray-400">
              Safe and encrypted payment methods for every purchase.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <div className="mb-4 text-5xl">⭐</div>

            <h3 className="mb-3 text-2xl font-semibold">Premium Quality</h3>

            <p className="text-gray-400">
              Carefully selected products with the best quality.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-5 text-5xl font-bold">Ready to Start Shopping?</h2>

          <p className="mb-8 text-lg text-gray-200">
            Explore thousands of products with exciting offers and discounts.
          </p>

          <Link
            to="/signup"
            className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
