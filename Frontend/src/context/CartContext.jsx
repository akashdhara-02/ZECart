import { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch the logged-in user's cart from the backend
  const fetchCart = useCallback(async () => {
    try {
      const { data } = await api.get("/cart");
      setCart(data);
    } catch (error) {
      setCart([]); // e.g. not logged in yet
    }
  }, []);

  const addToCart = async (product) => {
    const { data } = await api.post("/cart", {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      rating: product.rating,
      image: product.image,
    });
    setCart(data.cart);
    alert("Product Add!.");
  };

  const removeFromCart = async (productId) => {
    const { data } = await api.delete(`/cart/${productId}`);
    setCart(data);
  };

  const clearCartState = () => setCart([]); // used after placing an order or logging out

  return (
    <CartContext.Provider
      value={{ cart, fetchCart, addToCart, removeFromCart, clearCartState }}
    >
      {children}
    </CartContext.Provider>
  );
};
