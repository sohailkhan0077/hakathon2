import React from 'react';

const InfoFeatures = () => {
  return (
    <div className="w-full h-[300px] bg-pink-50 rounded-lg flex items-center justify-around px-16 my-24">
      <div className="flex flex-col items-start text-start space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">Free Delivery</h3>
        <p className="text-sm text-gray-500">For all orders over $50, consectetur <br/> adipisim scing elit.</p>
      </div>

      <div className="flex flex-col items-start text-start space-y-2">
        <h3 className="text-2xl font-semibold text-graystart800">90 Days Return</h3>
        <p className="text-sm text-gray-500">If goods have problems, consectetur <br/> adipisim scing elit.</p>
      </div>

      <div className="flex flex-col items-start text-start space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">Secure Payment</h3>
        <p className="text-sm text-gray-500">100% secure payment, consectetur <br/> adipisim scing elit.</p>
      </div>
    </div>
  );
};

export default InfoFeatures;