import React, { useEffect, useState, useRef } from 'react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemHeight = 400;
  const spacing = 40;
  const transitionDuration = 800;
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isMobile) {
        e.preventDefault();
        if (isTransitioning) return;
        const direction = e.deltaY > 0 ? 1 : -1;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          if (newIndex < 0) return projects.length - 1;
          if (newIndex >= projects.length) return 0;
          return newIndex;
        });
        setTimeout(() => setIsTransitioning(false), transitionDuration);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isTransitioning, isMobile]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMobile) return;
    
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
      carouselRef.current.style.userSelect = 'none';
    }
  };

  const handleDragEnd = () => {
    if (!isMobile) return;
    
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.removeProperty('user-select');
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current || !isMobile) return;
    
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const walk = (startX - clientX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const getItemStyle = (index: number) => {
    if (isMobile) return {};

    const totalItems = projects.length;
    let relativeIndex = (index - currentIndex + totalItems) % totalItems;
    if (relativeIndex > totalItems / 2) relativeIndex -= totalItems;

    const baseOffset = (itemHeight + spacing) * relativeIndex;
    const scale = Math.max(0.8, 1 - Math.abs(relativeIndex) * 0.1);
    const blurAmount = Math.abs(relativeIndex) * 2;
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
    <div 
      className={`lg:w-[45%] w-full lg:h-screen lg:fixed lg:right-0 lg:top-0 flex items-center justify-center ${
        isMobile ? 'relative mt-12 h-[50vh] mb-12' : 'overflow-hidden'
      }`}
    >
      <div 
        ref={carouselRef}
        className={`${
          isMobile 
            ? 'flex overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full cursor-grab active:cursor-grabbing' 
            : 'w-[600px] relative'
        }`}
        style={!isMobile ? { height: itemHeight } : {}}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={getItemStyle(index)}
            className={`${
              isMobile 
                ? 'flex-none w-[85vw] h-full mx-4 snap-center select-none' 
                : 'px-8'
            }`}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {!isMobile && index === currentIndex && (
                <div className="absolute inset-0 bg-black/30" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;