import React from 'react';
import { ChevronRight, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experience = [
    {
      role: 'Senior Salesforce Developer',
      company: 'TechCorp Solutions',
      period: '2021 - Present',
      location: 'Bangalore, India',
      achievements: [
        'Led team of 5 developers in implementing complex Salesforce solutions',
        'Reduced system processing time by 40% through optimization',
        'Implemented automated testing framework increasing coverage to 95%'
      ]
    },
    {
      role: 'Salesforce Developer',
      company: 'Cloud Innovations',
      period: '2019 - 2021',
      location: 'Mumbai, India',
      achievements: [
        'Developed custom Lightning components for sales process automation',
        'Integrated Salesforce with external systems using REST APIs',
        'Mentored junior developers in best practices'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {experience.map((exp, index) => (
        <div 
          key={index} 
          className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="p-2 bg-indigo-600/20 rounded-lg">
                <Briefcase className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-indigo-400">{exp.company}</p>
                <p className="text-gray-400">{exp.location}</p>
              </div>
            </div>
            <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full text-sm">
              {exp.period}
            </span>
          </div>
          <ul className="mt-4 space-y-2 ml-12">
            {exp.achievements.map((achievement, i) => (
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

export default ExperienceSection;