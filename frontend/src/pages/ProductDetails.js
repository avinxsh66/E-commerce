import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductDetails.css";
import { useCart } from "../context/CartContext"; // ✅ import the custom hook

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ use the hook instead of useContext()

  const product = products.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    addToCart({ ...product, quantity });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">₹{product.price}</p>

          <div className="quantity-control">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {addedToCart && <p className="added-message">✅ Item added to cart!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
