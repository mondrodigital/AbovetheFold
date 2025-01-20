import React, { useState } from 'react';
import { Briefcase, Cpu, Rocket, Zap } from 'lucide-react';
import LogoGrid from './LogoGrid';

const logos = [
  { name: 'Discovery', icon: Briefcase, className: 'w-32 font-light text-gray-400' },
  { name: 'Coast', icon: Briefcase, className: 'w-32' },
  { name: 'FlutterFlow', icon: Cpu, className: 'w-32' },
  { name: 'Sports Academy', icon: Rocket, className: 'w-32' },
  { name: 'Poolside', icon: Zap, className: 'w-32 font-light text-gray-400' },
];

const LogoScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      <div className="relative pb-12">
        <p className="text-gray-600 mb-6">
          Our work spans ambitious pre-seed startups to global icons.
        </p>
        <div 
          className="relative overflow-hidden w-[calc(100%-6rem)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex gap-16 transition-[animation-duration] duration-700 ease-in-out"
            style={{ 
              animationDuration: isHovered ? '40s' : '20s',
              animationName: 'scroll',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              filter: isHovered ? 'blur(2px)' : 'none'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-all duration-700 ${logo.className} flex items-center gap-2`}
              >
                <logo.icon className="w-5 h-5" />
                {logo.name}
              </div>
            ))}
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button 
              onClick={() => setShowGrid(true)}
              className="bg-white text-gray-900 px-6 py-2 text-sm rounded-full border border-gray-200 shadow-sm hover:border-gray-300 transition-all duration-300 animate-bounce-in"
            >
              View all
            </button>
          </div>
        </div>
      </div>

      {/* Logo Grid Popup */}
      {showGrid && <LogoGrid onClose={() => setShowGrid(false)} />}
    </>
  );
};

export default LogoScroll;