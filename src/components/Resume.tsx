import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Code, Star, Download, ChevronRight } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

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

  const certifications = [
    {
      name: 'Salesforce Platform Developer II',
      issuer: 'Salesforce',
      date: 'Jan 2023',
      credentialId: 'SF-PDev2-123'
    },
    {
      name: 'Salesforce Platform Developer I',
      issuer: 'Salesforce',
      date: 'Mar 2022',
      credentialId: 'SF-PDev1-456'
    },
    {
      name: 'Salesforce Administrator',
      issuer: 'Salesforce',
      date: 'Jun 2021',
      credentialId: 'SF-Admin-789'
    }
  ];

  const skills = [
    {
      category: 'Salesforce',
      items: ['Apex', 'Lightning Web Components', 'Visualforce', 'SOQL/SOSL', 'Process Builder', 'Flow Builder']
    },
    {
      category: 'Programming',
      items: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'Java']
    },
    {
      category: 'Tools & Platforms',
      items: ['VS Code', 'Git', 'JIRA', 'Jenkins', 'Postman', 'Workbench']
    }
  ];

  return (
    <section id="resume" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Resume</h2>
          <p className="text-lg text-gray-300">Professional Journey and Achievements</p>
        </div>

        {/* Resume Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {['experience', 'education', 'certifications', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Experience Section */}
        <div className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-400">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <ChevronRight className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-1" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-indigo-400">{edu.institution}</p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full text-sm">
                    {edu.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <ChevronRight className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-1" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={`${activeTab === 'certifications' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <Award className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-indigo-400">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                <p className="text-gray-500 text-sm mt-1">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;