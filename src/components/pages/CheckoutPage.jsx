import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if token doesn't exist
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Checkout Page</h1>
      <p>This is a protected route. You're logged in!</p>
    </div>
  );
};

export default CheckoutPage;
