import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Github, Linkedin, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { smoothScroll, throttle } from '../utils/smoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

  const handleScroll = useCallback(throttle(() => {
    setIsScrolled(window.scrollY > 0);
  }, 100), []); // Throttle scroll events to every 100ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    smoothScroll(targetId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 will-change-transform ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-signature text-2xl italic text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Samyak Kala
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
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
              <Github className="w-5 h-5" />
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
              <Linkedin className="w-5 h-5" />
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
              <BookOpen className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
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

export default React.memo(Header);