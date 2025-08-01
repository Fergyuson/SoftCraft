import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Hero, Services, Portfolio, Testimonials, Contact, Footer, Catalog, Cart, Checkout } from "./components";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen bg-gray-50">
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
              </div>
            } />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;