import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      style={{
        backgroundColor: isDark ? '#1a1b1e' : '#e2e8f0',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className="block w-5 h-5 rounded-full transition-transform duration-300 relative"
        style={{
          transform: isDark ? 'translateX(100%)' : 'translateX(0)',
          backgroundColor: isDark ? '#f1c40f' : '#ffffff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="absolute h-1 w-1 bg-white rounded-full top-1 left-1" />
          <span className="absolute h-1 w-1 bg-white rounded-full bottom-2 right-2" />
          <span className="absolute h-0.5 w-0.5 bg-white rounded-full top-3 right-1" />
        </span>
        
        <span
          className={`absolute right-1 top-1 h-2 w-2 rounded-full transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundColor: '#e2e8f0',
          }}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;