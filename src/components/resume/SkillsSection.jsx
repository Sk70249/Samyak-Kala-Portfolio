import React from 'react';
import { Code } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Salesforce',
      icon: <Code className="h-6 w-6" />,
      items: ['Apex', 'Lightning Web Components', 'Visualforce', 'SOQL/SOSL', 'Process Builder', 'Flow Builder']
    },
    {
      category: 'Programming',
      icon: <Code className="h-6 w-6" />,
      items: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'Java']
    },
    {
      category: 'Tools & Platforms',
      icon: <Code className="h-6 w-6" />,
      items: ['VS Code', 'Git', 'JIRA', 'Jenkins', 'Postman', 'Workbench']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skillGroup, index) => (
        <div 
          key={index} 
          className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              {skillGroup.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;