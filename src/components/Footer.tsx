import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About OccuSafe</h3>
            <p className="text-gray-400">
              Your trusted online pharmacy for quality healthcare products and professional medical services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/medicines" className="text-gray-400 hover:text-white">
                  Medicines
                </Link>
              </li>
              <li>
                <Link to="/products/vitamins" className="text-gray-400 hover:text-white">
                  Vitamins
                </Link>
              </li>
              <li>
                <Link to="/doctor-booking" className="text-gray-400 hover:text-white">
                  Doctor Booking
                </Link>
              </li>
              <li>
                <Link to="/health-bot" className="text-gray-400 hover:text-white">
                  Health Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>1-800-OCCUSAFE</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@occusafe.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Health Street, Medical City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} OccuSafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;