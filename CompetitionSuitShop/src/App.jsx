import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route element={<Layout />}>
<Route path="/" element={<Home />} />
<Route path="cart" element={<Cart />} />
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