import React from 'react';
import { Button } from '@/ui/Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-nova-border bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <div>
            <div className="inline-block px-3 py-1 border border-nova-pink text-nova-pink font-mono text-xs mb-6">
              ORIGIN SIGNAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WE ARE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                SYNTHETIC AVANT-GARDE
              </span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light">
              <p>
                Nova.ai wasn&apos;t built in a boardroom. It was forged in a basement by three
                engineers and a digital artist who were tired of restrictive algorithms and censored
                creativity.
              </p>
              <p>
                We believe that AI shouldn&apos;t replace human creativity—it should amplify it to
                god-like levels. We build tools for the dreamers, the hackers, and the visual
                storytellers who demand total control over their synthetic reality.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div>
                <h4 className="text-2xl font-bold text-white font-mono">12+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white font-mono">500k</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Users</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white font-mono">100%</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Independent</p>
              </div>
            </div>

            <div className="mt-10">
              <Button variant="outline">Read The Manifesto</Button>
            </div>
          </div>

          {/* Right Column: Visual "Data Log" */}
          <div className="relative">
            {/* Decorative Backdrop */}
            <div className="absolute -inset-4 bg-nova-pink/5 blur-xl rounded-full opacity-20"></div>

            <div className="relative border border-gray-800 bg-black/80 p-2 font-mono text-sm">
              {/* Header */}
              <div className="flex items-center justify-between bg-gray-900 p-2 border-b border-gray-800 mb-2">
                <span className="text-gray-400">mission_log.txt</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 h-[400px] overflow-y-auto custom-scrollbar text-xs md:text-sm">
                <div className="text-gray-500 border-l-2 border-gray-700 pl-2">
                  <span className="text-blue-400">2023-01-12 08:42:00</span> <br />
                  &gt; Initializing Project Nova.
                  <br />
                  &gt; Objective: Break the closed-source monopoly.
                  <br />
                  &gt; Status: <span className="text-yellow-500">Alpha</span>
                </div>

                <div className="text-gray-500 border-l-2 border-gray-700 pl-2">
                  <span className="text-blue-400">2023-06-15 14:20:11</span> <br />
                  &gt; First 10k users onboarded.
                  <br />
                  &gt; GPU clusters overheating.
                  <br />
                  &gt; Solution: Liquid cooling implementation.
                </div>

                <div className="text-gray-500 border-l-2 border-gray-700 pl-2">
                  <span className="text-blue-400">2023-11-02 03:15:45</span> <br />
                  &gt; Model v1.5 released.
                  <br />
                  &gt; Fidelity score increased by 400%.
                  <br />
                  &gt; Community art gallery launched.
                </div>

                <div className="text-gray-500 border-l-2 border-gray-700 pl-2">
                  <span className="text-blue-400">2024-02-28 11:00:00</span> <br />
                  &gt; Enterprise API integration live.
                  <br />
                  &gt; Partnership with [REDACTED] established.
                  <br />
                  &gt; Status: <span className="text-green-500">Scaling</span>
                </div>

                <div className="text-white border-l-2 border-nova-pink pl-2 bg-nova-pink/5 py-2">
                  <span className="text-nova-pink">CURRENT_TIME</span> <br />
                  &gt; We are just getting started.
                  <br />
                  &gt; The future is generative.
                  <br />
                  &gt; <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-nova-pink/50"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
