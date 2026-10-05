import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Botbar from "./components/Botbar";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
// import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Topbar />

      <Routes>
        {/* ========== PUBLIC ROUTES ========== */}

        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        

        {/* ========== PRIVATE ROUTES ========== */}

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        /> */}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <Botbar />
    </div>
  );
};

export default App;