import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Success";
import Cancel from "./Cancel";

function Home() {
  const handleCheckout = async () => {
    const response = await fetch("http://localhost:8080/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <div>
      <h1>Stripe Checkout</h1>
      <p>Demo Product - $49.99</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
