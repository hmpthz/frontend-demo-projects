import React from 'react';
import { Card } from '@/ui/Card';
import { Wand2, Zap, Share2, Lock, Code, Layers } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="text-nova-pink" size={32} />,
    title: 'Neural Synthesis',
    description:
      'Proprietary algorithms designed to mimic brush strokes and digital artifacts with 99.8% fidelity.',
  },
  {
    icon: <Zap className="text-blue-400" size={32} />,
    title: 'Real-time Rendering',
    description: 'Generate 4K assets in under 3 seconds. No queues. No waiting. Pure velocity.',
  },
  {
    icon: <Layers className="text-purple-500" size={32} />,
    title: 'Layer Control',
    description:
      'The only AI tool that exports editable PSDs with separated foreground, background, and subjects.',
  },
  {
    icon: <Code className="text-green-400" size={32} />,
    title: 'API First',
    description:
      'Built for developers. Integrate Nova directly into your game engine or workflow via REST or GraphQL.',
  },
  {
    icon: <Share2 className="text-yellow-400" size={32} />,
    title: 'Collaborative Canvas',
    description:
      'Share workspaces with your team. Branch and merge generations like Git repositories.',
  },
  {
    icon: <Lock className="text-red-500" size={32} />,
    title: 'Commercial Rights',
    description:
      'You own what you create. Full commercial licensing included in every Pro subscription.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-nova-pink">{'///'}</span> SYSTEM MODULES
          </h2>
          <div className="h-1 w-24 bg-nova-pink"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:bg-white/5 transition-colors">
              <div className="mb-6 p-3 bg-white/5 inline-block border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-mono mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
