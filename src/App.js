import React from "react";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import Home from "./components/Home";
import Auction from "./components/Auction";
import Sell from './components/Sell'
import Buy from './components/Buy'
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/auction" element={<Auction />}>Auction</Route>
          <Route path="/about" element={<About />}>About</Route>
          <Route path="/buy" element={<Buy/>}>Buy</Route>
          <Route path="/sell" element={<Sell/>}>Sell</Route>
          <Route path="/contact" element={<Contact/>}>Contact</Route>
        </Routes>
        <Footer />  
      </div>
    );
}

export default App;
