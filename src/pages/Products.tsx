import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import { ShoppingCart, Check } from 'lucide-react';
import { productsData } from '../data/products';

const Products = () => {
  const { category } = useParams();
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const products = productsData[category as keyof typeof productsData] || [];

  const isInCart = (productId: string) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    isInCart(product.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
