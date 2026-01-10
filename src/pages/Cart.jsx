import React from "react";

function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Shopping Cart</h1>
        <p className="text-center text-gray-600 mb-8">Review your items and complete your order</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Список товаров */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Your Items
              </h2>
              
              {[1, 2].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Product {item}</h3>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-800">${item === 1 ? '25' : '45'}</p>
                    <button className="text-red-500 hover:text-red-700 text-sm mt-1">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Форма */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Enter Your Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Поле Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    id="name" 
                    type="text" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>

                {/* Поле Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>

                {/* Поле Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="address">
                    Delivery Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    id="address"
                    placeholder="Enter your delivery address"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Поле Payment */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="payment">
                    Payment Method
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                    id="payment" 
                    required
                  >
                    <option value="" disabled>
                      Select payment method
                    </option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                </div>

                {/* Кнопка Submit */}
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg" 
                  type="submit"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>

          {/* Итоговая сумма */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$70.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$5.60</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-blue-600">$75.60</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">
                  <svg className="w-5 h-5 inline mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free shipping on orders over $50
                </p>
              </div>

              <div className="text-xs text-gray-500 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
