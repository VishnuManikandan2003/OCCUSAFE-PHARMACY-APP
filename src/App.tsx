import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import DoctorBooking from './pages/DoctorBooking';
import Cart from './pages/Cart';
import HealthBot from './pages/HealthBot';
import GlaucomaDetection from './pages/GlaucomaDetection';
import GlaucomaResults from './pages/GlaucomaResults';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/doctor-booking" element={<DoctorBooking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/health-bot" element={<HealthBot />} />
            <Route path="/glaucoma-detection" element={<GlaucomaDetection />} />
            <Route path="/glaucoma-results" element={<GlaucomaResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;