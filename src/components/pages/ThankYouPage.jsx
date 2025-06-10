// src/pages/ThankYou.jsx - Create this file

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching order details
    // In a real app, you'd verify the session with the backend
    if (sessionId) {
      console.log("Payment completed for session:", sessionId);

      // Create mock order details
      const mockOrderDetails = {
        orderId: "ORD-" + sessionId.slice(-8).toUpperCase(),
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
        status: "confirmed",
        estimatedDelivery: new Date(
          Date.now() + 5 * 24 * 60 * 60 * 1000
        ).toISOString(),
      };

      setOrderDetails(mockOrderDetails);
    }
    setLoading(false);
  }, [sessionId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Success Header */}
      <div
        style={{
          backgroundColor: "#d4edda",
          border: "1px solid #c3e6cb",
          borderRadius: "8px",
          padding: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}></div>
        <h1
          style={{
            margin: "0 0 1rem 0",
            color: "#155724",
            fontSize: "2rem",
          }}
        >
          Order Placed Successfully!
        </h1>
        <p
          style={{
            margin: 0,
            color: "#155724",
            fontSize: "1.2em",
            fontWeight: "500",
          }}
        >
          Thank you for shopping with us!
        </p>
      </div>

      {/* Order Details Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            color: "#232f3e",
            marginBottom: "1.5rem",
            borderBottom: "2px solid #ff9900",
            paddingBottom: "0.5rem",
          }}
        >
          Order Confirmation
        </h2>

        {orderDetails && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <strong style={{ color: "#232f3e" }}>Order Number:</strong>
              <br />
              <span
                style={{
                  fontFamily: "monospace",
                  color: "#007185",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                }}
              >
                {orderDetails.orderId}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <strong style={{ color: "#232f3e" }}>Payment ID:</strong>
              <br />
              <span
                style={{
                  fontFamily: "monospace",
                  color: "#666",
                  fontSize: "0.9em",
                }}
              >
                {sessionId}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <strong style={{ color: "#232f3e" }}>Order Date:</strong>
              <br />
              <span style={{ color: "#666" }}>
                {formatDate(orderDetails.timestamp)}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <strong style={{ color: "#232f3e" }}>Status:</strong>
              <br />
              <span
                style={{
                  color: "#007600",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {orderDetails.status}
              </span>
            </div>
          </div>
        )}

        {/* What's Next Section */}
        <div
          style={{
            backgroundColor: "#e3f2fd",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#1565c0" }}>What happens next?</h3>
          <ul style={{ color: "#1565c0", lineHeight: "1.6" }}>
            <li>You'll receive an email confirmation shortly</li>
            <li>Your order will be processed within 1-2 business days</li>
            <li>You'll get tracking information once shipped</li>
            {orderDetails && (
              <li>
                Estimated delivery:{" "}
                <strong>{formatDate(orderDetails.estimatedDelivery)}</strong>
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#ff9900",
              color: "#000",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1em",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9900")}
          >
            Continue Shopping
          </button>

          <button
            onClick={() => {
              // In a real app, this would go to order history
              alert("Order tracking feature coming soon!");
            }}
            style={{
              backgroundColor: "#007185",
              color: "#fff",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1em",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#005a6b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007185")}
          >
            Track Order
          </button>

          <button
            onClick={() => {
              const orderInfo = `Order: ${
                orderDetails?.orderId
              }\nSession: ${sessionId}\nDate: ${
                orderDetails ? formatDate(orderDetails.timestamp) : "N/A"
              }`;
              navigator.clipboard.writeText(orderInfo).then(() => {
                alert("Order details copied to clipboard!");
              });
            }}
            style={{
              backgroundColor: "#6c757d",
              color: "#fff",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1em",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#545b62")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6c757d")}
          >
            📋 Copy Details
          </button>
        </div>

        {/* Debug Info (remove in production) */}
        {sessionId && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
              border: "1px solid #e9ecef",
              fontSize: "0.9em",
              color: "#666",
            }}
          >
            <strong>Debug Info:</strong>
            <br />
            Session ID: {sessionId}
            <br />
            URL: {window.location.href}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankYou;
