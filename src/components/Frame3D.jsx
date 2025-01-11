import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Code, Briefcase, Mail } from 'lucide-react';

const Frame3D = ({ frontImage, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback((e) => {
    e.stopPropagation();
    setIsFlipped(prev => !prev);
  }, []);

  return (
    <div className={`perspective-1000 ${className}`}>
      <div 
        className={`relative w-full h-[600px] cursor-pointer transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-2 scale-105 opacity-20 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform -rotate-2 scale-105 opacity-20 blur-xl" />
            
            <div className="relative h-full bg-gray-800 rounded-xl p-2 transform transition-transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-50" />
              <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={frontImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-2 scale-105 opacity-20 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform -rotate-2 scale-105 opacity-20 blur-xl" />
            
            <div className="relative h-full bg-gray-800 rounded-xl p-2">
              <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={frontImage}
                  alt="Profile"
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-6 p-8">
                  <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                  
                  <a 
                    href="#portfolio" 
                    className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code className="h-5 w-5" />
                    <span>Portfolio</span>
                  </a>
                  
                  <a 
                    href="#resume" 
                    className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Briefcase className="h-5 w-5" />
                    <span>Resume</span>
                  </a>
                  
                  <a 
                    href="#contact" 
                    className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="h-5 w-5" />
                    <span>Contact</span>
                  </a>

                  <button 
                    onClick={handleFlip}
                    className="text-sm text-indigo-200 hover:text-white transition-colors mt-4"
                  >
                    Click to flip back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame3D.propTypes = {
  frontImage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default React.memo(Frame3D);