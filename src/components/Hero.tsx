import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import DeveloperIllustration from './DeveloperIllustration';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-2">
            <div className="relative w-full max-w-md mx-auto transform scale-75">
              <div className={`absolute -inset-4 rounded-lg blur-xl ${
                isDark ? 'bg-indigo-500/20' : 'bg-indigo-500/10'
              }`}></div>
              <div className="relative transform scale-x-[-1]">
                <DeveloperIllustration className={`w-full h-auto ${isDark ? 'text-gray-200' : 'text-gray-800'}`} />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className={`text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Software Developer &
                <span className="text-indigo-600 block mt-2">Digital Artist</span>
              </h1>
              <ThemeToggle />
            </div>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Crafting digital experiences that blend creativity with technical excellence.
              Specialized in web development, UI/UX design, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;