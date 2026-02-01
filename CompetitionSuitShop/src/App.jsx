import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Banner from "./pages/Banner";
import Items from "./pages/Items";

export default function App() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items" element={<Items />} />
          <Route path="/competition-suits" element={<div />} />
          <Route path="/style-guide" element={<div />} />
          <Route path="/design" element={<div />} />
          <Route path="/consult" element={<div />} />
          <Route path="/blog" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}