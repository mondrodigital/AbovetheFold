import React from 'react';

interface PricingGridProps {
  onClose: () => void;
}

const packages = [
  {
    type: 'Brand',
    tier: 'Core',
    details: 'Design',
    duration: '3 WKS',
    price: '$15k'
  },
  {
    type: 'Brand',
    tier: 'Comprehensive',
    details: 'Design',
    duration: '1 MO',
    price: '$25k'
  },
  {
    type: 'Website',
    tier: 'Small',
    details: 'Design + Dev',
    specs: '1-2 pages',
    duration: '1 MO',
    price: '$20k'
  },
  {
    type: 'Website',
    tier: 'Med',
    details: 'Design + Dev',
    specs: '3-5 pages',
    duration: '2 MO',
    price: '$30k'
  },
  {
    type: 'Website',
    tier: 'Large',
    details: 'Design + Dev',
    specs: '6+ pages',
    duration: '3 MO',
    price: '$40k'
  },
  {
    type: 'Product',
    details: 'Design + Dev',
    duration: 'Starts at',
    price: '$15k/mo'
  }
];

const PricingGrid: React.FC<PricingGridProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex flex-col items-center justify-center p-6" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl w-[480px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">Pricing Menu</h2>
          <p className="text-gray-600 text-sm mb-6">
            Fixed pricing for each package. Starting at $15,000
          </p>

          <div className="space-y-4">
            {packages.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-black text-white text-xs rounded-full">
                      {pkg.type}
                    </span>
                    {pkg.tier && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {pkg.tier}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">{pkg.details}</span>
                    {pkg.specs && (
                      <span className="text-gray-400">
                        ({pkg.specs})
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{pkg.price}</div>
                  <div className="text-xs text-gray-400">{pkg.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-gray-50 rounded-b-2xl text-center">
          <button 
            className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            onClick={() => window.open('https://calendly.com/your-link', '_blank')}
          >
            Book a Call
          </button>
        </div>
      </div>
      
      <button 
        onClick={onClose}
        className="mt-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center group"
        aria-label="Close pricing menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:scale-110 transition-transform"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default PricingGrid; 