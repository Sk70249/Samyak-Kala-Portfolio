import React from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: <Code className="h-6 w-6" />, 
      title: 'Salesforce Expert', 
      description: 'Specialized in building scalable Salesforce solutions with modern best practices' 
    },
    { 
      icon: <Palette className="h-6 w-6" />, 
      title: 'Problem Solver', 
      description: 'Passionate about solving complex technical challenges with elegant solutions' 
    },
    { 
      icon: <Globe className="h-6 w-6" />, 
      title: 'Team Player', 
      description: 'Experienced in leading and collaborating with cross-functional teams' 
    },
    { 
      icon: <Zap className="h-6 w-6" />, 
      title: 'Continuous Learner', 
      description: 'Always staying updated with the latest technology trends and best practices' 
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate Salesforce Developer with expertise in building scalable cloud solutions. 
            I combine technical excellence with a deep understanding of business needs to deliver 
            impactful solutions that drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-700 rounded-lg text-indigo-400">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;