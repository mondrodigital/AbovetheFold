import React, { useState, useEffect } from 'react';

interface Review {
  text: string;
  author: string;
  position: string;
}

const reviews: Review[] = [
  {
    text: "Really clean. Love how the team is making everything customizable, but still structured.",
    author: "VP",
    position: "@ Voltage"
  },
  {
    text: "We are thrilled! The process of working together to get to a design style that feels fresh & authentic was super smooth!",
    author: "COO",
    position: "@ Momentum"
  },
  {
    text: "Bringing the Peko brand to life was unbelievably efficient and effective.",
    author: "Director",
    position: "@ Peko"
  },
  {
    text: "The team delivered exactly what we needed, on time and on budget.",
    author: "CEO",
    position: "@ Ditto"
  },
  {
    text: "Outstanding work that truly elevated our brand presence.",
    author: "Marketing Lead",
    position: "@ Flex"
  },
  {
    text: "Their attention to detail and creative solutions exceeded our expectations.",
    author: "Product Manager",
    position: "@ Landed"
  },
  {
    text: "The impact on our conversion rates was immediate and significant.",
    author: "Growth Lead",
    position: "@ Obscura"
  },
  {
    text: "They understood our vision perfectly and executed it flawlessly.",
    author: "Founder",
    position: "@ Structure"
  },
  {
    text: "A game-changing partnership that transformed our digital presence.",
    author: "CTO",
    position: "@ MidFunnel"
  },
  {
    text: "Innovative solutions that perfectly balanced form and function.",
    author: "Design Director",
    position: "@ Tangent"
  },
  {
    text: "The team's expertise and creativity exceeded all expectations.",
    author: "Product Owner",
    position: "@ Discovery"
  },
  {
    text: "They delivered a perfect blend of aesthetics and performance.",
    author: "Head of Digital",
    position: "@ Coast"
  }
];

const logos = [
  { name: 'Achieve', className: 'opacity-60 hover:opacity-100' },
  { name: 'Ditto', className: 'opacity-60 hover:opacity-100' },
  { name: 'Utility', className: 'opacity-60 hover:opacity-100' },
  { name: 'Samsung', className: 'opacity-60 hover:opacity-100' },
  { name: 'Nike', className: 'opacity-60 hover:opacity-100' },
  { name: 'Landed', className: 'opacity-60 hover:opacity-100' },
  { name: 'MidFunnel', className: 'opacity-60 hover:opacity-100' },
  { name: 'Obama Foundation', className: 'opacity-60 hover:opacity-100' },
  { name: 'Tangent', className: 'opacity-60 hover:opacity-100' },
  { name: 'Flex', className: 'opacity-60 hover:opacity-100' },
  { name: 'Obscura', className: 'opacity-60 hover:opacity-100' },
  { name: 'Poolside', className: 'opacity-60 hover:opacity-100' },
  { name: 'Structure', className: 'opacity-60 hover:opacity-100' },
  { name: 'XBorg', className: 'opacity-60 hover:opacity-100' },
  { name: 'Vestian', className: 'opacity-60 hover:opacity-100' },
  { name: 'Orchestra', className: 'opacity-60 hover:opacity-100' },
  { name: 'FlutterFlow', className: 'opacity-60 hover:opacity-100' },
  { name: 'Coast', className: 'opacity-60 hover:opacity-100' },
  { name: 'Discovery', className: 'opacity-60 hover:opacity-100' },
  { name: 'Hasna', className: 'opacity-60 hover:opacity-100' },
  { name: 'SC Johnson', className: 'opacity-60 hover:opacity-100' },
  { name: 'Sports Academy', className: 'opacity-60 hover:opacity-100' },
  { name: 'Superintelligent', className: 'opacity-60 hover:opacity-100' },
  { name: 'Momentum', className: 'opacity-60 hover:opacity-100' },
  { name: 'Exa', className: 'opacity-60 hover:opacity-100' },
];

interface LogoGridProps {
  onClose: () => void;
}

const LogoGrid = ({ onClose }: LogoGridProps) => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getVisibleReviews = () => {
    const reviews3 = [];
    for (let i = -1; i < 4; i++) {
      const index = ((currentReview + i) + reviews.length) % reviews.length;
      reviews3.push(reviews[index]);
    }
    return reviews3;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex close-cursor" 
      onClick={onClose}
    >
      <style>
        {`
          .close-cursor {
            cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>") 20 20, auto;
          }
          .review-fade-top {
            mask-image: linear-gradient(to top, white 20%, transparent);
          }
          .review-fade-bottom {
            mask-image: linear-gradient(to bottom, white 20%, transparent);
          }
          .reviews-container {
            transform: translateY(0%);
          }
          .reviews-container.transitioning {
            transform: translateY(-33.33%);
            transition: transform 500ms ease-in-out;
          }
        `}
      </style>

      <div className="flex w-full h-full p-12">
        <div className="w-1/3 flex flex-col">
          <div className="mb-8">
            <h1 className="text-white text-6xl font-bold mb-4">Unscroll</h1>
            <h2 className="text-white/70 text-base font-light">Trusted by the world's most innovative teams</h2>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <div 
              className={`absolute inset-0 reviews-container ${isTransitioning ? 'transitioning' : ''}`}
            >
              {getVisibleReviews().map((review, index) => (
                <div 
                  key={`${currentReview}-${index}`}
                  className={`absolute w-full h-1/3 flex items-center transition-opacity duration-500
                    ${index === 1 ? 'review-fade-top' : 
                      index === 3 ? 'review-fade-bottom' : ''}`}
                  style={{ top: `${(index - 1) * 33.33}%` }}
                >
                  <div>
                    <p className="text-white text-2xl font-light mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="text-gray-400">
                      <p className="font-medium">{review.author}</p>
                      <p className="text-sm">{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-px bg-white/10 self-stretch mx-12" />

        <div className="w-2/3 grid grid-cols-4 gap-12 content-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`text-white text-xl font-light transition-opacity duration-300 ${logo.className}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid; 