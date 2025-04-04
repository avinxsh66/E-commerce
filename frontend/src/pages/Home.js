import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Ensure correct path
import "../styles/Home.css"; // Adjust the path if needed


const Home = ({ searchQuery }) => {
  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
