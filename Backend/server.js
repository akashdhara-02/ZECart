import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotend from "dotenv";

dotend.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//MongoDB Connection..
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Main Code...











// ==============USER================

//Creating user Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Add model in User
const User = mongoose.model("User", userSchema);

// /Signup Router make..
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "user Created !",
      user,
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not Found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
res.status(200).json({
  message: "login SuccessFully!",
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});
    
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

















// // ==============PRODUCT================


// const productSchema =new mongoose.schema( {
//   name: {
//     type: String,
//     requird: true,
//   },
//   price: {
//     type: String,
//     requird: true,
//   },
//   description: {
//     type: String,
//     requird: true,
//   },
//   catagory: {
//     type: String,
//     requird: true,
//   },
//   image: {
//     type: String,
//     requird: true,
//   },
//   stock:{
//      type: String,
//      default:0,
//   },

// });

// const Product=mongoose.model("product",productSchema);


// app.post("/api/auth/product",async (req,res)=>{
//   try{
//       const {name,price,description,catagoey,image,stock}= req.body;
//       const product= await product.create({
//         name,
//         price,
//         description,
//         catagory,
//         image,
//         stock,
//       });
//   res.status(201).json({
//     message:"product created!",
//     product,
//   })
//   }catch(err){
//     res.status(500).json({
//       message:err.message,
//     })
//   }
// });

// app.get("/api/auth/product",(req,res)=>{
//   res.send("Product Created!..");
// });

































// // ==============AddToCart==============
const cartSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
  },
  image: {
    type: String,
    required:true,
  },
});

const Cart=mongoose.model("cart",cartSchema);


app.post("/api/cart", async(req,res)=>{
  try{
    const {
      id,
      title,
      price,
      category,
      rating,
      image,

    }=req.body;

    const cart = await Cart.create({
      id,
      title,
      price,
      category,
      rating,
      image,
    });


    res.status(201).json({
        message:"product add to cart!",
      cart,
    });

  }catch(err){
    res.status(500).json({
      message:err.message,
    });
  }
});









app.get("/api/cart", async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

































app.delete("/api/cart/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Cart.findByIdAndDelete(id);

    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});





















































// // ==============buy ==============

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      title: String,
      price: Number,
      category: String,
      rating: Number,
      image: String,
    },
  ],

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





app.post("/api/orders", async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    const cart = await Cart.find();

    if (cart.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const order = await Order.create({
      items: cart,
      shippingAddress,
      totalPrice,
    });

    await Cart.deleteMany();

    res.status(201).json({
      message: "Order placed successfully!",
      order,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});





app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});





















































































app.get("/", (req, res) => {
  res.send("Backend is running SuccessFully!.. ");
});

app.get("/home", (req, res) => {
  res.send("Welcome sir !..");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server runnong on ${PORT}`);
});
