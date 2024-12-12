import React from 'react';
import { ChevronRight, GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      period: '2015 - 2019',
      location: 'Delhi, India',
      achievements: [
        'First Class Honours',
        'Published research paper on Cloud Computing',
        'Led the Technical Society'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div 
          key={index} 
          className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="p-2 bg-indigo-600/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-indigo-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.location}</p>
              </div>
            </div>
            <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full text-sm">
              {edu.period}
            </span>
          </div>
          <ul className="mt-4 space-y-2 ml-12">
            {edu.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start text-gray-300 group">
                <ChevronRight className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;