// import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Navbar from "./components/Navbar.jsx";
import "./server.js";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
         <Route path="/vans/:id" element={<VanDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
}
