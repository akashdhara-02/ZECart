const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 h-162 w-full bg-[#0f172a] text-white">
      <h1 className="text-2xl font-bold mb-4">About ShopEase</h1>
      <p className="text-gray-400 leading-relaxed mb-4">
        ShopEase is a simple full-stack e-commerce demo built with the MERN
        stack (MongoDB, Express.js, React.js, and Node.js). It was built as a
        beginner-friendly portfolio project to demonstrate core full-stack
        skills: authentication with JWT, protected routes, CRUD operations, and
        API integration between the frontend and backend.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Features include browsing products, filtering by category, searching,
        managing a cart, placing orders, and updating a user profile — all
        without a payment gateway or admin panel, keeping the project small and
        easy to understand.
      </p>
    </div>
  );
};

export default About;
