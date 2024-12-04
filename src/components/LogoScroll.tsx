import React from 'react';
import { Briefcase, Cpu, Rocket, Zap } from 'lucide-react';

const logos = [
  { name: 'Ramp', icon: Zap, className: 'w-32' },
  { name: 'Linear', icon: Cpu, className: 'w-32' },
  { name: 'Retool', icon: Briefcase, className: 'w-32' },
  { name: 'Vercel', icon: Rocket, className: 'w-32' },
];

const LogoScroll = () => {
  return (
    <div className="pb-12">
      <p className="text-gray-600 mb-6">
        Trusted by founders who move fast and ship quality.
      </p>
      <div className="overflow-hidden w-[calc(100%-6rem)]">
        <div className="flex gap-16 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 ${logo.className} flex items-center gap-2`}
            >
              <logo.icon className="w-5 h-5" />
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;