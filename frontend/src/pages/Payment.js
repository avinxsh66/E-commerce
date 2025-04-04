import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaid(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); // simulate successful payment
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment Gateway 💳</h2>
      {isPaid ? (
        <div className="success-message">
          ✅ Payment Successful! Redirecting to home...
        </div>
      ) : (
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label>Cardholder Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" maxLength="16" required />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="password" maxLength="3" required />
            </div>
          </div>
          <div className="form-group">
            <label>Billing Address</label>
            <input type="text" required />
          </div>
          <button type="submit" className="pay-btn">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
