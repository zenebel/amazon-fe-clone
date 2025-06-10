import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with publishable key from environment variable
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Determine API URL based on environment
const getApiUrl = () => {
  const isDevelopment = window.location.hostname === "localhost";
  return isDevelopment
    ? import.meta.env.VITE_API_URL || "http://localhost:4000"
    : import.meta.env.VITE_PRODUCTION_API_URL ||
        "https://lydiazenebe.com/amazon-be-clone";
};

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Access cart context
  const navigate = useNavigate(); // Router navigation hook
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Calculate total cost
  const total = cartItems
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);

  // Handle Stripe checkout process
  const handleCheckout = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to load - check your publishable key");
      }

      const apiUrl = getApiUrl();
      const currentDomain = window.location.origin;

      const requestBody = {
        items: cartItems,
        success_url: `${currentDomain}/amazon-fe-clone/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${currentDomain}/amazon-fe-clone/cart`,
      };

      const response = await fetch(`${apiUrl}/api/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorData}`);
      }

      const session = await response.json();
      if (!session.id) {
        throw new Error("No session ID received from server");
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      let errorMessage = "Something went wrong with checkout.";

      if (error.message.includes("Failed to fetch")) {
        errorMessage = "Cannot connect to server. Check if backend is running.";
      } else if (error.message.includes("Stripe failed to load")) {
        errorMessage =
          "Stripe configuration error. Check your publishable key.";
      } else if (error.message.includes("Server error: 404")) {
        errorMessage = "API endpoint not found. Check your backend deployment.";
      } else if (error.message.includes("Server error: 500")) {
        errorMessage = "Server error. Check backend logs.";
      } else if (error.message.includes("CORS")) {
        errorMessage = "CORS error. Check backend CORS configuration.";
      }

      alert(
        `Error: ${errorMessage}\n\nDetails: ${error.message}\n\nCheck browser console for more info.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#007185",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>{item.name || item.title}</strong>
                    <div style={{ color: "#666", fontSize: "0.9em" }}>
                      Price: ${item.price}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: "#d13212",
                      color: "#fff",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9em",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div
            style={{
              borderTop: "2px solid #ddd",
              paddingTop: "1rem",
              marginTop: "1rem",
            }}
          >
            <h3>Total: ${total}</h3>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? "#ccc" : "#ff9900",
                color: "#fff",
                padding: "12px 24px",
                border: "none",
                borderRadius: "4px",
                cursor: isLoading ? "not-allowed" : "pointer",
                fontWeight: "bold",
                marginTop: "1rem",
                fontSize: "1.1em",
                minWidth: "200px",
              }}
            >
              {isLoading ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
