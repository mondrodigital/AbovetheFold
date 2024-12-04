import React from 'react';
import { Project } from './types';

interface CardProps {
  project: Project;
  style: React.CSSProperties;
}

const Card = ({ project, style }: CardProps) => {
  const { transform, opacity, transition, zIndex, willChange } = style;
  
  return (
    <div 
      className="card-wrapper"
      style={{
        transform,
        opacity,
        transition,
        zIndex,
        willChange
      }}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-6 px-6">
          <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-lg text-white/90">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;