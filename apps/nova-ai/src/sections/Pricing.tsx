import React from 'react';
import { Button } from '@/ui/Button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'INITIATE',
    price: '0',
    description: 'For curious minds testing the waters.',
    features: [
      '50 Generations / month',
      'Standard Speed',
      'Public Gallery',
      '720p Export',
      'CC-BY License',
    ],
  },
  {
    name: 'ADEPT',
    price: '29',
    recommended: true,
    description: 'For digital artists and freelancers.',
    features: [
      'Unlimited Generations',
      'Fast GPU Priority',
      'Private Mode',
      '4K Export',
      'Commercial License',
      'Layer Separation',
    ],
  },
  {
    name: 'VANGUARD',
    price: '99',
    description: 'For studios and power users.',
    features: [
      'Everything in Adept',
      'API Access',
      'Custom Model Training',
      '8K Upscaling',
      'Dedicated Support',
      'Team Seats (x3)',
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-24 relative bg-black/40 backdrop-blur-sm border-t border-nova-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ACQUIRE ACCESS</h2>
          <p className="font-mono text-nova-pink text-lg">Select your processing power.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                relative p-8 border flex flex-col h-full transition-all duration-300
                ${
                  tier.recommended
                    ? 'border-nova-pink bg-nova-pink/5 shadow-[0_0_30px_rgba(255,0,85,0.1)] z-10 scale-105 backdrop-blur-md'
                    : 'border-nova-border bg-nova-panel/60 hover:border-gray-500 backdrop-blur-md'
                }
              `}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nova-pink text-black text-xs font-bold px-3 py-1 uppercase tracking-wider border border-nova-pink">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-mono font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-gray-500 font-mono">/mo</span>
              </div>
              <p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-8">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={tier.recommended ? 'text-nova-pink' : 'text-gray-500'}
                    />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.recommended ? 'primary' : 'outline'} className="w-full">
                Initialize
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
