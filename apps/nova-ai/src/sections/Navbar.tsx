import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', pathname: '/', hash: '#features' },
    { name: 'Gallery', pathname: '/', hash: '#gallery' },
    { name: 'About', pathname: '/', hash: '#about' },
    { name: 'Pricing', pathname: '/', hash: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-nova-dark/50 backdrop-blur-md border-nova-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 border border-nova-pink bg-nova-pink/10 group-hover:bg-nova-pink group-hover:text-black transition-colors">
              <Terminal size={24} />
            </div>
            <span className="text-2xl font-mono font-bold tracking-tighter">
              NOVA<span className="text-nova-pink">.AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, pathname, hash }) => (
              <Link
                key={name}
                to={{ pathname, hash }}
                className="font-mono text-sm text-gray-400 hover:text-nova-pink transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-nova-pink hover:after:w-full after:transition-all"
              >
                {name}
              </Link>
            ))}
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="font-bold" onClick={() => navigate('/explore')}>
              Explore
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-nova-pink transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-nova-dark border-b border-nova-border absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={{ pathname: link.pathname, hash: link.hash }}
                className="block px-3 py-2 text-base font-mono text-gray-300 hover:text-nova-pink hover:bg-white/5 border-l-2 border-transparent hover:border-nova-pink transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center">Get Access</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
