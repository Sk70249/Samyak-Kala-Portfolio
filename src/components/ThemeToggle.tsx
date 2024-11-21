import React, { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if no input elements are focused
      if (document.activeElement?.tagName !== 'INPUT' && 
          document.activeElement?.tagName !== 'TEXTAREA') {
        if (e.key.toLowerCase() === 'd') {
          !isDark && toggleTheme();
        } else if (e.key.toLowerCase() === 'l') {
          isDark && toggleTheme();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDark, toggleTheme]);

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-12 rounded-full
        flex items-center justify-center
        transition-all duration-500
        hover:ring-4 hover:ring-opacity-50
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        ${isDark 
          ? 'bg-gray-800 hover:ring-yellow-500/20 focus:ring-yellow-500/20' 
          : 'bg-blue-50 hover:ring-blue-500/20 focus:ring-blue-500/20'
        }
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode (Press ${isDark ? 'L' : 'D'})`}
    >
      <div className="relative w-6 h-6">
        <span
          className={`
            absolute inset-0 transform transition-transform duration-500
            ${isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}
          `}
        >
          <Sun className="w-6 h-6 text-yellow-400" />
        </span>
        <span
          className={`
            absolute inset-0 transform transition-transform duration-500
            ${isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}
          `}
        >
          <Moon className="w-6 h-6 text-blue-600" />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;