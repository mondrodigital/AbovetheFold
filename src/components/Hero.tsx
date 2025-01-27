import React, { useState } from 'react';
import PricingGrid from './PricingGrid';

const Hero = () => {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="pt-52">
      <div className="max-w-2xl">
        <h1 className="text-[48px] leading-[1.15] font-bold mb-8 tracking-tight">
          We design "Above the Fold" websites that convert like crazy
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Most websites lose 80% of visitors who scroll past the fold. We design single-view experiences that capture attention and drive action immediately.
        </p>
        <div className="flex items-center gap-24">
          <div>
            <p className="text-xl font-semibold mb-2">Projects start at $150</p>
            <p className="text-gray-600">3-day delivery. Fixed-price guarantee.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowPricing(true)}
              className="text-black hover:text-gray-600 px-6 py-2.5 text-base transition-colors"
            >
              View Pricing
            </button>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-base hover:bg-gray-900 transition-colors">
              Book an Intro
            </button>
          </div>
        </div>
      </div>
      {showPricing && <PricingGrid onClose={() => setShowPricing(false)} />}
    </div>
  );
};

export default Hero;