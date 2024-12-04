import React from 'react';
import Card from './Card';
import { useCarousel } from './useCarousel';
import { projects } from './data';

const ImageCarousel = () => {
  const { getItemStyles } = useCarousel(projects);
  const styles = getItemStyles();

  return (
    <div className="fixed right-0 top-0 w-[45%] h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="perspective-3000">
          {projects.map((project, index) => (
            <Card
              key={index}
              project={project}
              style={styles[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;