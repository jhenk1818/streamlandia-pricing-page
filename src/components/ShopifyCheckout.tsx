
import React from 'react';

const ShopifyCheckout = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <iframe 
        src="https://checkout.skims.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpLU05ZTkZGSDNUOFZWVlk1ME05QzNSOQ/information"
        title="Shopify Checkout"
        className="w-full h-[600px] border-0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ShopifyCheckout;

