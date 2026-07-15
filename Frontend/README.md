# 🛒 ShopEase — Simple MERN E-Commerce Store

A minimal, beginner-friendly full-stack e-commerce application built with the
**MERN** stack (MongoDB, Express.js, React.js, Node.js), styled with **Tailwind CSS**.

This project is intentionally kept small and easy to read — perfect for a portfolio
or internship submission — while still covering all the core full-stack concepts:
JWT authentication, protected routes, CRUD APIs, and frontend/backend integration.

---

## 📁 Project Structure

```
mern-ecommerce/
├── backend/          # Express + MongoDB API
│   ├── config/        # DB connection
│   ├── controllers/    # Route logic
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/          # Express routers
│   ├── seed.js          # Sample data script
│   └── server.js         # App entry point
│
└── frontend/         # React + Vite + Tailwind
    └── src/
        ├── api/         # Axios instance
        ├── components/   # Navbar, Footer, ProductCard, ProtectedRoute
        ├── context/       # Auth & Cart context (global state)
        ├── pages/          # All 11 pages
        ├── App.jsx
        └── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (local install, or a free MongoDB Atlas cluster)

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env     # then edit .env with your MongoDB URI & JWT secret
npm run seed              # (optional) populate sample categories & products
npm run dev                # starts server on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env      # points to your backend API URL
npm run dev                # starts app on http://localhost:5173
```

### 4. Open the app
Visit **http://localhost:5173** in your browser. Sign up for a new account, browse
products, add items to your cart, and place an order!

---

## 🔑 How Authentication Works

1. On register/login, the backend hashes the password with **bcrypt** and returns a
   **JWT** signed with your `JWT_SECRET`.
2. The frontend stores the token in `localStorage` and attaches it to every API
   request via an Axios interceptor (`Authorization: Bearer <token>`).
3. Protected backend routes (cart, orders, profile) use an `auth` middleware that
   verifies the token before allowing access.
4. Protected frontend routes (Cart, Profile, My Orders, Settings) redirect to
   `/login` if no user is logged in.

---

## 🧩 MongoDB Collections

| Collection  | Purpose                                              |
|-------------|-------------------------------------------------------|
| `users`     | Name, email, hashed password, address, phone, cart    |
| `products`  | Name, description, price, image, category, stock       |
| `categories`| Simple list of product categories                        |
| `orders`    | Snapshot of ordered items, total, address, status         |

Note: the cart is stored as an **embedded array inside each user document**
rather than as its own collection — this keeps the data model simple while still
fully supporting add/remove/view cart functionality.

---

## 📌 Notes

- There's no payment gateway — placing an order simply saves it to MongoDB.
- There's no separate admin panel — product/category creation endpoints exist
  but aren't gated behind an admin role, per the project's "hardcoded admin" scope.
- No email verification, OTP, or wishlist/reviews — kept out intentionally to
  keep the project small and focused on core full-stack fundamentals.
