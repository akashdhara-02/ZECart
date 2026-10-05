import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());

// ================= MONGODB =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// =================================================
//                    USER
// ================================================= 

// User Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// User Model

const User = mongoose.model("User", userSchema);

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "Signup Successful",
      user,
    });
  } catch (error) {
    console.log("Signup Error:", error);

    res.status(500).json({
      message: "Signup Failed",
      error: error.message,
    });
  }
});



// ================= LOGIN =================

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }


    //JWT token genrtaion...
    const token = jwt.sign({ userId: user._id }, "mySecrectKey", {
      expiresIn: "1h",
    });


    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.log("Login Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});







// ================= JWT MIDDLEWARE =================

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "mySecrectKey");

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

app.get("/me",verifyToken,async(req,res)=>{
  try{
    const user=await User.findById(req.userId).select("-password");
    if(!user){
      return res.status(404).json({
        message:"User not found",
      });
    }
      res.status(200).json({
      user,
      });
  }catch(err){
    res.status(500).json({
      message:error.message,
    });
  }
});














// =================================================
//                    CART
// =================================================

const cartSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  category: String,
  rating: Number,
  image: String,
});

const Cart = mongoose.model("Cart", cartSchema);

// ================= ADD TO CART =================

app.post("/cart", async (req, res) => {
  try {
    const product = await Cart.create(req.body);

    res.status(201).json({
      message: "Product added to cart",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= GET CART =================

app.get("/cart", async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= DELETE CART =================

app.delete("/cart/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =================================================
//                    ORDERS
// =================================================

const orderSchema = new mongoose.Schema({
  items: Array,

  shippingAddress: {
    type: String,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

// ================= CREATE ORDER =================

app.post("/orders", async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    const cart = await Cart.find();

    if (cart.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const order = await Order.create({
      items: cart,
      shippingAddress,
      totalPrice,
    });

    // Empty cart after order
    await Cart.deleteMany();

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= GET ORDERS =================

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =================================================
//                    TEST
// =================================================

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
