import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are an innovative E-Commerce platform offering the best deals
            and seamless shopping experience. Trusted by thousands of happy customers.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +91 9360259426</p>
          <p>Location: Chennai, Tamil Nadu</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
      </div>

      <hr />
      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
