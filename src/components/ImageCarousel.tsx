import React, { useEffect, useState } from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    title: 'Utility',
    category: 'Brand, Web'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    title: 'Flex',
    category: 'Brand Sprint'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    title: 'Coast',
    category: 'Digital Product'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
    title: 'Tangent',
    category: 'Digital Product'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80',
    title: 'Discovery',
    category: 'Brand Identity'
  }
];

const extendedProjects = [...projects, ...projects];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemHeight = 400;
  const spacing = 40;
  const transitionDuration = 800;

  useEffect(() => {
    let lastScrollTime = Date.now();
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (isTransitioning || now - lastScrollTime < transitionDuration) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      lastScrollTime = now;
      
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        if (newIndex < 0) return extendedProjects.length - 1;
        if (newIndex >= extendedProjects.length) return 0;
        return newIndex;
      });
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isTransitioning]);

  const getItemStyle = (index: number) => {
    const totalItems = extendedProjects.length;
    let relativeIndex = (index - currentIndex + totalItems) % totalItems;
    
    if (relativeIndex > totalItems / 2) {
      relativeIndex -= totalItems;
    }

    const baseOffset = (itemHeight + spacing) * relativeIndex;
    const scale = Math.max(0.8, 1 - Math.abs(relativeIndex) * 0.1);
    
    // Calculate blur amount based on distance from center
    const blurAmount = Math.abs(relativeIndex) * 2;
    // Calculate opacity based on distance from center
    const opacity = Math.max(0.3, 1 - Math.abs(relativeIndex) * 0.3);
    
    return {
      transform: `translateY(${baseOffset}px) scale(${scale})`,
      transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      position: 'absolute' as const,
      width: '100%',
      height: `${itemHeight}px`,
      zIndex: 10 - Math.abs(relativeIndex),
      filter: relativeIndex !== 0 ? `blur(${blurAmount}px)` : 'none',
      opacity,
    };
  };

  return (
    <div className="w-[45%] h-screen fixed right-0 top-0 flex items-center justify-center overflow-hidden">
      <div 
        className="w-[600px] relative"
        style={{ height: itemHeight }}
      >
        {extendedProjects.map((project, index) => {
          const totalItems = extendedProjects.length;
          const relativeIndex = (index - currentIndex + totalItems) % totalItems;
          const isCenter = relativeIndex === 0;
          
          return (
            <div
              key={index}
              style={getItemStyle(index)}
              className="px-8"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/30" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;