import React from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="h-6 w-6" />, title: 'Web Development', description: 'Full-stack development with modern technologies' },
    { icon: <Palette className="h-6 w-6" />, title: 'UI/UX Design', description: 'Creating intuitive and beautiful interfaces' },
    { icon: <Globe className="h-6 w-6" />, title: 'Digital Marketing', description: 'SEO and social media strategy' },
    { icon: <Zap className="h-6 w-6" />, title: 'Performance', description: 'Optimized and scalable solutions' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm a passionate developer and designer with over 5 years of experience in creating
              digital solutions that make a difference. My approach combines technical expertise
              with creative problem-solving to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-700 rounded-lg text-indigo-400">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;