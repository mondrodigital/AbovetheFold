import { useState, useEffect, useCallback } from 'react';
import { Project } from './types';
import { getCardStyles } from './styles';

interface CarouselStyles {
  [key: number]: React.CSSProperties;
}

export const useCarousel = (projects: Project[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = useCallback((direction: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return projects.length - 1;
      if (newIndex >= projects.length) return 0;
      return newIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, projects.length]);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      handleScroll(direction);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleScroll]);

  const getItemStyles = (): CarouselStyles => {
    const styles: CarouselStyles = {};
    const totalItems = projects.length;
    
    projects.forEach((_, index) => {
      let relativeIndex = (index - currentIndex + totalItems) % totalItems;
      
      if (relativeIndex > Math.floor(totalItems / 2)) {
        relativeIndex -= totalItems;
      }
      
      styles[index] = getCardStyles(relativeIndex, totalItems);
    });

    return styles;
  };

  return { getItemStyles };
};