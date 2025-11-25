import React from 'react';
import styles from './Gallery.module.css';
import { Button } from '@/ui/Button';
import { useNavigate } from 'react-router-dom';

export const Gallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="gallery"
      className="py-24 max-w-7xl mx-auto relative border-t border-white/20 overflow-hidden bg-transparent"
    >
      <div className="px-4 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-nova-pink">{'///'}</span> VISUAL ARCHIVE
        </h2>
        <p className="font-mono text-gray-400">Rendered by community. Powered by Nova Core.</p>
      </div>

      <img
        src="collage.jpg"
        alt="Gallery"
        className={`w-[80%] h-auto mx-auto ${styles['fade-bottom']}`}
      />

      <div className="flex flex-col items-center mt-12">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-400">
          Scroll
        </span>
        <div className="mt-4 w-px h-24 bg-linear-to-b from-nova-pink/60 to-transparent" />
        <Button className="font-bold mt-8" onClick={() => navigate('/explore')}>
          Explore More
        </Button>
      </div>
    </section>
  );
};
