import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // import BrowserRouter
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/amazon-fe-clone">
      {" "}
      {/* correct usage */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
