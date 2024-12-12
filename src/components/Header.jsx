import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="font-signature text-2xl text-indigo-600 hover:text-indigo-500 transition-colors">
              Samyak Kala
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-indigo-400' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="https://github.com/Sk70249" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-indigo-400' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/samyak-kala-933a77169/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-indigo-400' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.kaggle.com/samyakkala" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-indigo-400' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <BookOpen size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;