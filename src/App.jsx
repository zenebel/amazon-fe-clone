import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/HomePage";



function App() {
  return (
    <div>
        <Navbar />
        <HomePage />
        <main>
        <h1>Amazon FE Clone</h1>
        <p>Welcome to the Amazon Frontend Clone!</p>
      </main>
    </div>
  );
}

export default App;
