
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash, ArrowLeft, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
  // This is a simplified cart implementation that would be expanded with state management
  const cartIsEmpty = true;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Link to="/" className="inline-flex items-center text-amedico-text hover:text-amedico-teal mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Continue Shopping
          </Link>
          
          <div className="flex items-center mb-8">
            <ShoppingCart size={28} className="text-amedico-teal mr-3" />
            <h1 className="text-3xl font-bold text-amedico-text">Your Cart</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {cartIsEmpty ? (
              <div className="py-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <ShoppingCart size={32} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Add some tests to your cart and they will appear here</p>
                <Link 
                  to="/tests/blood"
                  className="inline-block px-6 py-3 bg-amedico-teal text-white rounded-md font-medium hover:bg-amedico-dark-teal transition-colors"
                >
                  Browse Tests
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {/* Cart items would go here */}
                <div className="p-6 flex justify-between items-center">
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-amedico-text">Complete Blood Count (CBC)</h3>
                    <p className="text-gray-500 text-sm">Report delivery: Same day</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-semibold">₹799</span>
                    <button className="text-red-500 hover:text-red-600 transition-colors">
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹799</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Tax</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹799</span>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-amedico-teal text-white rounded-md font-medium hover:bg-amedico-dark-teal transition-colors flex items-center justify-center gap-2">
                    <CreditCard size={18} />
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
