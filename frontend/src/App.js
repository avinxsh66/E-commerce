import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment"; // ✅ Import Payment page
import Header from "./components/Header";
import Footer from "./components/Footer";
import products from "./data/products";

// ✅ Import CartProvider
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <CartProvider>
      <Header user={user} setUser={setUser} onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home products={products} searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetail user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" />} /> {/* ✅ Payment route */}
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
