import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/sections/Navbar';
import { CanvasBackground } from '@/sections/CanvasBackground';

export function RootLayout() {
  return (
    <div className="relative min-h-screen text-white selection:bg-nova-pink selection:text-black overflow-x-hidden">
      {/* Canvas acts as the background layer at z-0 */}
      <CanvasBackground />

      {/* Content wrapper at z-10 ensures it sits on top of canvas */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
