import React from 'react';
import { Terminal, Github, Twitter, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nova-border bg-black/60 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-nova-pink" />
              <span className="text-xl font-mono font-bold">NOVA.AI</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Redefining the boundaries between human imagination and algorithmic precision. Join
              the resistance against boring art.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-4 text-white uppercase text-sm tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="#" className="hover:text-nova-pink transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-nova-pink transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-nova-pink transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-nova-pink transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-4 text-white uppercase text-sm tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <Link
                to="#"
                className="p-2 border border-nova-border hover:border-nova-pink hover:text-nova-pink transition-colors"
              >
                <Github size={18} />
              </Link>
              <Link
                to="#"
                className="p-2 border border-nova-border hover:border-nova-pink hover:text-nova-pink transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                to="#"
                className="p-2 border border-nova-border hover:border-nova-pink hover:text-nova-pink transition-colors"
              >
                <Disc size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-nova-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; 2024 Nova Artificial Intelligence Systems. All systems nominal.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Protocol
            </Link>
            <Link to="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
