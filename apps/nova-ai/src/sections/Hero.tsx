import React from 'react';
import { Button } from '@/ui/Button';
import { ChevronRight, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-nova-pink/30 bg-nova-pink/5 text-nova-pink font-mono text-xs tracking-widest uppercase">
              <span className="w-2 h-2 bg-nova-pink animate-pulse"></span>
              System Online v2.0.4
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-sans leading-tight">
              GENERATE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                ITERATE.
              </span>{' '}
              <br />
              <span className="text-nova-pink drop-shadow-[0_0_10px_rgba(255,0,85,0.5)] inline-block animate-glitch">
                DOMINATE.
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg font-light border-l-2 border-nova-pink/50 pl-6">
              Unleash neural creativity. The advanced AI art synthesis engine for professionals who
              refuse to compromise on control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group flex items-center gap-2">
                Initialize Core
                <ChevronRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 flex gap-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-mono font-bold text-white">2.4s</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Gen Time</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-white">8k</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Res Supported</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-white">API</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Access</div>
              </div>
            </div>
          </div>

          {/* Graphic / Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square border border-nova-border bg-nova-panel p-2">
              {/* Fake Terminal UI */}
              <div className="absolute top-0 left-0 w-full h-8 bg-nova-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-none"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-none"></div>
                <div className="w-3 h-3 bg-green-500 rounded-none"></div>
                <span className="ml-4 font-mono text-xs text-gray-400">
                  bash — nova-cli — 80x24
                </span>
              </div>

              <div className="mt-8 p-4 font-mono text-sm text-green-400 space-y-2 h-full overflow-hidden">
                <p>&gt; initializing nova_core...</p>
                <p>&gt; loading neural_weights [================] 100%</p>
                <p>&gt; establishing secure uplink...</p>
                <p className="text-white">
                  &gt; prompt: &quot;cyberpunk samurai in neon rain, octane render&quot;
                </p>
                <p>&gt; processing...</p>
                <div className="mt-4 relative group">
                  <img
                    src="hero.jpg"
                    alt="Generated Art"
                    className="w-full h-64 object-cover filter grayscale-50 group-hover:grayscale-0 transition-all duration-500 border border-green-500/30"
                  />
                </div>
                <p className="animate-pulse">
                  &gt; generation complete.{' '}
                  <span className="inline-block w-2 h-4 bg-green-400 align-middle"></span>
                </p>
              </div>

              {/* Decorative Elements */}
              <Cpu
                className="absolute -right-6 -bottom-6 text-nova-pink opacity-20 rotate-12"
                size={120}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-nova-pink to-transparent"></div>
      </div>
    </section>
  );
};
