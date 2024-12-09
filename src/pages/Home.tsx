import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldPlus, Pill, Dumbbell, Apple, Heart, Bot, Eye } from 'lucide-react';

const categories = [
  {
    id: 'medicines',
    name: 'Medicines',
    icon: Pill,
    description: 'Quality medicines for all your healthcare needs',
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Nutrition',
    icon: Apple,
    description: 'Essential supplements for daily wellness',
  },
  {
    id: 'supplements',
    name: 'Fitness Supplements',
    icon: Dumbbell,
    description: 'Premium supplements for peak performance',
  },
  {
    id: 'immunity',
    name: 'Immunity Boosters',
    icon: ShieldPlus,
    description: 'Strengthen your immune system naturally',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Your Health, Our Priority
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-green-200 sm:text-2xl md:mt-5 md:max-w-3xl">
              Quality healthcare products and services at your fingertips
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/products/medicines"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <category.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* AI Features */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            AI-Powered Healthcare
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              to="/health-bot"
              className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Bot className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Assistant</h3>
              <p className="text-gray-600">Get instant answers to your health queries</p>
            </Link>
            <Link
              to="/glaucoma-detection"
              className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Eye className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Glaucoma Detection</h3>
              <p className="text-gray-600">AI-powered eye health screening</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Expert Care</h3>
              <p className="mt-2 text-gray-500">
                Consult with qualified healthcare professionals
              </p>
            </div>
            <div className="text-center">
              <ShieldPlus className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Quality Products</h3>
              <p className="mt-2 text-gray-500">
                Genuine medicines and healthcare products
              </p>
            </div>
            <div className="text-center">
              <Pill className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-gray-500">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;