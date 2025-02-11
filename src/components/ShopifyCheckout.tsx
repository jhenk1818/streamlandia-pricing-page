
import React from 'react';

const ShopifyCheckout = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center text-white">
        <h3 className="text-xl font-medium mb-4">Checkout Not Available</h3>
        <p className="text-white/80 mb-6">
          Direct checkout embedding is not possible due to security restrictions. To proceed with checkout:
        </p>
        <ol className="text-left space-y-2 text-white/80 mb-6 list-decimal list-inside">
          <li>Add items to your cart on the main store</li>
          <li>Proceed to checkout from your cart</li>
          <li>Complete your purchase securely on the store's website</li>
        </ol>
        <a 
          href="https://skims.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

export default ShopifyCheckout;
