import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Stethoscope, Bot, Eye } from 'lucide-react';
import { useStore } from '../store';

const Navbar = () => {
  const cartItems = useStore((state) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8" />
            <span className="text-xl font-bold">OccuSafe</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/products/medicines" className="hover:text-green-200">Medicines</Link>
            <Link to="/products/vitamins" className="hover:text-green-200">Vitamins</Link>
            <Link to="/products/supplements" className="hover:text-green-200">Supplements</Link>
            <Link to="/doctor-booking" className="hover:text-green-200">Doctor Booking</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/health-bot" className="hover:text-green-200">
              <Bot className="h-6 w-6" />
            </Link>
            <Link to="/glaucoma-detection" className="hover:text-green-200">
              <Eye className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="hover:text-green-200 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <User className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;