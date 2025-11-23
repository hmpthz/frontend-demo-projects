import React, { useEffect, useRef, useState } from 'react';

export const ParallaxGallery: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      // Only update if relatively close to view to save resources
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(scrollY * 0.15);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imagesColumn1 = [
    'https://picsum.photos/seed/art1/400/600',
    'https://picsum.photos/seed/art2/400/500',
    'https://picsum.photos/seed/art3/400/700',
  ];

  const imagesColumn2 = [
    'https://picsum.photos/seed/art4/400/550',
    'https://picsum.photos/seed/art5/400/650',
    'https://picsum.photos/seed/art6/400/500',
  ];

  const imagesColumn3 = [
    'https://picsum.photos/seed/art7/400/600',
    'https://picsum.photos/seed/art8/400/500',
    'https://picsum.photos/seed/art9/400/600',
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 relative border-t border-white/10 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-nova-pink">///</span> VISUAL ARCHIVE
        </h2>
        <p className="font-mono text-gray-400">Rendered by community. Powered by Nova Core.</p>
      </div>

      <div className="flex gap-4 md:gap-8 justify-center max-w-[1920px] mx-auto px-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
        {/* Column 1 - Slow */}
        <div
          className="flex flex-col gap-8 w-1/3"
          style={{ transform: `translateY(${offset * -0.5}px)` }}
        >
          {imagesColumn1.map((src, i) => (
            <div
              key={i}
              className="relative group border border-nova-border bg-nova-panel/80 backdrop-blur-sm p-2"
            >
              <img
                src={src}
                alt="Art"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                ID_882{i}
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 - Fast */}
        <div
          className="flex flex-col gap-8 w-1/3 pt-20"
          style={{ transform: `translateY(${offset * -1.2}px)` }}
        >
          {imagesColumn2.map((src, i) => (
            <div
              key={i}
              className="relative group border border-nova-border bg-nova-panel/80 backdrop-blur-sm p-2"
            >
              <img
                src={src}
                alt="Art"
                className="w-full h-auto object-cover filter sepia group-hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                ID_991{i}
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 - Medium */}
        <div
          className="flex flex-col gap-8 w-1/3"
          style={{ transform: `translateY(${offset * -0.8}px)` }}
        >
          {imagesColumn3.map((src, i) => (
            <div
              key={i}
              className="relative group border border-nova-border bg-nova-panel/80 backdrop-blur-sm p-2"
            >
              <img
                src={src}
                alt="Art"
                className="w-full h-auto object-cover filter grayscale hover:filter-none transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                ID_112{i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
