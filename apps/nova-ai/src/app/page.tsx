import React from 'react';
import { Hero } from '@/sections/Hero';
import { Gallery } from '@/sections/Gallery';
import { Features } from '@/sections/Features';
import { AdvancedFeatures } from '@/sections/AdvancedFeatures';
import { About } from '@/sections/About';
import { Pricing } from '@/sections/Pricing';
import { Footer } from '@/sections/Footer';
import { useFragmentScroll } from '@/ui/utils';

export async function homeLoader() {
  return {
    tagline: 'Hash-based data router keeps deep links working anywhere.',
    refreshedAt: new Date().toISOString(),
  };
}

export function HomePage() {
  useFragmentScroll();
  return <Content />;
}

const Content = React.memo(function Content() {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <Features />
        <AdvancedFeatures />
        <Gallery />
        <About />
        <Pricing />
      </main>

      <Footer />
    </>
  );
});
