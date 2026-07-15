import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />

            <h1 className="text-3xl font-bold mt-5">Akash Dhara</h1>

            <p className="text-gray-400">MERN Stack Developer</p>
          </div>

          {/* Profile Details */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-blue-400 font-semibold mb-2">👤 Full Name</h2>
              <p>Akash Dhara</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-blue-400 font-semibold mb-2">📧 Email</h2>
              <p>akash@gmail.com</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-blue-400 font-semibold mb-2">📱 Phone</h2>
              <p>+91 9876543210</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-blue-400 font-semibold mb-2">📍 Address</h2>
              <p>Kolkata, West Bengal</p>
            </div>
          </div>

          {/* Account Info */}

          <div className="mt-10 bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-5">Account Information</h2>

            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Orders</span>
                <span>12</span>
              </div>

              <div className="flex justify-between">
                <span>Wishlist</span>
                <span>5</span>
              </div>

              <div className="flex justify-between">
                <span>Cart Items</span>
                <span>3</span>
              </div>

              <div className="flex justify-between">
                <span>Member Since</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
              Edit Profile
            </button>

            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold">
              My Orders
            </button>

            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
