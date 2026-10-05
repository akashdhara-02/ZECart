import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 



  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log("JWT verification failed:", error);
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);







  // LOGIN
  const login = async (email, password) => {
    const response = await axios.post("https://zecart-1.onrender.com/login", {
      email,
      password,
    });

    setUser(response.data.user);
    localStorage.setItem("token", response.data.token);
    return response.data;
  };


  

  // REGISTER
  const register = async (name, email, password) => {
    try {
      const response = await axios.post(
        "https://zecart-1.onrender.com/signup",
        {
          name,
          email,
          password,
        },
      );

      setUser(response.data.user);

      return response.data;
    } catch (error) {
      console.log("Registration Error:", error);
      throw error;
    }
  };





  
  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
