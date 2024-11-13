// Used in @src/app/layout.tsx
'use client';

import React, { useRef } from 'react';
import './workbar.css';

//Dynamische Abfrage eines Javascripts in einem separaten Prozess, welcher jeweils bei der Seiteninitialisierung durchgeführt werden kann
const categories = [
  { name: 'Tolle Pools', icon: '🏊‍♂️' },
  { name: 'Historisches', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  { name: 'Beispiel', icon: '🏰' },
  // ... weitere Kategorien
];

const Workbar: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-wrapper">
      <button onClick={scrollLeft}>&lt;</button>
      <div className="scroll-container" ref={scrollContainer}>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <span className="icon">{category.icon}</span>
            <span className="name">{category.name}</span>
          </div>
        ))}
      </div>
      <button onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default Workbar;
