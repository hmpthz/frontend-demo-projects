import React from 'react';
import { Cpu, Globe, Shield, BarChart3, Database, Code2 } from 'lucide-react';

export const AdvancedFeatures: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white">
              CORE ARCHITECTURE
            </h2>
            <p className="font-mono text-nova-pink text-sm mt-2">/// SYSTEM SPECIFICATIONS</p>
          </div>
          <div className="hidden md:block font-mono text-xs text-gray-500">STATUS: OPTIMIZED</div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Tile - Global Network */}
          <div className="md:col-span-2 md:row-span-2 bg-nova-panel/60 backdrop-blur-md border border-nova-border p-8 relative overflow-hidden group hover:border-nova-pink/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Globe size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-nova-pink/20 border border-nova-pink flex items-center justify-center mb-6 text-nova-pink">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold font-mono mb-4">Distributed Neural Grid</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Our decentralized node network ensures zero-downtime generation. By leveraging
                  distributed GPU clusters across 14 regions, Nova.ai delivers sub-second latency
                  regardless of your physical location.
                </p>
              </div>

              {/* Fake Graph Visual */}
              <div className="mt-8 p-4 bg-black/40 border border-white/10 font-mono text-xs">
                <div className="flex justify-between mb-2 text-gray-500">
                  <span>LATENCY</span>
                  <span>5ms</span>
                </div>
                <div className="w-full h-32 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 60, 85, 50, 70].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-nova-pink/40 hover:bg-nova-pink transition-colors"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small Tile - Encryption */}
          <div className="bg-nova-panel/60 backdrop-blur-md border border-nova-border p-6 relative group hover:border-blue-500/50 transition-colors">
            <Shield className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-bold font-mono mb-2">E2E Encryption</h3>
            <p className="text-sm text-gray-400">
              Your prompts and outputs are encrypted at rest. Enterprise-grade security protocols
              standard.
            </p>
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Small Tile - Processing Power */}
          <div className="bg-nova-panel/60 backdrop-blur-md border border-nova-border p-6 relative group hover:border-green-500/50 transition-colors">
            <Cpu className="text-green-500 mb-4" size={32} />
            <h3 className="text-lg font-bold font-mono mb-2">H100 Clusters</h3>
            <p className="text-sm text-gray-400">
              Powered by the latest NVIDIA H100 Tensor Core GPUs for maximum throughput.
            </p>
            <div className="mt-4 w-full bg-gray-800 h-1">
              <div className="bg-green-500 h-1 w-[98%] animate-pulse"></div>
            </div>
            <div className="text-right text-[10px] font-mono text-green-500 mt-1">98% LOAD</div>
          </div>

          {/* Small Tile - Analytics */}
          <div className="md:col-span-1 bg-nova-panel/60 backdrop-blur-md border border-nova-border p-6 flex flex-col justify-between group hover:border-yellow-500/50 transition-colors">
            <div>
              <BarChart3 className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-bold font-mono mb-2">Usage Metrics</h3>
              <p className="text-sm text-gray-400">
                Real-time token tracking and cost optimization dashboard included.
              </p>
            </div>
            <div className="font-mono text-2xl font-bold text-white mt-4">
              4.2M <span className="text-xs text-gray-500 font-normal">GENS/DAY</span>
            </div>
          </div>

          {/* Wide Tile - Integration Ecosystem */}
          <div className="md:col-span-2 bg-nova-panel/60 backdrop-blur-md border border-nova-border p-6 relative group hover:border-purple-500/50 transition-colors flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-purple-500" size={32} />
                <h3 className="text-lg font-bold font-mono">Universal API</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Seamlessly integrate Nova into your production pipeline. First-class support for
                Python, Node.js, Unity, and Unreal Engine.
              </p>
              <div className="flex gap-2 text-xs font-mono text-gray-500">
                <span className="bg-white/5 px-2 py-1 border border-white/10">REST</span>
                <span className="bg-white/5 px-2 py-1 border border-white/10">GraphQL</span>
                <span className="bg-white/5 px-2 py-1 border border-white/10">gRPC</span>
              </div>
            </div>

            {/* Code Snippet Visual */}
            <div className="w-full md:w-1/2 bg-black/60 border border-white/10 p-3 font-mono text-[10px] text-gray-300 rounded-sm overflow-hidden">
              <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-2">
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              </div>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">nova</span> ={' '}
                <span className="text-purple-400">new</span> NovaClient(key);
              </p>
              <p>
                <span className="text-purple-400">await</span> nova.generate({'{'}
              </p>
              <p className="pl-4">
                prompt: <span className="text-green-400">&quot;hyper-realistic...&quot;</span>,
              </p>
              <p className="pl-4">
                model: <span className="text-green-400">&quot;nova-xl-v4&quot;</span>
              </p>
              <p>&rbrace;);</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
