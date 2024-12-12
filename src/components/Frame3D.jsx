import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Code, Briefcase, Mail } from 'lucide-react';

const Frame3D = ({ frontImage, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const QuickLink = React.memo(({ href, icon, children }) => (
    <a href={href} className="flex items-center space-x-2 hover:text-indigo-200 transition-colors">
      {icon}
      <span>{children}</span>
    </a>
  ));

  QuickLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };

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
            {/* 3D Frame Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-2 scale-105 opacity-20 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform -rotate-2 scale-105 opacity-20 blur-xl" />
            
            {/* Main Frame */}
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
          <div className="relative w-full h-full bg-gray-800 rounded-xl p-6 transform transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-90" />
            <div className="relative h-full flex flex-col justify-center items-center text-white space-y-4">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              
              <QuickLink href="#portfolio" icon={<Code className="h-5 w-5" />}>
                Portfolio
              </QuickLink>
              
              <QuickLink href="#resume" icon={<Briefcase className="h-5 w-5" />}>
                Resume
              </QuickLink>
              
              <QuickLink href="#contact" icon={<Mail className="h-5 w-5" />}>
                Contact
              </QuickLink>

              <p className="text-sm text-center mt-4 text-indigo-200">
                Click to flip back
              </p>
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