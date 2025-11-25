import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { CanvasBackground } from './sections/CanvasBackground';
import { Gallery } from './sections/Gallery';
import { Features } from './sections/Features';
import { AdvancedFeatures } from './sections/AdvancedFeatures';
import { About } from './sections/About';
import { Pricing } from './sections/Pricing';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-nova-pink selection:text-black overflow-x-hidden">
      {/* Canvas acts as the background layer at z-0 */}
      <CanvasBackground />

      {/* Content wrapper at z-10 ensures it sits on top of canvas */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex flex-col">
          <Hero />
          <Features />
          <AdvancedFeatures />
          <Gallery />
          <About />
          <Pricing />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
