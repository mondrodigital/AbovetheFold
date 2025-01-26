import React from 'react';

const Hero = () => {
  return (
    <div className="pt-32">
      <div className="max-w-2xl">
        <h1 className="text-[64px] leading-[1.1] font-bold mb-8 tracking-tight">
          We design "Above the Fold" websites that convert like crazy.
          </h1>
        <p className="text-xl text-gray-600 mb-12">
            Most websites lose 80% of visitors who scroll past the fold. We design single-view experiences that capture attention and drive action immediately.
          </p>
        <div className="flex items-center gap-24">
            <div>
            <p className="text-xl font-semibold mb-2">Projects start at $150</p>
            <p className="text-gray-600">3-day delivery. Fixed-price guarantee.</p>
            </div>
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-900 transition-colors">
              Book an Intro
            </button>

          </div>
        </div>
    </div>
  );
};

export default Hero;