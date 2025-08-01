import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Hero, Services, Portfolio, Testimonials, Contact, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <Hero />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;