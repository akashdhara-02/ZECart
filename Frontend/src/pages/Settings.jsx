import { useState } from "react";


const Settings = () => {
  const [formData, setFormData] = useState({ currentPassword: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const { data } = await api.put("/profile/password", formData);
      setMessage(data.message);
      setFormData({ currentPassword: "", newPassword: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 h-162 w-full">
      <h1 className="text-2xl font-bold mb-6 text-white">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-4">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {message && <p className="text-green-600 text-sm">{message}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-md hover:opacity-90"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
