import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";

const Header = ({ user, setUser, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (typeof onSearch === "function") {
      onSearch(e.target.value);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <Link to="/home">🛒 E-Shop</Link>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <nav className="nav-links">
        <Link to="/cart" className="nav-btn">🛍️ Cart</Link>
        {user ? (
          <button onClick={handleLogout} className="nav-btn logout">🚪 Logout</button>
        ) : (
          <Link to="/login" className="nav-btn">🔐 Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
